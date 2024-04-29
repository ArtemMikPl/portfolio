import React from 'react';
import styles from '../../styles/contact/contact.module.scss'

interface IContactInput{
    type: string,
    text: string,
    placeholder: string,
    name: string,

}

const ContactInput = ({type, text, placeholder, name}: IContactInput) => {
    return (
        <label className={styles.contact__form__label}>
            <span className={styles.contact__form__label__text}>{text}</span>
            <input
                required={true}
                className={styles.contact__form__label__input}
                type={type}
                placeholder={placeholder}
                name={name}
                minLength={name === 'fullName' ? 3 : undefined}
                pattern={name === 'email' ? "[a-z0-9._%+\\-]+@[a-z0-9.\\-]+\\.[a-z]{2,}$" : undefined}
            />
        </label>
    );
};

export default ContactInput;