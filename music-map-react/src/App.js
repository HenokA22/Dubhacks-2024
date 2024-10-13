//import { useState } from 'react';
import './App.css';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from './components/LoginButton';

function App() {
  const { isLoading, error } = useAuth0();
  return (
    <main>
      <h1>Music Map</h1>
      {error && <p>Authentication Error</p>}
      {!error && isLoading && <p>Loading...</p>}
      {!error && !isLoading && (
        <>
          <h2>See what people around you are listening to!</h2>
          <LoginButton />
        </>
      )}
    </main>
  );
}

export default App;
