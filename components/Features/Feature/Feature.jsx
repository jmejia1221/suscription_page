import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

// Components
import Button from '../../UI/Button/Index';

// CSS
import styles from './Feature.module.scss';

const Feature = (props) => {
    return (
        <div className={styles.Feature}>
            <header className={styles.header}>
                <h4>{props.feature.name}</h4>
            </header>
            <Button
                isDisabled={props.disabled}>
                See More
                <FontAwesomeIcon
                    className={styles.arrowIcon}
                    icon={faLongArrowAltRight} />
            </Button>
        </div>
    );
};

export default Feature;