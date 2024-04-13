
import React from 'react';
import styles from '../../styles/skills/skills.module.scss'
import MainTitle from "@/components/api/MainTitle";
import useTalons from '../talons/useTalons'

const Skills = () => {
    const {skillsList} = useTalons()

    return (
        <section id={'skills'} className={styles.skills}>
            <div className="container">
                <MainTitle text={'Skills'}/>
            </div>
            <div className={`sub-container ${styles.skills__sub_container}`}>
                {skillsList.map((item) => (
                    <div key={item.id} className={styles.skill_block}>
                        <div className={styles.skill_block__title}>
                            <img className={styles.skill_block__title__icon} src={item.img} alt={item.title}/>
                            <div className={styles.skill_block__title__text}>{item.title}</div>
                        </div>
                        <div className={styles.skill_block__line}></div>
                        <div className={styles.skill_block__description}>{item.items}</div>
                    </div>
                    ))}
            </div>
        </section>
    );
};

export default Skills;