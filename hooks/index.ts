"use client"
import React from "react"

const getWindowWidth = () => {
    const { innerWidth: windowWidth } = typeof window !== 'undefined'
        ? window
        : { innerWidth: 0 }

    return { windowWidth }
}

const useWindowWidth = () => {
    const [windowWidth, setWindowWidth] = React.useState(getWindowWidth());

    const handleResize = () => setWindowWidth(getWindowWidth());

    React.useEffect(() => {
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return { windowWidth, handleResize };
}

export const useMediaQuery = (maxWidth: number) => {
    const { windowWidth: { windowWidth }, handleResize } = useWindowWidth();
    const [isMedia, setIsMedia] = React.useState(false);

    React.useEffect(() => {
        if (windowWidth <= maxWidth) {
            setIsMedia(true);
        } else {
            setIsMedia(false);
        }
    }, [handleResize, maxWidth, windowWidth]);

    return isMedia;
}