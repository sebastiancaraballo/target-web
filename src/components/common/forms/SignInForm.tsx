import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import Input from "@common/Input"
import Button from "@common/Button"
import { setCredentials, useAuth } from "../../../store/auth.reducer";
import { usePostSignInMutation } from "@services/targetApi";

function SignInForm() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitted, isValid, errors },
    setError,
    clearErrors
  } = useForm();

  const dispatch = useDispatch();
  const { user: storeUser } = useAuth();

  const [
    signInRequest
  ] = usePostSignInMutation();

  const onSubmit = async (data: object) => {
    try {
      const response = await signInRequest({
        user: data,
      });
      dispatch(setCredentials(response.data));
    } catch (error) {
      setError("serverError", {
        type: "custom",
        message: "Incorrect email or password",
      });
    }
  }

  return (
    <div>
      { storeUser && (
        <Navigate to="/home" replace={true} />
      )}
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="email"
          type="email"
          register={register}
          error={!isValid}
          onChange={() => clearErrors()}
        />
        <Input
          label="password"
          type="password"
          register={register}
          error={!isValid}
          onChange={() => clearErrors()}
        />
        <Button label="sign in" />
        <div className="errorMessage">
          <ErrorMessage errors={errors} name="serverError" />
        </div>
      </form>
    </div>
  )
}

export default SignInForm;
