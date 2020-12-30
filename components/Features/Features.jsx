import React from 'react';

// CSS
import styles from './Features.module.scss';

const Features = (props) => {
    return (
        <div className={styles.Features}>
            {props.children}
        </div>
    );
};

export default Features;