import AuthLayout from "./_auth/AuthLayout";
import SignInForm from "./_auth/form/SignInForm";
import SignupForm from "./_auth/form/SignupForm";
import { Home } from "./_root/pages";
import RootLayout from "./_root/RootLayout";
import "./global.css";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <main className="flex h-screen">
      <Routes>
        {/* {Public Route} */}
        <Route element={<AuthLayout />}>
          <Route path="/sign-In" element={<SignInForm />} />
          <Route path="/sign-up" element={<SignupForm />} />
        </Route>

        {/* {Private Route} */}
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </main>
  );
};

export default App;
