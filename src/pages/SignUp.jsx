import FormSignUp from "../components/Fragments/FormSignUp";
import AuthLayout from "../components/Layout/AuthLayout";

const SignUp = () => {
  return (
    <AuthLayout type="sign up">
      <FormSignUp />
    </AuthLayout>
  );
};

export default SignUp;