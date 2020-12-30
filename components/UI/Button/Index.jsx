import React from 'react';

// CSS
import styles from './button.module.scss';

const Button = (props) => {
    console.log(props)
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