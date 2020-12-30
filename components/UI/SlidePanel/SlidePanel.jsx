import React, { useState } from 'react';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// CSS
import styles from './SlidePanel.module.scss';

const SlidePanel = (props) => {
    const contentClasses = [styles.content];

    if (props.showPanel) {
        contentClasses.push(styles['showPanel']);
    }
    
    return (
        <div className={contentClasses.join(' ')}>
            <div onClick={props.handlerPanel}>
                <FontAwesomeIcon
                    className={styles.closeIcon}
                    icon={faTimes} />
            </div>
            {props.children}
        </div>
    );
};

export default SlidePanel;