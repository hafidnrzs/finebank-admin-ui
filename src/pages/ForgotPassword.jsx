import FormForgotPassword from "../components/Fragments/FormForgotPassword";
import AuthLayout from "../components/Layout/AuthLayout";

const ForgotPassword = () => {
  return (
    <AuthLayout type="forgot">
      <FormForgotPassword />
    </AuthLayout>
  );
};

export default ForgotPassword;