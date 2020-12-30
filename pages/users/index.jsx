import { useRouter } from 'next/dist/client/router';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';

// Components
import UserList from '../../components/Users';
import User from '../../components/Users/User';

import * as action from '../../redux/actions';

// CSS
import styles from './users.module.scss';

const Users = (props) => {
    const router = useRouter();
    useEffect(() => {
        props.onGetUsers();
    }, []);

    const showUserDetail = (id) => {
        router.push('/users/' + id);
    }

    let userListed = null;
    if (props.users) {
        userListed = props.users.map(user => {
            return (
                <User showUserDetail={showUserDetail} id={user.id} key={user.id} user={user.data} />
            )
        });
    }

    return (
        <div className={styles.content}>
            <h1 className={styles.title}>users</h1>
            <UserList>
                {userListed}
            </UserList>
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
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);