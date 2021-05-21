import React from 'react';
import { BoxContainer, FormContainer, Input, MutedLink, SubmitButton } from './common';
import { Marginer } from './marginer/index';


const LoginForm = (props) => {
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
                <MutedLink href='#'></MutedLink>
        </BoxContainer>
    );
}


export default LoginForm;

