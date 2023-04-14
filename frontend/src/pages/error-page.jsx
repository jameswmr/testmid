import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  // console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>Please send email to "B10902063" for some help!</p>
      <p>
        <i>
          {error.status} {error.data || error.statusText || error.message}
        </i>
      </p>
    </div>
  );
}
