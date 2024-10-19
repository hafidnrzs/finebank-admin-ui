import FormSignIn from "../components/Fragments/FormSignIn";
import Authlayout from "../components/Layouts/Authlayout";

const SignInPage = () => {
  return (
    <AuthLayout type="sign in">
      <FormSignIn />
    </AuthLayout>
  );
};

export default SignInPage;