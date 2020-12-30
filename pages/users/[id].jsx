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

// Redux
import * as action from '../../redux/actions';

// CSS
import styles from './userDetail.module.scss';
import Button from '../../components/UI/Button/Index';
import Settings from '../../components/Settings';
import SettingList from '../../components/Settings/settingList';
import Spinner from '../../components/UI/Spinner';

const User = (props) => {
    const [togglePanel, setTogglePanel] = useState(false);
    const [selectedTheme, setSelectedTheme] = useState('default_theme');
    const [selectedLanguage, setselectedLanguage] = useState('en');
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
            name: 'Default',
            value: 'default_theme'
        },
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

    const changeThemeHandler = (value) => {
        document.body.classList.remove(selectedTheme);
        document.body.classList.add(value);
        setSelectedTheme(value);
    }

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

    const changeLanguageHandler = (value) => {
        setselectedLanguage(value);
    }

    let safe_tags_replace = (str) => {
        return str.replace(/<\/?[^>]+(>|$)/g, "");
    }
    let userInfo = null;
    let modulesInfo = <Spinner />;
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
                        <span>{selectedLanguage}</span>
                    </li>
                    <li>
                        <strong>Theme: </strong>
                        <span>{selectedTheme}</span>
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
                        <Settings>
                            <SettingList
                                changeItemHandler={changeThemeHandler}
                                selectedItem={selectedTheme}
                                list={themes} />
                        </Settings>
                    </div>
                    <div className={styles.sharedContent}>
                        <strong className={styles.themeTitle}>Language</strong>
                        <Settings>
                            <SettingList
                                changeItemHandler={changeLanguageHandler}
                                selectedItem={selectedLanguage}
                                list={languages} />
                        </Settings>
                    </div>
                </section>
            </SlidePanel>
            {userInfo}
            <section className={styles.sectionDetail}>
                <header>
                    <h4 className={styles.banner}>
                        {props.userDetail && safe_tags_replace(props.userDetail.data.banner_message)}
                    </h4>
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