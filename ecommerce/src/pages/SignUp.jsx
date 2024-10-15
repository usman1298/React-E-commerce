import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Fragment } from 'react';
import * as yup from 'yup';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../backend/FireBase';
import {  useNavigate } from 'react-router-dom';


const Signup = () => {
  const navigate =useNavigate()
  const defaultValue = {
    name: '',
    email: '',
    password: '', // Corrected the type in the field name
    termsAndCond: false,
    TransportMode: '', // Not used in the form
  };

  const validationSchema = yup.object().shape({
    name: yup.string().required('Please Enter your name'),
    email: yup.string().required('Please Enter your email').email('Please enter a valid email'),
    password: yup.string().required('Please Enter your password'),
    termsAndCond: yup.boolean().oneOf([true], 'Please accept terms and conditions'),
  });

  const handleSubmit = async (values) => {
    const {email,password}=values;
    const userSignup = await createUserWithEmailAndPassword(auth,email,password);
    const user = userSignup;
    console.log("user log",user);
    alert (user,'user Register Successfully');
    navigate('/login')
  };

  return (
    <Fragment>
      <div className="container">
        <div className="col-md-12 text-center mt-5 ">
          <h1>Sign Up</h1>
          <Formik initialValues={defaultValue} validationSchema={validationSchema} onSubmit={handleSubmit}>
            <Form>
              <div className="col-md-12 mt-4">
                <Field type="text" name="name" placeholder="Enter your Name" className="form-control" />
                <p className="text-danger">
                  <ErrorMessage name="name" />
                </p>
              </div>
              <div className="col-md-12 mt-4">
                <Field type="text" name="email" placeholder="Enter your Email" className="form-control" />
                <p className="text-danger">
                  <ErrorMessage name="email" />
                </p>
              </div>
              <div className="col-md-12 mt-4">
                <Field type="password" name="password" placeholder="Enter your password" className="form-control" />
                <p className="text-danger">
                  <ErrorMessage name="password" />
                </p>
              </div>
              <div className="col-md-12 mt-4">
                <label className="form-inline">
                  <Field type="checkbox" name="termsAndCond" />
                  I accept terms and conditions
                </label>
                <p className="text-danger">
                  <ErrorMessage name="termsAndCond" />
                </p>
              </div>
              <button className="btn btn-primary" type="submit" >
                Submit
              </button>
            </Form>
          </Formik>
        </div>
      </div>
    </Fragment>
  );
};

export default Signup;
