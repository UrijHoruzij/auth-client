import React from "react";
import { Route } from "react-router-dom";
import styled from "styled-components"

import { Surface } from "ui-nature";
import { LoginForm, RegisterForm } from "../../modules";
import bg from "./bg.jpg"

const SurfaceWrapper = styled(Surface)`
    padding: 28px 32px 28px 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 360px;
    height: auto;
    min-height: 400px;
`
const BackgroundWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100vh;
    background-image: url(${bg});
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Auth = props => {
    const {isAuth} = props;
    if(isAuth){
        props.history.push('/');
    }
    return (
        <BackgroundWrapper>
            <SurfaceWrapper>
                <Route exact path="/signin" component={LoginForm} />
                <Route exact path="/signup" component={RegisterForm} />
            </SurfaceWrapper>
        </BackgroundWrapper>
    )
}

export default Auth