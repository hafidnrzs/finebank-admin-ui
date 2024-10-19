import FormSignUp from "../components/Fragments/FormSignUp";
import Authlayout from "../components/Layouts/Authlayout";

const SignUpPage = () => {
  return (
    <AuthLayout type="sign up">
      <FormSignUp />
    </AuthLayout>
  );
};

export default SignUpPage;