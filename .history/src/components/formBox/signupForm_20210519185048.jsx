import React from 'react';
import { BoxContainer, FormContainer, Input, MutedLink, SubmitButton, BoldLink } from './common';
import { Marginer } from './marginer/index';


const SignupForm = (props) => {
    return (

        <BoxContainer>
            <FormContainer>
                <Input type='text' placeholder='Full Name' />
                <Input type='email' placeholder='Email' />
                <Input type='password' placeholder='Password' />
                <Input type='password' placeholder='Confirm Password'
            </FormContainer>
            <Marginer direction='vertical' margin={10} />
                <MutedLink href='#'>Forget your Password?</MutedLink>
                <Marginer direction='vertical' margin='1.5em' />
                <SubmitButton type='submit'>Sign In</SubmitButton>
                <Marginer direction='vertical' margin='1em' />
                <MutedLink href='#'>Don't have an account? <BoldLink href='#'>Sign Up</BoldLink></MutedLink>
        </BoxContainer>
    );
}


export default SignupForm;