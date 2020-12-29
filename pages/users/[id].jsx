import { useRouter } from 'next/dist/client/router';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import * as action from '../../redux/actions';

const User = (props) => {
    const router = useRouter();
    const { id } = router.query;

    useEffect(() => {
        props.onGetUserDetail(id)
    }, []);

    return (
        <h1>user</h1>
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