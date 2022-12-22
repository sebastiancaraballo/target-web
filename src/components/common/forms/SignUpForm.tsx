import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ErrorMessage } from "@hookform/error-message";
import { useState } from "react";
import { Link } from "react-router-dom"
import { Input, Button, Select } from "@components/common";
import { usePostSignUpMutation } from "@services/targetApi";
import smilies from "@assets/images/smilies.png";

function SignUpForm() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitted, isValid, errors },
    setError,
    clearErrors
  } = useForm();

  const navigate = useNavigate();

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
      const response = await signUpRequest({
        user: {
          name: user.name,
          email: user.email,
          gender: user.gender,
          password: user.password,
          password_confirmation: user.password_confirmation
        }
      });
      user = response.data.user
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

  const isFormValid = !isSubmitted || isValid;

  if (signUpSuccess) {
    return (
      <div>
        <img className="smilies" src={smilies} alt="smilies" />
        <h1 className="confirmation__first_title">Yey!</h1>
        <p className="confirmation__subtitle">Only one more step to start enjoying</p>
        <p className="confirmation__first_title confirmation__second_title">TARGET</p>
        <p className="confirmation__description">We've sent an email to confirm your account.</p>
        <p className="confirmation__description">Please check your inbox.</p>
      </div>
    )
  }
  return (
    <div>
      <h1 className="left-container__title signup">Sign Up</h1>
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
      <Link className="left-container__link" to="/">Sign In</Link>
    </div>
  )
}

export default SignUpForm;
