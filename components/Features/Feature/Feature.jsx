import { faLongArrowAltRight, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

// Components
import Button from '../../UI/Button/Index';

// CSS
import styles from './Feature.module.scss';

const Feature = (props) => {
    return (
        <div className={styles.Feature}>
            <header>
                <h4>{props.feature.name}</h4>
                <FontAwesomeIcon icon={faStar} />
            </header>
            <Button>
                Go
                <FontAwesomeIcon icon={faLongArrowAltRight} />
            </Button>
        </div>
    );
};

export default Feature;