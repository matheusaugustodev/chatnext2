"use client";
import React, { useEffect, useState } from "react";
import SignIn from "./pages/signin/SignIn";
import SignUp from "./pages/SignUp";

export default function Login() {
  const [showSignUp, setShowSignUp] = useState(false);

  const AcessSign = () => {
    if (showSignUp) setShowSignUp(false);
    else setShowSignUp(true);
  };

  return (
    <>
      <div className={`flex flex-col content-center p-5 gap-7 flex-wrap`}>
        <SignUp AcessSign={AcessSign}/>
        {/* {showSignUp ? (
          <SignUp AcessSign={AcessSign} />
        ) : (
          <SignUp AcessSign={AcessSign} />
        )} */}
      </div>
    </>
  );
}
