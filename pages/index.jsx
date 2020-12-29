import React from 'react';

// Components
import Plan from '../components/Plan/Plan';
import Plans from '../components/Plans/Plans';

// CSS
import styles from './index.module.scss';

const App = () => {
    const plans = [
        {
            id: 1,
            plan: 'Free',
            price: '$0.000',
            features: [
                'EDX Notes'
            ]
        },
        {
            id: 2,
            plan: 'Basic',
            main: true,
            price: '$40.000',
            features: [
                'Certificates Instructor Generation',
                'Courseware search',
                'EDX Notes',
                'Dashboard Search'
            ]
        },
        {
            id: 3,
            plan: 'Premium',
            price: '$80.000',
            features: [
                'Certificates Instructor Generation',
                'Courseware search',
                'EDX Notes',
                'Dashboard Search',
                'Instructor Background Tasks',
                'Course Discovery'
            ]
        }
    ];

    const plansListed = plans.map(plan => (
        <Plan key={plan.id} plan={plan} />
    ));

    return (
        <div className={styles.mainContent}>
            <hgroup className={styles.groupTitle}>
                <h1 className={styles.title}>
                    <span className={styles['title--hightlight']}>Flexible</span> Plans
                </h1>
                <h2 className={styles.subtitle}>Choose a plan that works best for you and your team.</h2>
            </hgroup>
            <Plans>
                {plansListed}
            </Plans>
        </div>
    );
};

export default App;