'use client'
import React from 'react';
import {useMediaQuery} from "@/hooks";
import {Link} from "react-scroll";
import { gsap } from 'gsap';
import styles from '../../styles/hero/hero.module.scss'

const Hero = () => {
    const isMobile800 = useMediaQuery(800);
    const isMobile620 = useMediaQuery(620);
    const heroTitle = React.useRef() as React.MutableRefObject<HTMLHeadingElement>;

    React.useEffect(() => {
        const colors = gsap.to(heroTitle.current, {
            paused: true,
            duration: 20,
            repeat: -1,
            '--hue': 360,
        })

        const doRandom = () => {
            gsap.timeline()
                .to('h1', {
                    duration: 0.1,
                    opacity: function(){ return gsap.utils.random(.90, .95) },
                    delay: function(){ return gsap.utils.random(.1, 2) },
                }).to('h1', {
                duration: 0.1,
                opacity: 1,
                onComplete: function(){
                    doRandom()
                }
            })
        }

        const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

        if (! mediaQuery || ! mediaQuery.matches) {
            colors.play();
            doRandom();
        }
    })

    return (
        <section
            className={styles.hero}
            style={isMobile620 ? {backgroundImage: `none`} : isMobile800 ? {backgroundImage: `url("/img/hero-bg-mobile.png")`} : {backgroundImage: `url("/img/hero-bg.png")`} }
        >
            <div className="sub-container">
                <div className={styles.hero__inner}>
                    <h1 className={styles.hero__title} ref={heroTitle}>Web developer</h1>
                    <p className={styles.hero__description}>Are you working on something great? I will be happy to help you with this! Write me an email and we will start the project right now!</p>
                    <Link
                        to='contact'
                        className={styles.hero__btn}
                        spy={true}
                        smooth={true}
                        duration={500}
                        offset={30}
                    >
                        Contact with me
                    </Link>
                    {!isMobile800 && <Link
                        to='about'
                        className={styles.hero__arrow}
                        spy={true}
                        smooth={true}
                        duration={500}
                        offset={30}
                    />}
                </div>
            </div>
        </section>
    );
};

export default Hero;