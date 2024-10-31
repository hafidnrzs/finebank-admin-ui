import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignInPage from "./pages/SignIn";
import SignUpPage from "./pages/SignUp";
import ErrorRoute from "./pages/errorRouter";
import ForgotPassword from "./pages/ForgotPassword";
import Dashboard from "./pages/dashboard";
import Balance from "./pages/balance";

const App = () => {
  const myRouter = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard />,
      errorElement: <ErrorRoute />,
    },
    {
      path: "/login",
      element: <SignInPage />,
    },
    {
      path: "/register",
      element: <SignUpPage />,
    },
    {
      path: "/forgot",
      element: <ForgotPassword />,
    },
  ]);

  return (
    <>
      <RouterProvider router={myRouter} />
    </>
  );
};

export default App;