import React, { useContext, useState } from 'react';
import { BoxContainer, BoxContainer FormContainer, Input, MutedLink, SubmitButton, BoldLink } from './common';
import { Marginer } from './marginer/index';
import { FormContext } from './formContext';
import { useFormik } from 'formik';

const SignupForm = (props) => {

    const {switchToSignIn} = useContext(FormContext);

    const onSubmit = (values) => {
        alert(JSON.stringify(values));
    };
    const formik = useFormik({ initialValues: { fullName: "", email: "", password: "", confirmPassword: ""},
        validateOnBlur: true,
        onSubmit,
    });


    return (

        <BoxContainer>
            <FormContainer onSubmit={formik.handleSubmit} >
                <Input name='fullNmae' placeholder='Full Name' value={formik.values.fullName} onChange={formik.handleChange} />
                <Input name='email' placeholder='Email' value={formik.values.email} onChange={formik.handleChange} />
                <Input name='password' placeholder='Password' value={formik.values.password} onChange={formik.handleChange} />
                <Input name='confirmPassword' placeholder='Confirm Password' value={formik.values.confirmPassword} onChange={formik.handleChange} />
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