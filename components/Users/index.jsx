import React from 'react';

// CSS
import styles from './Users.module.scss';

const UserList = (props) => {
    return (
        <div className={styles.users}>
            {props.children}
        </div>
    );
};

export default UserList;