import React from 'react';

// CSS
import styles from './Plans.module.scss';

const Plans = (props) => {
    return (
        <div>
            {props.children}
        </div>
    );
};

export default Plans;