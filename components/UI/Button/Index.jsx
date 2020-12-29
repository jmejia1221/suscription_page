import React from 'react';

// CSS
import styles from './button.module.scss';

const Button = (props) => {
    return (
        <button className={styles.button} onClick={props.clicked}>
            {props.children}
        </button>
    );
};

export default Button;