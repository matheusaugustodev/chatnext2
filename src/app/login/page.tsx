"use client";
import React, { useState } from "react";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

export default function Login() {
  const [showSignUp, setShowSignUp] = useState(false);

  const AcessSign = () => {
    if (showSignUp) setShowSignUp(false);
    else setShowSignUp(true);
  };
  type AcessSignFunction = () => void; 

  return (
    <>
      <div className={`flex flex-col content-center p-5 gap-7 flex-wrap`}>
        {/* <SignUp AcessSign={AcessSign}/> */}
        {showSignUp ? (
          <SignUp AcessSign={AcessSign as AcessSignFunction} />
        ) : (
          <SignIn AcessSign={AcessSign as AcessSignFunction} />
        )}
      </div>
    </>
  );
}
