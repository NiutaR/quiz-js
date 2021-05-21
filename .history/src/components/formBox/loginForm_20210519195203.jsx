import React, { useContext } from 'react';
import { BoxContainer, FormContainer, Input, MutedLink, SubmitButton, BoldLink } from './common';
import { Marginer } from './marginer/index';
import 


const LoginForm = (props) => {

    const { switchToSignUp } = useContext(FormContext);
    return (

        <BoxContainer>
            <FormContainer>
                <Input type='email' placeholder='Email' />
                <Input type='password' placeholder='Password' />
            </FormContainer>
            <Marginer direction='vertical' margin={10} />
                <MutedLink href='#'>Forget your Password?</MutedLink>
                <Marginer direction='vertical' margin='1.5em' />
                <SubmitButton type='submit'>Sign In</SubmitButton>
                <Marginer direction='vertical' margin='1em' />
                <MutedLink href='#'>Don't have an account? <BoldLink href='#' onClick={switchToSignUp}>Sign Up</BoldLink></MutedLink>
        </BoxContainer>
    );
}


export default LoginForm;

