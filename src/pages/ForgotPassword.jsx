import FormForgotPassword from "../components/Fragments/FormSignIn";
import AuthLayout from "../components/Layout/AuthLayout";

const ForgotPassword = () => {
  return (
    <AuthLayout type="forgot password">
      <FormForgotPassword />
    </AuthLayout>
  );
};

export default ForgotPassword;