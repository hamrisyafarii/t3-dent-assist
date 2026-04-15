"use client";

import type React from "react";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { authClient } from "~/server/better-auth/client";

const SignUpPage = () => {
  const handleSignUp = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const { data, error } = await authClient.signUp.email({
      name,
      email,
      password,
      callbackURL: "http://localhost:3000",
    });

    console.log(data);
    console.log(error);
  };
  return (
    <div className="bg-foreground text-background flex min-h-screen items-center justify-center">
      <div className="mx-auto w-full max-w-md rounded-md border p-8">
        <p className="text-xl font-bold">Sign Up</p>
        <form className="space-y-4" onSubmit={handleSignUp}>
          <div className="flex flex-col">
            <label htmlFor="">Name</label>
            <Input type="text" name="name" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Email</label>
            <Input type="text" name="email" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Password</label>
            <Input type="password" name="password" />
          </div>
          <Button className="w-full" type="submit">
            Sign In
          </Button>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
