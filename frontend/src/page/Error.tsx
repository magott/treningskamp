import { useRouteError } from 'react-router-dom'

export default function Error() {
  type Err = { statusText?: string; message?: string }

  const error = useRouteError() as Err
  console.error(error)

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  )
}
