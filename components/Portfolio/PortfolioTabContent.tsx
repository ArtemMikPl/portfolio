
import React from 'react';
import {motion} from "framer-motion";
import styles from '../../styles/portfolio/portfolio.module.scss'
import PortfolioTabItem from "@/components/Portfolio/PortfolioTabItem";

interface IPortfolioTabContent {
    tabItems:{
        id: number,
        img: string,
        link: string,
        title: string
    }[]
}

const PortfolioTabContent = ({tabItems}: IPortfolioTabContent) => {
    return (
        <>
            {tabItems.map(item => (
                <motion.li
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}
                key={item.id}
                className={styles.portfolio__list__item}
                >
                    <PortfolioTabItem title={item.title} imgSrc={item.img} link={item.link}/>
                </motion.li>
            ))}
        </>
    );
};

export default PortfolioTabContent;