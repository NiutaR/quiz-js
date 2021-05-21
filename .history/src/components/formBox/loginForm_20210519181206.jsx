import React from 'react';
import { BoxContainer, FormContainer, Input, MutedLink, SubmitButton } from './common';
import { Marginer } from './marginer/index';


const LoginForm = (props) => {
    return (

        <BoxContainer>
            <FormContainer>
                <Input type='email' placeholder='Email' />
                <Input type='password' placeholder='Password' />
                <Marginer direction='vertical' margin={5} />
                <MutedLink href='#'>Forget your Password?</MutedLink>
                <Marginer direction='vertical' margin='1em' />
                <SubmitButton type='submit'>Sign </SubmitButton>
            </FormContainer>
        </BoxContainer>
    );
}


export default LoginForm;

