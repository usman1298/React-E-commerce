import { Formik, Form, Field, ErrorMessage } from "formik";
import { Fragment } from "react";
import * as yup from "yup";
import { useContext } from "react";
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from "../backend/FireBase";
import { useNavigate, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { IoLogInSharp } from "react-icons/io5";
import { HiOutlineMailOpen } from "react-icons/hi";
import { FaUnlockAlt } from "react-icons/fa";


function Login() {
  const DefaultValue = {
    email: "",
    pass: "",
  };
  const ValidatingValue = yup.object().shape({
    email: yup.string().required("Please fill the E-mail field").email("Please enter a valid email"),
    pass: yup.string().required("Please fill the password field"),
  });

  const navigate = useNavigate();
  const location = useLocation();
  let loc = location.state?.redirectedFrom.pathname;

  console.log(location);
  console.log(loc);
  // const { IsLoggedIn, setIsLoggedIn } = useContext(LoginContext);

  const handleSubmit = async (values) => {
    try {
      const { email, pass } = values;
      const userCredential = await signInWithEmailAndPassword(auth, email, pass);
      const user = userCredential.user;
      console.log("User logged in:", user);
      // setIsLoggedIn(true);

      if (loc === "/cart") {
        navigate(loc);
      } else {
        navigate(-1);
      }
    } catch (error) {
      console.log("Login error:", error);
    }
  };

  return (
    <Fragment>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded shadow-md w-80">
          <h1 className="text-2xl font-semibold text-center mb-4 my-5 log-t"> USER LOGIN</h1>
         

          <Formik initialValues={DefaultValue} validationSchema={ValidatingValue} onSubmit={handleSubmit}>
            <Form className="grid gap-4">
              <div className="text-center">
                <label htmlFor="email" className="my-3 block text-gray-600 text-sm font-semibold email"><HiOutlineMailOpen />*</label>
                <Field type="text" name="email" placeholder="E-mail id" className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500" />
                <p><ErrorMessage name="email" className="text-red-500 text-xs italic" /></p>
              </div>
              <div className="text-center">
                <label htmlFor="password" className="block text-gray-600 text-sm font-semibold pass"><FaUnlockAlt />*</label>
                <Field type="password" name="pass" placeholder="Enter your Password" className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500" />
                <p><ErrorMessage name="pass" className="text-red-500 text-xs italic" /></p>
              </div>
              <div className="log-btn">
              <button type="submit" className="btn btn-success" ><IoLogInSharp />Login</button>
              </div>
              <p className="mt-4 text-center">
                Don't have an account? <Link to="/Home" className="text-blue-500">Create an account</Link>
              </p>
            </Form>
          </Formik>
        </div>
      </div>
    </Fragment>
  );
}

export default Login;
