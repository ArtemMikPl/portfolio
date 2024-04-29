'use client'
import React from 'react';
import styles from '../../styles/contact/contact.module.scss'
import MainTitle from "@/components/api/MainTitle";
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
                            <a target={'_blank'} href={'https://www.facebook.com/profile.php?id=100016067163801'} className={styles.contact__list__item}>
                                <span className={styles.contact__list__item__title}>Facebook</span>
                                <span className={`${styles.contact__list__item__imgBlock} ${styles.contact__list__item__img_fb}`}>
                                <img className={styles.contact__list__item__img} src="/img/fb.svg" alt="facebook"/>
                            </span>
                            </a>
                            <a target={'_blank'} href={'https://t.me/zxcfvhnjm'} className={styles.contact__list__item}>
                                <span className={styles.contact__list__item__title}>Telegram</span>
                                <span className={`${styles.contact__list__item__imgBlock} ${styles.contact__list__item__img_tg}`}>
                                    <img className={styles.contact__list__item__img} src="/img/tg.svg" alt="vk"/>
                                </span>
                            </a>
                            <a target={'_blank'} href={'https://www.youtube.com/channel/UCI6gznkVR6lb2oRxbpHsG3g'} className={styles.contact__list__item}>
                                <span className={styles.contact__list__item__title}>YouTube</span>
                                <span className={`${styles.contact__list__item__imgBlock} ${styles.contact__list__item__img_yt}`}>
                                <img className={styles.contact__list__item__img} src="/img/yt.svg" alt="youtube"/>
                            </span>
                            </a>
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