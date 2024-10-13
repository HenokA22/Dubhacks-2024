import { useAuth0 } from '@auth0/auth0-react';

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  console.log("WE ARE HERE");
  console.log(isAuthenticated);
  // Login with redirect isn't working
  return (
    !isAuthenticated && (
      console.log("WE ARE HERE1"),
      <button onClick={() => loginWithRedirect()}>
        Sign-In
      </button>
    )
  );
};

export default LoginButton;
