import { useRouteError } from 'react-router-dom'

type ErrorType = {
  statusText: string
  message: string
}

const ErrorPage = () => {
  const error = useRouteError() as ErrorType

  const { statusText, message } = error

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{statusText || message}</i>
      </p>
    </div>
  )
}

export default ErrorPage
