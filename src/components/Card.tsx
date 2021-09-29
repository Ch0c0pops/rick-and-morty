import React from 'react';
import styles from '../styles/card.module.scss'
import {UserProps} from "../types/userTypes";

const Card = (user: any) => {

    return (
        <div className={styles.card}>
            <img className={styles.card__image} src={user.user.image}/>
            <div className={styles.card__info}>
                <div><strong>Name:</strong> {user.user.name}</div>
                <div><strong>Gender:</strong> {user.user.gender}</div>
                <div><strong>Status:</strong> {user.user.status}</div>
            </div>
        </div>
    );
};

export default Card;