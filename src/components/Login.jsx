import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { userLoginSelector } from '../store/login/selectors';
import { LoginForm }   from './LoginForm'

const Login = () => {
    const userData = useSelector(userLoginSelector);
    console.log(userData)
    if(userData && Object.keys(userData.data).length > 0) {
        return(
            <div className="card">
                <p id="log-success">
                    Loggen in as <b>{userData.data}</b>
                </p>
            </div>
        )
    }

    const isLoading = userData.data.loading;
    const isError = userData.data.error;

    return (
        <>
            <LoginForm isLoading={isLoading} />
            {isError && (
                <div className="card">
                    <p id="paragraph">
                        <b>Error: </b> {userData.error}
                    </p>
                </div>
            )}
        </>
    )
}

export default Login

