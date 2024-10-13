import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Auth0Provider } from '@auth0/auth0-react'
import ErrorPage from './routes/ErrorPage';
import LoggedPage from './components/LoggedPage';
import Dashboard from './routes/Dashboard';

const DOMAIN = "dev-el40rvnlc1s7ckxw.us.auth0.com"
const CLIENT_ID = "iz6JDhJA8xRjJcKoBmwgkA6MFPcG4qdF"
const REDIRECT_URI = "http://localhost:3000/login"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "login",
    element: <LoggedPage />
  },
  {
    path: "dash",
    element: <Dashboard />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain={DOMAIN}
      clientId={CLIENT_ID}
      authorizationParams={{
        redirect_uri: REDIRECT_URI}
        }>
        <RouterProvider router={router} />
      </Auth0Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
