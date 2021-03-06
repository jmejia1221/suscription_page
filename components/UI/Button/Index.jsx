import React from 'react';

// CSS
import styles from './Button.module.scss';

const Button = (props) => {
    return (
        <button
            disabled={props.isDisabled}
            className={styles.button}
            onClick={props.clicked}>
            {props.children}
        </button>
    );
};

export default Button;