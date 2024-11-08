"use client";
import { useSession } from "next-auth/react";
import React from "react";

const HomePage = () => {
  const { data: session, status } = useSession();
  console.log(session.user);
  console.log(status);
  return (
    <div>
      {status === "unauthenticated" ? (
        <p>Login?</p>
      ) : (
        <h1>{session.user?.name}</h1>
      )}
    </div>
  );
};

export default HomePage;
