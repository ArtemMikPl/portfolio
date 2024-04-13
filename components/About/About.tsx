
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
                    <img className={styles.about__img} src="/img/about.png" alt="About"/>
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
                    <p className={styles.about__description}>Located in Hartford, Connecticut.
                        I currently work part-time as a Remote Junior Web Developer for Color based in Las Vegas. I&apos;m looking to take on more work and improve my skills as a web developer.
                    </p>
                    {!isMobile1080 || isMobile600 ? <ul className={styles.about__list}>
                        <li className={styles.about__list__item}><Link href={'#'} className={styles.about__list__item__title}>Facebook</Link><span className={styles.about__list__item__imgBlock}><img className={styles.about__list__item__img} src="/img/fb.svg" alt="facebook"/></span></li>
                        <li className={styles.about__list__item}><Link href={'#'} className={styles.about__list__item__title}>VK</Link><span className={styles.about__list__item__imgBlock}><img className={styles.about__list__item__img} src="/img/vk.svg" alt="vk"/></span></li>
                        <li className={styles.about__list__item}><Link href={'#'} className={styles.about__list__item__title}>YouTube</Link><span className={styles.about__list__item__imgBlock}><img className={styles.about__list__item__img} src="/img/yt.svg" alt="youtube"/></span></li>
                    </ul> : ''}
                </div>
            </div>
            <div className="sub-container">
                {isMobile1080 && !isMobile600 && <ul className={styles.about__list}>
                    <li className={styles.about__list__item}><Link href={'#'} className={styles.about__list__item__title}>Facebook</Link><span className={styles.about__list__item__imgBlock}><img className={styles.about__list__item__img} src="/img/fb.svg" alt="facebook"/></span></li>
                    <li className={styles.about__list__item}><Link href={'#'} className={styles.about__list__item__title}>VK</Link><span className={styles.about__list__item__imgBlock}><img className={styles.about__list__item__img} src="/img/vk.svg" alt="vk"/></span></li>
                    <li className={styles.about__list__item}><Link href={'#'} className={styles.about__list__item__title}>YouTube</Link><span className={styles.about__list__item__imgBlock}><img className={styles.about__list__item__img} src="/img/yt.svg" alt="youtube"/></span></li>

                </ul> }
            </div>
        </section>
    );
};

export default About;