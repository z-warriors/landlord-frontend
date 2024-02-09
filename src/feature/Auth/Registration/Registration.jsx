import {useState, useEffect} from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { useSelector, useDispatch } from "react-redux";
import {Alert} from "@mui/material";

import { StyledContainer, StyledFormContainer } from "./Registration.style";
import RegForm from "./RegForm/RegForm";
import {registerLandlord} from "../actions/auth.actions.js";

const Registration = () => {
  const dispatch = useDispatch();
  const authState = useSelector((state) => state?.authentication);

  const [error, setError] = useState('')




  useEffect(() => {
    if(authState.error){
      setError(authState.error)
    }

  }, [authState])

  const defaultValues = {
    firstname: "Rob",
    lastname:"doe",
    email: "",
    password: "",
  };
  const yupObject = Yup.object({
    firstname: Yup.string().required(),
    lastname: Yup.string().required(),
    email: Yup.string().email().required(),
    password: Yup.string().required(),
  });

  const handleSubmit = (values) => {
    const { email, password, firstname, lastname } = values;
    const registrationData = {
      email,
      password,
      firstname,
      lastname
    };

    dispatch(registerLandlord(registrationData));
  };


  console.log(error,'the state error ===============>');


  return (
    <StyledContainer maxWidth="1200px">
      {error.length > 0 && (<Alert severity="error">This is an error Alert.</Alert>)}
      <StyledFormContainer>
        <Formik
          initialValues={defaultValues}
          validationSchema={yupObject}
          onSubmit={handleSubmit}
        >
          {(formik) => <RegForm formik={formik}  />}
        </Formik>
      </StyledFormContainer>
    </StyledContainer>
  );
};

export default Registration;
