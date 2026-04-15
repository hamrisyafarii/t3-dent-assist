"use client";

import type React from "react";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { env } from "~/env";
import { authClient } from "~/server/better-auth/client";

const SignInPage = () => {
  const handleSignIn = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const { data, error } = await authClient.signIn.email({
      email,
      password,
      callbackURL: env.NEXT_PUBLIC_APP_URL,
    });

    console.log(data);
    console.log(error?.message);
  };

  return (
    <div className="bg-foreground text-background flex min-h-screen flex-col items-center justify-center">
      <div className="mx-auto w-full max-w-md rounded-md border p-8">
        <p className="text-xl font-bold">Sign In</p>
        <form className="space-y-4" onSubmit={handleSignIn}>
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

export default SignInPage;
