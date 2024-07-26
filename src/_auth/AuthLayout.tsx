import { Outlet, Navigate } from "react-router-dom";
const AuthLayout = () => {
  const isAuthenticated = false;
  return (
    <div>
      {isAuthenticated ? (
        <Navigate to="/"></Navigate>
      ) : (
        <section>
          <Outlet></Outlet>
        </section>
      )}
    </div>
  );
};

export default AuthLayout;
