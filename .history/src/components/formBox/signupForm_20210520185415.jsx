import React, { useContext } from 'react';
import { BoxContainer, FormContainer, Input, MutedLink, SubmitButton, BoldLink } from './common';
import { Marginer } from './marginer/index';
import { FormContext } from './formContext';
import { useFormik } from 'formik';

const SignupForm = (props) => {

    const {switchToSignIn} = useContext(FormContext);

    const formik = useFormik( initialValues: { fullName: "", email: "", password: "", confirmPassword: ""},
        validateonBlur: true
    );


    return (

        <BoxContainer>
            <FormContainer>
                <Input type='text' placeholder='Full Name' />
                <Input type='email' placeholder='Email' />
                <Input type='password' placeholder='Password' />
                <Input type='password' placeholder='Confirm Password' />
            </FormContainer>
            <Marginer direction='vertical' margin={10} />
                <SubmitButton type='submit'>Sign Up</SubmitButton>
                <Marginer direction='vertical' margin='1em' />
                <MutedLink href='#'>Already have an account? <BoldLink href='#' onClick={switchToSignIn}>SignIn</BoldLink></MutedLink>
        </BoxContainer>
    );
}


export default SignupForm;