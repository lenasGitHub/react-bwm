import React from "react";
import { Field, reduxForm } from "redux-form";

import { BwpInput } from "../shared/form/BwpInput";
import { BwmResError } from "../shared/form/BwmResError";

import { required, minLength4 } from "../shared/form/validators";
const LoginForm = props => {
  const { handleSubmit, pristine, submitting, submitCb, valid, errors } = props;
  return (
    <form onSubmit={handleSubmit(submitCb)}>
      <Field
        name="email"
        label="email"
        type="email"
        className="form-control"
        component={BwpInput}
        validate={[required, minLength4]}
      />

      <Field
        name="password"
        label="password"
        type="password"
        className="form-control"
        validate={[required]}
        component={BwpInput}
      />

      <button
        className="btn btn-success"
        type="submit"
        disabled={!valid || pristine || submitting}
      >
        Submit
      </button>
      <BwmResError errors={errors} />
    </form>
  );
};

const validate = values => {
  const errors = {};
  if (values.userName && values.userName.length < 4) {
    errors.userName = "Username min length is 4 characters!";
  }

  if (!values.email) {
    errors.email = "Please enter email!";
  }

  if (!values.passwordConfirmation) {
    errors.passwordConfirmation = "Please enter password confirmation!";
  }

  if (values.password !== values.passwordConfirmation) {
    errors.password = "Passwords must be the same";
  }
  return errors;
};

export default reduxForm({
  form: "loginForm" // a unique identifier for this form
})(LoginForm);
