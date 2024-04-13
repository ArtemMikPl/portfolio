
import React from 'react';
import styles from '../../styles/portfolio/portfolio.module.scss'
import ArrowSvg from "@/components/api/ArrowSvg";
import {useMediaQuery} from "@/hooks";

interface IPortfolioTabControl{
    title: string,
    isActive: boolean,
    handleShowTab: () => void;
}

const PortfolioTabControl = ({title, isActive, handleShowTab}: IPortfolioTabControl) => {

    const isMobile = useMediaQuery(600)

    return (
        <li className={styles.portfolio__tabs__item}>
            <button className={styles.portfolio__tabs__item__btn} onClick={handleShowTab}>
                <span className={styles.portfolio__tabs__item__btn__title} style={{color: isActive ? '#F2F2F2' : '#B7BFD1'}}>{title}</span>
                {isActive && !isMobile && <span className={styles.portfolio__tabs__item__btn__arrow}><ArrowSvg/></span>}
                <span className={`${styles.portfolio__tabs__item__btn__border} ${isActive && styles.portfolio__tabs__item__btn__border_active}`}/>
            </button>
        </li>
    );
};

export default PortfolioTabControl;