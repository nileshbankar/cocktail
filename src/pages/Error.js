import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className="error-page section">
      <h1 className="error-container">It's a dead end</h1>

      <Link to="/">
        <button className="btn btn-primary">Go back to home</button>
      </Link>
    </section>
  );
};

export default Error;
