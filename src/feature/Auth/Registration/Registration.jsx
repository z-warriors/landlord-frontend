import { StyledContainer, StyledFormContainer } from "./Registration.style";
import RegForm from "./RegForm/RegForm";

import { Formik } from "formik";
import * as Yup from "yup";

const Registration = () => {
  const defaultValues = {
    name: "",
    email: "",
    password: "",
  };
  const yupObject = Yup.object({
    name: Yup.string().required(),
    email: Yup.string().email().required(),
    password: Yup.string().required(),
  });
  return (
    <StyledContainer maxWidth="1200px">
      <StyledFormContainer>
        <Formik
          enableReinitialize
          initialValues={defaultValues}
          validationSchema={yupObject}
        >
          {(formik) => <RegForm formik={formik} />}
        </Formik>
      </StyledFormContainer>
    </StyledContainer>
  );
};

export default Registration;
