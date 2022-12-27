import React from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { useState } from "react";
import { Link } from "react-router-dom";
import {IntlProvider, FormattedMessage} from 'react-intl';
import { Input, Button, Select } from "@components/common";
import { usePostSignUpMutation } from "@services/targetApi";
import smilies from "@assets/images/smilies.png";

const messages = {
  confirmationFirstTitle: "Yey!",
  confirmationSubtitle: "Only one more step to start enjoying",
  confirmationTarget: "TARGET",
  confirmationDescription: "We've sent an email to confirm your account.",
  confirmationInbox: "Please check your inbox.",
  signUp: "Sign Up",
  signIn: "Sign In"
}

function SignUpForm() {
  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
    setError  } = useForm();


  const [
    signUpRequest,
    {
      isSuccess: signUpSuccess,
    },
  ] = usePostSignUpMutation();

  const [user, setUser] = useState({
    name: "",
    email: "",
    gender: "",
    password: "",
    password_confirmation: "",
  })

  async function createUser(event) {
    try {
      let response = await signUpRequest({
        user: {
          name: user.name,
          email: user.email,
          gender: user.gender,
          password: user.password,
          password_confirmation: user.password_confirmation
        }
      });
      response = response.data.user
    } catch (error) {
      setError("serverError", {
        type: "custom",
        message: "This form contains errors. Please try again.",
      });
    }
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };


  if (signUpSuccess) {
    return (
      <IntlProvider messages={messages} locale="en">
        <div>
          <img className="smilies" src={smilies} alt="smilies" />
          <h1 className="confirmation__first_title"><FormattedMessage id="confirmationFirstTitle" /></h1>
          <p className="confirmation__subtitle"><FormattedMessage id="confirmationSubtitle" /></p>
          <p className="confirmation__first_title confirmation__second_title"><FormattedMessage id="confirmationTarget" /></p>
          <p className="confirmation__description"><FormattedMessage id="confirmationDescription" /></p>
          <p className="confirmation__description"><FormattedMessage id="confirmationInbox" /></p>
        </div>
      </IntlProvider>
    )
  }
  return (
    <IntlProvider messages={messages} locale="en">
       <div>
        <h1 className="left-container__title signup"><FormattedMessage id="signUp" /></h1>
        <form onSubmit={handleSubmit(createUser)}>
          <Input
            label="name"
            type="string"
            register={register}
            error={!isValid}
            onChange={handleChange}
            name="name"
          />
          <Input
            label="email"
            type="email"
            register={register}
            error={!isValid}
            onChange={handleChange}
            name="email"
          />
          <Input
            label="password"
            type="password"
            register={register}
            error={!isValid}
            onChange={handleChange}
            name="password"
            placeholder="min. 6 characters long"
          />
          <Input
            label="confirm password"
            type="password"
            register={register}
            error={!isValid}
            onChange={handleChange}
            name="password_confirmation"
          />
          <Select
            label="gender"
            register={register}
            error={!isValid}
            defaultOption="Select your gender"
            options={['male', 'female', 'other']}
            onChange={handleChange}
            name="gender"
          />
          <Button label="sign up" />
          <div className="errorMessage">
            <ErrorMessage errors={errors} name="serverError" />
          </div>
        </form>
        <hr className="solid" />
        <Link className="left-container__link" to="/"><FormattedMessage id="signIn" /></Link>
      </div>
    </IntlProvider>
  )
}

export default SignUpForm;
