import React from 'react';
import { BoxContainer, FormContainer, Input } from './common';
import { Marginer } from './marginer/index';


const LoginForm = (props) => {
    return (

        <BoxContainer>
            <FormContainer>
                <Input type='email' placeholder='Email' />
                <Input type='password' placeholder='Password' />
                <Marginer direction='vertical' margin=
            </FormContainer>
        </BoxContainer>
    );
}


export default LoginForm;

