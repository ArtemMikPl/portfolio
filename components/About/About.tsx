'use client'
import React from 'react';
import styles from '../../styles/about/about.module.scss'
import MainTitle from "@/components/api/MainTitle";
import ArrowSvg from "@/components/api/ArrowSvg";
import Link from "next/link";
import {useMediaQuery} from "@/hooks";

const About = () => {

    const isMobile1080 = useMediaQuery(1080);
    const isMobile600 = useMediaQuery(600);

    return (
        <section id='about' className={styles.about}>
            <div className="container">
                <MainTitle text={'about me'}/>
            </div>
            <div className={`sub-container ${styles.about__sub_container}`}>
                    <img className={styles.about__img} src="/img/ya.jpg" alt="About"/>
                <div className={styles.about__inner}>
                    <h3 className={styles.about__title}>
                        Artem Mykolaichuk
                        <span className={styles.about__title__border}>
                            <span className={styles.about__title__border__arrow}>
                                <ArrowSvg/>
                            </span>
                            <span className={styles.about__title__border__line}/>
                        </span>
                    </h3>
                    <p className={styles.about__description}>
                        I was born in Ukraine, now I live in Poland, Krakow. Currently I work as a freelancer.
                        <br/>Actively searching for a stable job.
                    </p>
                    {!isMobile1080 || isMobile600 ? <ul className={styles.about__list}>
                        <a target={'_blank'} href={'https://www.facebook.com/profile.php?id=100016067163801'} className={styles.about__list__item}>
                                <span className={styles.about__list__item__title}>Facebook</span>
                                <span className={`${styles.about__list__item__imgBlock} ${styles.about__list__item__img_fb}`}>
                                <img className={styles.about__list__item__img} src="/img/fb.svg" alt="facebook"/>
                            </span>
                        </a>
                        <a target={'_blank'} href={'https://t.me/zxcfvhnjm'} className={styles.about__list__item}>
                                <span className={styles.about__list__item__title}>Telegram</span>
                                <span className={`${styles.about__list__item__imgBlock} ${styles.about__list__item__img_tg}`}>
                                    <img className={styles.about__list__item__img} src="/img/tg.svg" alt="vk"/>
                                </span>
                        </a>
                        <a target={'_blank'} href={'https://www.youtube.com/channel/UCI6gznkVR6lb2oRxbpHsG3g'} className={styles.about__list__item}>
                                <span className={styles.about__list__item__title}>YouTube</span>
                                <span className={`${styles.about__list__item__imgBlock} ${styles.about__list__item__img_yt}`}>
                                <img className={styles.about__list__item__img} src="/img/yt.svg" alt="youtube"/>
                            </span>
                        </a>
                    </ul> : ''}
                </div>
            </div>
            <div className="sub-container">
                {isMobile1080 && !isMobile600 && <ul className={styles.about__list}>
                    <a target={'_blank'} href={'https://www.facebook.com/profile.php?id=100016067163801'} className={styles.about__list__item}>
                        <span className={styles.about__list__item__title}>Facebook</span>
                        <span className={`${styles.about__list__item__imgBlock} ${styles.about__list__item__img_fb}`}>
                                <img className={styles.about__list__item__img} src="/img/fb.svg" alt="facebook"/>
                            </span>
                    </a>
                    <a target={'_blank'} href={'https://t.me/zxcfvhnjm'} className={styles.about__list__item}>
                        <span className={styles.about__list__item__title}>Telegram</span>
                        <span className={`${styles.about__list__item__imgBlock} ${styles.about__list__item__img_tg}`}>
                                    <img className={styles.about__list__item__img} src="/img/tg.svg" alt="vk"/>
                                </span>
                    </a>
                    <a target={'_blank'} href={'https://www.youtube.com/channel/UCI6gznkVR6lb2oRxbpHsG3g'} className={styles.about__list__item}>
                        <span className={styles.about__list__item__title}>YouTube</span>
                        <span className={`${styles.about__list__item__imgBlock} ${styles.about__list__item__img_yt}`}>
                                <img className={styles.about__list__item__img} src="/img/yt.svg" alt="youtube"/>
                            </span>
                    </a>
                </ul> }
            </div>
        </section>
    );
};

export default About;