
import React from 'react';
import styles from '../../styles/contact/contact.module.scss'
import MainTitle from "@/components/api/MainTitle";
import Link from "next/link";
import ArrowSvg from "@/components/api/ArrowSvg";
import ContactForm from "@/components/Contact/ContactForm";

const Contact = () => {
    return (
        <section id={'contact'} className={styles.contact}>
            <div className="container">
                <MainTitle text={'contact me'}/>
            </div>
            <div className={`sub-container ${styles.sub_container}`}>
                <div className={styles.contact__inner}>
                    <div className={styles.contact__left}>
                        <p className={styles.contact__description}>Are you working on something great? I will be happy to help you with this! Write me an email and we will start the project right now!</p>
                        <p className={styles.contact__description}>Just do it)</p>
                        <div className={styles.contact__title}>
                            <span className={styles.contact__title__text}>I&apos;m on social networks:</span>
                            <span className={styles.contact__title__arrow}><ArrowSvg/></span>
                            <span className={styles.contact__title__border}></span>
                        </div>
                        <ul className={styles.contact__list}>
                            <li className={styles.contact__list__item}><Link href={'#'} className={styles.contact__list__item__title}>Facebook</Link><span className={styles.contact__list__item__imgBlock}><img className={styles.contact__list__item__img} src="/img/fb.svg" alt="facebook"/></span></li>
                            <li className={styles.contact__list__item}><Link href={'#'} className={styles.contact__list__item__title}>VK</Link><span className={styles.contact__list__item__imgBlock}><img className={styles.contact__list__item__img} src="/img/vk.svg" alt="vk"/></span></li>
                            <li className={styles.contact__list__item}><Link href={'#'} className={styles.contact__list__item__title}>YouTube</Link><span className={styles.contact__list__item__imgBlock}><img className={styles.contact__list__item__img} src="/img/yt.svg" alt="youtube"/></span></li>
                        </ul>
                    </div>
                    <div className={styles.contact__right}>
                        <ContactForm/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;