import React from 'react';
import styles from '../../styles/api/mainTitle.module.scss'

const MainTitle = ({text}: {text: string}) =>
    <h2 className={styles.title}>{text.toUpperCase()}
        <span className={styles.title__border}></span>
    </h2>

export default MainTitle;