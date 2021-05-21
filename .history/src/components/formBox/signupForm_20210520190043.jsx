import React, { useContext } from 'react';
import { BoxContainer, FormContainer, Input, MutedLink, SubmitButton, BoldLink } from './common';
import { Marginer } from './marginer/index';
import { FormContext } from './formContext';
import { useFormik } from 'formik';

const SignupForm = () => {

    const {switchToSignIn} = useContext(FormContext);

    const onSubmit = (values) => {
        alert(JSON.stringify(value));
    };
    const formik = useFormik({ initialValues: { fullName: "", email: "", password: "", confirmPassword: ""},
        validateOnBlur: true,
        onSubmit,
    });


    return (

        <BoxContainer>
            <FormContainer onSubmit={formik.handleSubmit} >
                <Input name= placeholder='Full Name' />
                <Input type='email' placeholder='Email' />
                <Input type='password' placeholder='Password' />
                <Input type='password' placeholder='Confirm Password' />
                <Marginer direction='vertical' margin='1em' />
                <SubmitButton type='submit'>Sign Up</SubmitButton>
            </FormContainer>
            <Marginer direction='vertical' margin={10} />
                
                
                <MutedLink href='#'>Already have an account?
                <BoldLink href='#' onClick={switchToSignIn}>SignIn</BoldLink></MutedLink>
        </BoxContainer>
    );
}


export default SignupForm;