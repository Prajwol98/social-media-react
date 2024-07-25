import SignInForm from "./_auth/form/SignInForm";
import SignupForm from "./_auth/form/SignupForm";
import { Home } from "./_root/pages";

import "./global.css";
import { Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <main className="flex h-screen">
      <Routes>
        {/* {public route} */}
        <Route path="/sign-In" element={<SignInForm />} />
        <Route path="/sign-up" element={<SignupForm />} />

        {/* {PRivate Route} */}
        <Route path="/home" element={<Home />} />
      </Routes>
    </main>
  );
};

export default App;
