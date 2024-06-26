'use client'
import React from 'react';
import MainTitle from "@/components/api/MainTitle";
import PortfolioTabControl from "@/components/Portfolio/PortfolioTabControl";
import styles from '../../styles/portfolio/portfolio.module.scss'
import useTalons from "@/components/talons/useTalons";
import PortfolioTabContent from "@/components/Portfolio/PortfolioTabContent";
import {AnimatePresence} from "framer-motion";
import {useMediaQuery} from "@/hooks";
import PortfolioSlider from "@/components/Portfolio/PortfolioSlider";

const Portfolio = () => {

    const isMobile = useMediaQuery(1080);

    const {portfolioItems1} = useTalons()
    const {portfolioItems2} = useTalons()
    const {portfolioItems3} = useTalons()
    const {portfolioItems4} = useTalons()
    const {hiddenPortfolioItemsArray} = useTalons()

    const [portfolioTab1, setPortfolioTab1] = React.useState(true);
    const [portfolioTab2, setPortfolioTab2] = React.useState(false);
    const [portfolioTab3, setPortfolioTab3] = React.useState(false);
    const [portfolioTab4, setPortfolioTab4] = React.useState(false);
    const [hiddenPortfolioItems, setHiddenPortfolioItems] = React.useState(false);

    const toggleHiddenPortfolioItems = () => setHiddenPortfolioItems(!hiddenPortfolioItems)

    const handleShowPortfolioItems1 = () => {
        setPortfolioTab1(true)
        setPortfolioTab2(false)
        setPortfolioTab3(false)
        setPortfolioTab4(false)
    }
    const handleShowPortfolioItems2 = () => {
        setPortfolioTab1(false)
        setPortfolioTab2(true)
        setPortfolioTab3(false)
        setPortfolioTab4(false)
    }
    const handleShowPortfolioItems3 = () => {
        setPortfolioTab1(false)
        setPortfolioTab2(false)
        setPortfolioTab3(true)
        setPortfolioTab4(false)
    }
    const handleShowPortfolioItems4 = () => {
        setPortfolioTab1(false)
        setPortfolioTab2(false)
        setPortfolioTab3(false)
        setPortfolioTab4(true)
    }

    const portfolioTabControls = [
        { id: 1, title: 'Websites', isActive: portfolioTab1, handler: handleShowPortfolioItems1},
        { id: 2, title: 'UI/UX Design', isActive: portfolioTab2, handler: handleShowPortfolioItems2},
        { id: 3, title: 'Frontend', isActive: portfolioTab3, handler: handleShowPortfolioItems3},
        { id: 4, title: 'All projects', isActive: portfolioTab4, handler: handleShowPortfolioItems4},
    ];
    return (
        <section id={'portfolio'} className={styles.portfolio}>
            <div className="container">
                <MainTitle text={'Portfolio'}/>
            </div>
            <div className={`sub-container ${styles.sub_container}`}>
                <div className={styles.portfolio__inner}>
                    <ul className={styles.portfolio__tabs}>
                        {portfolioTabControls.map(item =>(
                            <PortfolioTabControl key={item.id} title={item.title} isActive={item.isActive} handleShowTab={item.handler}/>
                        ))}
                    </ul>
                </div>
                {!isMobile && <ul className={styles.portfolio__list}>
                    {portfolioTab1 && <PortfolioTabContent tabItems={portfolioItems1}/>}
                    {portfolioTab2 && <PortfolioTabContent tabItems={portfolioItems2}/>}
                    {portfolioTab3 && <PortfolioTabContent tabItems={portfolioItems3}/>}
                    {portfolioTab4 && <PortfolioTabContent tabItems={portfolioItems4}/>}
                    <AnimatePresence>
                        {hiddenPortfolioItems && <PortfolioTabContent tabItems={hiddenPortfolioItemsArray}/>}
                    </AnimatePresence>
                </ul>}
                {!isMobile && <button className={styles.portfolio__more} onClick={toggleHiddenPortfolioItems}>
                    <span
                        className={styles.portfolio__more__title}>{!hiddenPortfolioItems ? 'Show more' : 'Close more'}</span>
                    <span className={styles.portfolio__more__border}/>
                </button>}
            </div>
            {isMobile && <div className={styles.portfolio__list_mobile}>
                <div className={`${styles.portfolio__list__mobile__container}`}>
                    {portfolioTab1 && <PortfolioSlider tabItems={portfolioItems1}/>}
                    {portfolioTab2 && <PortfolioSlider tabItems={portfolioItems2}/>}
                    {portfolioTab3 && <PortfolioSlider tabItems={portfolioItems3}/>}
                    {portfolioTab4 && <PortfolioSlider tabItems={portfolioItems4}/>}
                </div>
            </div>}
        </section>
    );
};

export default Portfolio;