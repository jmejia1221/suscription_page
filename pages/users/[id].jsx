import React, { useEffect, useState } from 'react';
import Link from 'next/link';

// Libs
import { faChevronLeft, faCog } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/dist/client/router';
import { connect } from 'react-redux';

// Components
import Feature from '../../components/Features/Feature/Feature';
import Features from '../../components/Features/Features';
import SlidePanel from '../../components/UI/SlidePanel/SlidePanel';

import * as action from '../../redux/actions';

// CSS
import styles from './userDetail.module.scss';
import Button from '../../components/UI/Button/Index';

const User = (props) => {
    const [togglePanel, setTogglePanel] = useState(false);
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

    const themes = [
        {
            name: 'Simply Fabulous',
            value: 'simply_fabulous'
        },
        {
            name: 'Tropical Island',
            value: 'tropical_island'
        },
        {
            name: 'Safari',
            value: 'safari'
        },
        {
            name: 'Tranquility',
            value: 'tranquility'
        },
        {
            name: 'Mustache Bash',
            value: 'mustache_bash'
        },
        {
            name: 'Candy Crush',
            value: 'candy_crush'
        },
        {
            name: 'Garden Party',
            value: 'garden_party'
        }
    ];

    let themeListed = themes.map((theme, i) => {
        return (
            <li key={i}>{theme.name}</li>
        )
    });

    const languages = [
        {
            name: 'Chiniese',
            value: 'zh'
        },
        {
            name: 'Italian',
            value: 'it'
        },
        {
            name: 'English',
            value: 'en'
        },
        {
            name: 'Spanish',
            value: 'es'
        },
        {
            name: 'French',
            value: 'fr'
        },
        {
            name: 'German',
            value: 'de'
        }
    ];

    let languageListed = languages.map((language, i) => {
        return (
            <li key={i}>{language.name}</li>
        );
    });

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
        modulesInfo = FEATURES.map(feature => {
            return (
                <Feature
                    disabled={!props.userDetail.data.ENABLED_FEATURES[feature.value]}
                    key={feature.id}
                    feature={feature} />
            )
        });
    }

    const handlerPanel = () => {
        setTogglePanel(!togglePanel);
    }

    return (
        <div className={styles.userDetail}>
            <SlidePanel handlerPanel={handlerPanel} showPanel={togglePanel}>
                <div className={styles.panel}>
                    <h2 className={styles.panelTitle}>Settings</h2>
                </div>
                <section className={styles.settingsContent}>
                    <div className={styles.sharedContent}>
                        <strong className={styles.themeTitle}>Theme</strong>
                        <ul className={styles.themeListed}>
                            {themeListed}
                        </ul>
                    </div>
                    <div className={styles.sharedContent}>
                        <strong className={styles.themeTitle}>Language</strong>
                        <ul className={styles.themeListed}>
                            {languageListed}
                        </ul>
                    </div>
                    <div className={styles.sharedContent}>
                        <strong className={styles.themeTitle}>Time Zone</strong>
                        <ul className={styles.themeListed}>
                            {themeListed}
                        </ul>
                    </div>
                </section>
            </SlidePanel>
            {userInfo}
            <section className={styles.sectionDetail}>
                <header>
                    <span className={styles.linkToUsers}>
                        <Link href="/users">
                            <a>
                                <FontAwesomeIcon className={styles.icon} icon={faChevronLeft} />
                                Users
                            </a>
                        </Link>
                    </span>
                    <div onClick={handlerPanel} className={styles.settingsIcon}>
                        <FontAwesomeIcon icon={faCog} />
                    </div>
                </header>
                <Features>
                    {modulesInfo}
                </Features>
            </section>

            {
                props.userDetail && props.userDetail.data.SUBSCRIPTION !== 'premium' &&
                <Button clicked={() => router.push('/')}>
                    Upgrade my plan
                </Button>
            }
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
};

export default connect(mapStateToProps, mapDispatchToProps)(User);