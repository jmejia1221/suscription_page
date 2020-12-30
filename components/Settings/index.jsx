import React from 'react';

// CSS
import styles from './Settings.module.scss';

const Setting = (props) => {
    return (
        <ul className={styles.list}>
            {props.children}
        </ul>
    )
} 

export default Setting