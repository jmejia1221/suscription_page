import React from 'react';

// CSS
import styles from './User.module.scss';

const User = (props) => {
    return (
        <div onClick={() => props.showUserDetail(props.id)} className={styles.user}>
            <figure className={styles.figure}>
                <img src={props.user.user_profile_image} />
            </figure>
            <section className={styles.section}>
                <h6>{props.user.user_email}</h6>
                <ul className={styles.infoList}>
                    <li>
                        <strong>Suscription: </strong>
                        <span>{props.user.SUBSCRIPTION}</span>
                    </li>
                    <li>
                        <strong>Language: </strong>
                        <span>{props.user.language_code}</span>
                    </li>
                    <li>
                        <strong>Theme: </strong>
                        <span>{props.user.theme_name}</span>
                    </li>
                    <li>
                        <strong>Time Zone: </strong>
                        <span>{props.user.displayed_timezone}</span>
                    </li>
                </ul>
            </section>
        </div>
    );
};

export default User;