import { Outlet, Navigate } from "react-router-dom";
const AuthLayout = () => {
  const isAuthenticated = false;
  return (
    <>
      {isAuthenticated ? (
        <Navigate to="/" />
      ) : (
        <>
          <section className="flex items-center justify-center py-10 flex-col flex-1">
            <Outlet />
          </section>

          <img
            src="/assets/images/side-img.svg"
            alt="img"
            className="hidden xl:block object-cover bg-no-repeat h-screen w-1/2"
          />
        </>
      )}
    </>
  );
};

export default AuthLayout;
