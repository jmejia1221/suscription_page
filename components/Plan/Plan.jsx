import React from 'react';

// Libs
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';

// CSS
import styles from './Plan.module.scss';
import Button from '../UI/Button/Index';

const Plan = (props) => {
    const features = props.plan.features.map(feature => (
        <li key={feature}>
            <FontAwesomeIcon className={styles.checkIcon} icon={faCheck} />
            <span>{feature}</span>
        </li>
    ));

    let mainPlan = [styles.plan];

    if (props.plan.main) {
        mainPlan.push(styles.main);
    }

    return (
        <div className={mainPlan.join(' ')}>
            <header className={styles.header}>
                <h4 className={styles.title}>{props.plan.plan}</h4>
                <span className={styles.price}>
                    <span>{props.plan.price}</span>
                    <span className={styles['price--text']}> / user</span>
                </span>
            </header>
            <section className={styles.content}>
                <ul className={styles.features}>
                    {features}
                </ul>
            </section>
            <footer className={styles.footer}>
                <Button clicked={() => props.planHandler(props.plan.userId)}>
                    Choose Plan
                    <FontAwesomeIcon className={styles.arrowIcon} icon={faLongArrowAltRight} />
                </Button>
            </footer>
        </div>
    );
};

export default Plan;