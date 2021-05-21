import React, { useState } from 'react';
import styled from 'styled-components';
import LoginForm from './loginForm';
import { motion } from 'framer-motion';
import { FormContext } from './formContext';

const BoxContainer = styled.div`
    width: 280px;
    min-height: 550px;
    display: flex;
    flex-direction: column;
    border-radius: 19px;
    background-color: #fff;
    box-shadow: 0 0 2.7px rgba(15, 15, 15, 0.28);
    position: relative;
    overflow: hidden;

`;

const TopContainer = styled.div`
    width: 100%;
    height: 255px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 0 1.8em;
    padding-bottom: 5em;
`;
const BackDrop = styled(motion.div)`
    position: absolute;
    width: 160%;
    height: 550px;
    display: flex;
    flex-direction: column;
    border-radius: 50%;
    transform: rotate(60deg);
    top: -290px;
    left: -70px;
    background: rgb(204,128,161);
    background: radial-gradient(circle, rgba(204,128,161,1) 0%, rgba(148,187,233,1) 80%);
`;

const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;

`;

const HeaderText = styled.h2`
    font-size: 40px;
    font-weight: 600;
    line-height: 1.24;
    color: #fff;
    z-index: 10;
    margin: 0;

`;

const SmallText = styled.h5`
    color: #fff;
    font-weight: 500;
    font-size: 11px;
    z-index: 10;
    margin: 0;
    margin-top: 7px;
`;


const InnerContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 0 1.8em;
`;

const backdropVariants = {
    expanded: {
        width: '223%',
        height: '1050px',
        borderradius: '20%',
        transform: 'rotate(60deg)'
    },
    collapsed: {
        width: '160%',
        height: '550px',
        borderradius: '50%',
        transform: 'rotate(60deg)'

    }
}

const expandingTransition = {
    type: 'spring',
    duration: 2.3,
    stiffness: 30,
};

const FormBox = (props) => {

    const [isExpanded, setExpanded] = useState(false);
    const [active, setActive] = useState('signin');

    const playExpandingAnimation = () => {
        setExpanded(true);
        setTimeout(() => {
            setExpanded(false);
        }, expandingTransition.duration * 1000 - 1500);
    };

    const switchToSignUp = () => {
        playExpandingAnimation();
        setTimeout(() => {
            setActive('signup');
        }, 400);
    };

    const switchToSignIn = () => {
        playExpandingAnimation();
        setTimeout(() => {
            setActive('signin');
        }, 400);
    };

    const contextValue = { switchToSignUp, switchToSignIn };


    return (
    <FormContext.Provider value={contextValue}>
    <BoxContainer>
        <TopContainer>
            <BackDrop 
            initial={false} 
            animate={ isExpanded ? 'expanded' : 'collapsed' } 
            variants={backdropVariants}
            transition={expandingTransition} 
            />
            <HeaderContainer>
                <HeaderText>Welcome</HeaderText>
                <HeaderText>Back</HeaderText>
                <SmallText>Please sign-in to continue!</SmallText>
            </HeaderContainer>
        </TopContainer>
        <InnerContainer>
            {active === ''}
            <p onClick={playExpandingAnimation}>Cilck me</p>
        </InnerContainer>
    </BoxContainer>
    </FormContext.Provider>
    );
}

export default FormBox;
