import { useRouteError } from 'react-router-dom'

function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div>
      <h1>Oops!</h1>
      <p>An error occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <button><a href="/">back to home</a></button>
    </div>
  )
}

export default ErrorPage;