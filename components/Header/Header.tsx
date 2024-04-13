"use client";
import React from 'react';
import {useMediaQuery} from "@/hooks";
import Logo from "../Logo/Logo";
import { Link } from 'react-scroll';
import styles from '../../styles/header/header.module.scss';
import stylesMenu from '../../styles/header/mobileMenu.module.scss';


const Header = () => {
    const isMobile = useMediaQuery(640);
    const [menuOpen, setMenuOpen] = React.useState(false);
    const offset = 140;
    const duration = 500;
    const currentMenuItemClass = isMobile ? stylesMenu.menu__item : styles.header__nav__list__item;

    const handleToggleMenu = () => {
        (document.querySelector('body') as HTMLBodyElement).classList.toggle('overflow-hidden')
        setMenuOpen(!menuOpen);
    }

    const closeMenu = () => {
        (document.querySelector('body') as HTMLBodyElement).classList.remove('overflow-hidden')
        setMenuOpen(false)
    }

    return (
        <header className={styles.header}>
            <div className={`container ${styles.header__container}`}>
                <Logo/>
                {isMobile && <button onClick={handleToggleMenu} className={`${styles.burger_menu} ${menuOpen ? styles.open : ""}`}>
                    <span/>
                    <span/>
                    <span/>
                </button>}
                <nav className={`${isMobile ? stylesMenu.menu : styles.header__nav} ${menuOpen ? stylesMenu.open : ''}`}>
                    <ul className={`${isMobile ? styles.list_reset : styles.header__nav__list}`}>
                        <li className={currentMenuItemClass}>
                            <Link
                                href='/'
                                to='about'
                                spy={true}
                                smooth={true}
                                offset={offset}
                                duration={duration}
                                className={styles.header__nav__list__item__link}
                                onClick={closeMenu}
                            >
                                About me
                            </Link>
                        </li>
                        <li className={currentMenuItemClass}>
                            <Link
                                href='/'
                                to='skills'
                                spy={true}
                                smooth={true}
                                offset={offset}
                                duration={duration}
                                className={styles.header__nav__list__item__link}
                                onClick={closeMenu}
                            >
                                Skills
                            </Link>
                        </li>
                        <li className={currentMenuItemClass}>
                            <Link
                                href='/'
                                to='portfolio'
                                spy={true}
                                smooth={true}
                                offset={offset}
                                duration={duration}
                                className={styles.header__nav__list__item__link}
                                onClick={closeMenu}
                            >
                                Portfolio
                            </Link>
                        </li>
                        <li className={currentMenuItemClass}>
                            <Link
                                href='/'
                                to='contact'
                                spy={true}
                                smooth={true}
                                offset={offset}
                                duration={duration}
                                className={styles.header__nav__list__item__link}
                                onClick={closeMenu}
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;