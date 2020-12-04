import React from "react";

const ErrorMsg = () => {
  return (
    <div>
      <h2>Something went wrong =(</h2>
      <h2>Check if you:</h2>
      <ul>
        <li>Provided an API KEY</li>
        <li>Have a stable internet connection</li>
      </ul>
    </div>
  );
};

export default ErrorMsg;
