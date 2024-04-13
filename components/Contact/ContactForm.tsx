'use client'
import React, {MutableRefObject} from 'react';
import emailjs from '@emailjs/browser'
import ContactInput from "@/components/Contact/ContactInput";
import Link from "next/link";
import styles from '../../styles/contact/contact.module.scss'
import {toast} from "react-toastify";
import {PropagateLoader} from "react-spinners";

const ContactForm = () => {
    const [acceptRules, setAcceptRules] = React.useState(false)
    const [spinner, setSpinner] = React.useState(false)
    const formRef = React.useRef() as MutableRefObject<HTMLFormElement>

    const toggleAcceptRules = () => setAcceptRules(!acceptRules)

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        setSpinner(true)
        emailjs.sendForm('service_2l6b0r6', 'template_zjzy4hi', formRef.current, 'R7COO8GrkC-XO-j0Z')
            .then(result => {
                setSpinner(false)
                toast(`Success ${result.text}`)
            }, error => {
                setSpinner(false)
                toast.error(`Success ${error.text}`)
            })
        formRef.current.reset()
        toggleAcceptRules()

    }

    return (
        <form onSubmit={sendEmail} className={styles.contact__form} ref={formRef}>
            <ContactInput
                type={'text'}
                text={'FULL NAME.*'}
                placeholder={'Write your full name.'}
                name={'fullName'}
            />
            <ContactInput
                type={'text'}
                text={'Position/company'}
                placeholder={'Indicate your position/company'}
                name={'company'}
            />
            <ContactInput
                type={'text'}
                text={'E-mail*'}
                placeholder={'Enter your email'}
                name={'email'}
            />
            <ContactInput
                type={'text'}
                text={'Phone number or Telegram*'}
                placeholder={'Enter your phone number or Telegram'}
                name={'phone'}
            />
            <button disabled={!acceptRules} className={styles.contact__form__button}>
                {spinner ? <PropagateLoader color={'#fff'}/> : 'Send'}
            </button>
            <label className={styles.contact__checkbox} htmlFor="">
                <input className={styles.contact__checkbox__input} onClick={toggleAcceptRules} type="checkbox"/>
                <span className={styles.contact__checkbox__text}>
                    By clicking on the “Submit Application” button,
                    <Link legacyBehavior href={'/privacy-policy'} passHref>
                        <a className={styles.contact__checkbox__text__link}> I agree to the Privacy Policy</a>
                    </Link> and consent to the
                    <Link legacyBehavior href={'/personal-data-policy'} passHref>
                        <a className={styles.contact__checkbox__text__link}> processing of personal data</a>
                    </Link>.
                </span>
            </label>
        </form>
    );
};

export default ContactForm;