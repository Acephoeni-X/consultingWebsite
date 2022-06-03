import React from "react";
import { signIn } from "next-auth/react";

const GoogleLogin = () => {
  return (
    <div>
      <button onClick={() => signIn()}>Google Login</button>
    </div>
  );
};

export default GoogleLogin;
