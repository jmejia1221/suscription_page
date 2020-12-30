import React, { useEffect } from 'react';
import { useRouter } from 'next/dist/client/router';

// Components
import Plan from '../components/Plan/Plan';
import Plans from '../components/Plans/Plans';

// Redux
import * as action from '../redux/actions';
import { connect } from 'react-redux';

// CSS
import styles from './index.module.scss';

const Home = (props) => {
    useEffect(() => {
        props.onGetUsers();
    }, []);

    const router = useRouter();

    const plans = [
        {
            id: 1,
            userId: '6dcc8ff6-7080-46c5-88b4-bf144ad13d7b',
            plan: 'Free',
            price: '$0.000',
            features: [
                'EDX Notes'
            ]
        },
        {
            id: 2,
            plan: 'Basic',
            userId: '0db7504b-7be1-471f-abbb-e7b31c27ff06',
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
            userId: '16488627-b794-4d52-8daa-12d6caf473bd',
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

    if (props.users.length) {
        plans.forEach((plan, i) => {
            props.users.forEach(user => {
                if (plan.plan.toLowerCase() === user.data.SUBSCRIPTION.toLowerCase()) {
                    plans[i]['userId'] = user.id || plans[i]['userId'];
                }
            });
        });
    }

    const choosePlanHandler = (userId) => {
        router.push('/users/' + userId);
    }

    const plansListed = plans.map(plan => (
        <Plan planHandler={choosePlanHandler} key={plan.id} plan={plan} />
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

const mapStateToProps = state => ({
    users: state.users.users
});

const mapDispatchToProps = dispatch => {
    return {
        onGetUsers: () => dispatch(action.getUsers())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);