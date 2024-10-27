import LabeledInput from "../Elements/LabeledInput";
import Button from "../Elements/Button";

const FromForgotPassword = () => {
  return (
    <form action="">
      <div className="mb-6">
        <LabeledInput
          label="Email address"
          type="email"
          placeholder="hello@example.com"
          name="email"
        />
      </div>
      <Button variant="bg-primary w-full text-white" type="submit">
        Password Reset
      </Button>
    </form>
  );
};

export default FromForgotPassword;