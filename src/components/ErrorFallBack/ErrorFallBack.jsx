import React from "react";
import { Link } from "react-router-dom";
import { HOME } from "../../router/route-path";


const ErrorFallBack = ({
  error,
  resetErrorBoundary,
}) => {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre style={{ color: "red" }}>{error.message}</pre>
      <Link to={HOME}>To Home</Link>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
};

export default ErrorFallBack;
