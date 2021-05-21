import React, { useContext } from 'react';
import { BoxContainer, FormContainer, Input, MutedLink, SubmitButton, BoldLink } from './common';
import { Marginer } from './marginer/index';
import { FormContext } from './formContext';


const SignupForm = (props) => {

    const {switchToSignIn} = useContext(FormContext);
    return (

        <BoxContainer>
            <FormContainer>
                <Input type='text' placeholder='Full Name' />
                <Input type='email' placeholder='Email' />
                <Input type='password' placeholder='Password' />
                <Input type='password' placeholder='Confirm Password' />
            </FormContainer>
            <Marginer direction='vertical' margin={10} />
                <MutedLink href='#'>Forget your Password?</MutedLink>
                <Marginer direction='vertical' margin='1.6em' />
                <SubmitButton type='submit'>Sign In</SubmitButton>
                <Marginer direction='vertical' margin='1em' />
                <MutedLink href='#'>Don't have an account? <BoldLink href='#' onClick={switchToSignIn}>Sign Up</BoldLink></MutedLink>
        </BoxContainer>
    );
}


export default SignupForm;