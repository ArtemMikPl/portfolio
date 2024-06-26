'use client'
import React from 'react';
import {motion} from "framer-motion";
import {Carousel} from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import PortfolioSliderItem from "@/components/Portfolio/PortfolioSliderItem";
import {useMediaQuery} from "@/hooks";

interface IPortfolioSlider {
    tabItems:{
        id: number,
        img: string,
        link: string,
        title: string
    }[]
}

const PortfolioSlider = ({tabItems}: IPortfolioSlider) => {

    const isMobile800 = useMediaQuery(800)
    const isMobile445 = useMediaQuery(445)

    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
        >
            <Carousel
                showArrows={false}
                showIndicators={false}
                showThumbs={false}
                showStatus={false}
                centerMode={true}
                centerSlidePercentage={isMobile445 ? 75 : isMobile800 ? 49.5 : 45}
            >
                {tabItems.map(item => (
                    <PortfolioSliderItem title={item.title} imgSrc={item.img} link={item.link} key={item.id}/>
                ))}
            </Carousel>
        </motion.div>
    );
};

export default PortfolioSlider;