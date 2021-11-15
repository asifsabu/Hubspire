import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const DisplayingErrorMessagesSchema = Yup.object().shape({
    username: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    email: Yup.string()
        .email('Invalid email')
        .required('this field is required'),
    password: Yup.string()
        .min(6, 'minimum 6 digit required')
        .required('please enter password'),
    passwordConfirmation: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('please enter password'),
});

function Formic() {
    return (
        <div>
            <p>formic validation works</p>
            <Formik
                initialValues={{
                    username: '',
                    email: '',
                    password: '',
                    passwordConfirmation: '',
                }}
                validationSchema={DisplayingErrorMessagesSchema}
                onSubmit={values => {
                    // same shape as initial values
                    console.log(values);
                }}
            >
                {({ errors, touched }) => (
                    <Form>
                        <label className="text-start">User Name</label>
                        <br />
                        <Field name="username" />
                        <br />
                        {touched.username && errors.username && <div className="text-danger">{errors.username}</div>}
                        <br />
                        <label className="text-start">Email</label>
                        <br />
                        <Field name="email" />
                        {touched.email && errors.email && <div className="text-danger">{errors.email}</div>}
                        <br />
                        <label className="text-start">Password</label>
                        <br />
                        <Field name="password" />
                        {touched.password && errors.password && <div className="text-danger">{errors.password}</div>}
                        <br />
                        <label className="text-start">Confirm Password</label>
                        <br />
                        <Field name="passwordConfirmation" />
                        {touched.passwordConfirmation && errors.passwordConfirmation && <div className="text-danger">{errors.passwordConfirmation}</div>}
                        <br />
                        <br />]
                        <button type="submit">Submit</button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default Formic;  