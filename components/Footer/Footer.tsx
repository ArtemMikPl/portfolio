import React from 'react';
import styles from '../../styles/footer/footer.module.scss'
import Link from "next/link";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.footer__container}`}>
                <span className={styles.footer__border}></span>
                <div className={styles.footer__inner}>
                    <div className={styles.footer__left}>
                        <img className={styles.footer__img} src="/img/logo.png" alt="logo"/>
                        <div>
                            <p className={styles.footer__copy}>©️2018-2024</p>
                            <p className={styles.footer__copy}>Arejim</p>
                        </div>
                    </div>
                    <div className={styles.footer__right}>
                        <div className={styles.footer__share}>
                            <p className={styles.footer__share__title}>Share the site with your friends:</p>
                            <ul className={styles.footer__share__list}>
                                <li className={styles.footer__share__list__item}>
                                    <Link href={'#'} className={styles.footer__share__list__item__title}>Facebook</Link>
                                    <span className={styles.footer__share__list__item__imgBlock}>
                                        <img className={styles.footer__share__list__item__img} src="/img/fb.svg" alt="facebook"/>
                                    </span>
                                </li>
                                <li className={styles.footer__share__list__item}>
                                    <Link href={'#'} className={styles.footer__share__list__item__title}>VK</Link>
                                    <span className={styles.footer__share__list__item__imgBlock}>
                                        <img className={styles.footer__share__list__item__img} src="/img/vk.svg" alt="vk"/>
                                    </span>
                                </li>
                                <li className={styles.footer__share__list__item}>
                                    <Link href={'#'} className={styles.footer__share__list__item__title}>YouTube</Link>
                                    <span className={styles.footer__share__list__item__imgBlock}>
                                        <img className={styles.footer__share__list__item__img} src="/img/yt.svg" alt="youtube"/>
                                    </span>
                                </li>
                            </ul>
                        </div>
                        <div className={styles.footer__pages}>
                            <Link href={'/cookie-policy'} passHref legacyBehavior>
                                <a className={styles.footer__pages__text}>Cookie Policy</a>
                            </Link>
                            <Link href={'/privacy-policy'} passHref legacyBehavior>
                                <a className={styles.footer__pages__text}>Privacy Policy</a>
                            </Link>
                            <Link href={'/personal-data-of-clients'} passHref legacyBehavior>
                                <a className={styles.footer__pages__text}>Personal data processing policy</a>
                            </Link>
                            <Link href={'/personal-data-policy'} passHref legacyBehavior>
                                <a className={styles.footer__pages__text}>Consent to the processing of personal data of clients - individuals</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;