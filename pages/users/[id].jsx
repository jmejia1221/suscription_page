import { useRouter } from 'next/dist/client/router';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Feature from '../../components/Features/Feature/Feature';
import Features from '../../components/Features/Features';

import * as action from '../../redux/actions';

// CSS
import styles from './userDetail.module.scss';

const User = (props) => {
    const router = useRouter();
    const { id } = router.query;

    useEffect(() => {
        if (id) {
            props.onGetUserDetail(id)
        }
    }, [router]);

    const FEATURES = [
        {
            id: 1,
            name: 'Certificates Instructor Generation',
            value: 'CERTIFICATES_INSTRUCTOR_GENERATION'
        },
        {
            id: 2,
            name: 'Courseware Search',
            value: 'ENABLE_COURSEWARE_SEARCH'
        },
        {
            id: 3,
            name: 'Course Discovery',
            value: 'ENABLE_COURSE_DISCOVERY'
        },
        {
            id: 4,
            name: 'Dashboard Search',
            value: 'ENABLE_DASHBOARD_SEARCH'
        },
        {
            id: 5,
            name: 'Edx Notes',
            value: 'ENABLE_EDXNOTES'
        },
        {
            id: 6,
            name: 'Intructor Background Tasks',
            value: 'INSTRUCTOR_BACKGROUND_TASKS'
        }
    ];

    let userInfo = null;
    let modulesInfo = null;
    if (props.userDetail) {
        userInfo = (
            <aside className={styles.aside}>
                <figure className={styles.figure}>
                    <span className={styles.image}>
                        <img src={props.userDetail.data.user_profile_image} />
                    </span>
                    <figcaption>
                        {props.userDetail.data.user_email}
                    </figcaption>
                </figure>
                <ul className={styles.infoList}>
                    <li>
                        <strong>Suscription: </strong>
                        <span>{props.userDetail.data.SUBSCRIPTION}</span>
                    </li>
                    <li>
                        <strong>Language: </strong>
                        <span>{props.userDetail.data.language_code}</span>
                    </li>
                    <li>
                        <strong>Theme: </strong>
                        <span>{props.userDetail.data.theme_name}</span>
                    </li>
                    <li>
                        <strong>Time Zone: </strong>
                        <span>{props.userDetail.data.displayed_timezone}</span>
                    </li>
                </ul>
            </aside>
        )
        modulesInfo = FEATURES.map(feature => (
            <Feature key={feature.id} feature={feature} />
        ))
    }

    return (
        <div className={styles.userDetail}>
            {userInfo}
            <section className={styles.sectionDetail}>
                <Features>
                    {modulesInfo}
                </Features>
            </section>
        </div>
    );
};

const mapStateToProps = state => ({
    userDetail: state.users.userDetail
});

const mapDispatchToProps = dispatch => {
    return {
        onGetUserDetail: (userId) => dispatch(action.getUserDetail(userId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(User);