import { useAuth0 } from '@auth0/auth0-react';

const Test1 = () => {
  const { logout, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) return <p>Loading...</p>;

  return (
    isAuthenticated ? (
      <div>
        <h1>Logged Page</h1>
        <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
          Sign-out
        </button>
      </div>
    ) : (
      <p>You are not logged in.</p>
    )
  );
};

export default Test1;
