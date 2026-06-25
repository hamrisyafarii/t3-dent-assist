"use client";

import React from "react";
import { useState } from "react";
import { toast } from "sonner";
import Navigation from "~/components/shared/Navigation";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { authClient } from "~/server/better-auth/client";

const SignInPage = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const { isPending } = authClient.useSession();

  const handleSignIn = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    try {
      const { data, error } = await authClient.signIn.email({
        email,
        password,
        callbackURL: "/chat",
      });

      if (error) {
        toast.error(error.message || "An error occurred during sign in.");
      }
      if (data) {
        toast.success("Signed in successfully!");
      }
    } catch (error) {
      console.error("Sign In Error:", error);
    }
  };

  const handleSignUp = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    try {
      const { data, error } = await authClient.signUp.email({
        name,
        email,
        password,
        callbackURL: "/chat",
      });
      if (error) {
        toast.error(error.message || "An error occurred during sign up.");
      }
      if (data) {
        toast.success("Signed up successfully!, Please sign in to continue.");
      }
    } catch (error) {
      console.error("Sign Up Error:", error);
    }
  };

  return (
    <>
      <Navigation type="home" />
      <div className="bg-background text-foreground flex min-h-screen items-center justify-center overflow-hidden font-sans">
        <div className="from-primary/10 via-background to-background absolute inset-0 z-[-1] bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))]" />
        <div className="bg-primary/30 pointer-events-none absolute top-0 left-1/2 h-125 w-full max-w-250 -translate-x-1/2 rounded-full opacity-20 blur-[120px]" />
        {/* Auth Card */}
        <div className="bg-card z-10 w-full max-w-md rounded-lg p-8 shadow-lg">
          {/* Toggle */}
          <div className="mb-6 flex items-center justify-center gap-4">
            <Button
              className="min-w-24"
              variant={isSignIn ? "default" : "outline"}
              onClick={() => setIsSignIn(true)}
            >
              Sign In
            </Button>
            <Button
              className="min-w-24"
              variant={isSignIn ? "outline" : "default"}
              onClick={() => setIsSignIn(false)}
            >
              Sign Up
            </Button>
          </div>
          {/* Sign In Form */}
          {isSignIn && (
            <form onSubmit={handleSignIn}>
              <div className="mb-4 flex flex-col gap-4">
                <label htmlFor="email" className="text-md block font-medium">
                  Email
                </label>
                <Input type="email" name="email" placeholder="Email" required />
                <label htmlFor="password" className="text-md block font-medium">
                  Password
                </label>
                <Input
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                />
              </div>
              <Button
                type="submit"
                className="mt-6 w-full"
                disabled={isPending}
              >
                {isPending ? "Signing In..." : "Sign In"}
              </Button>
              <div className="text-muted-foreground mt-4 text-center text-sm">
                OR
              </div>
              <Button variant="outline" className="mt-4 w-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="100"
                  height="100"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="#FFC107"
                    d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                  ></path>
                  <path
                    fill="#FF3D00"
                    d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                  ></path>
                  <path
                    fill="#4CAF50"
                    d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                  ></path>
                  <path
                    fill="#1976D2"
                    d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                  ></path>
                </svg>
                Sign In with Google
              </Button>
            </form>
          )}
          {/* Sign Up Form */}
          {!isSignIn && (
            <form onSubmit={handleSignUp}>
              <div className="mb-4 flex flex-col gap-4">
                <label htmlFor="name" className="text-md block font-medium">
                  Name
                </label>
                <Input type="text" name="name" placeholder="Name" required />
                <label htmlFor="email" className="text-md block font-medium">
                  Email
                </label>
                <Input type="email" name="email" placeholder="Email" required />
                <label htmlFor="password" className="text-md block font-medium">
                  Password
                </label>
                <Input
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                />
              </div>
              <Button
                type="submit"
                className="mt-6 w-full"
                disabled={isPending}
              >
                {isPending ? "Signing Up..." : "Sign Up"}
              </Button>

              <div className="text-muted-foreground mt-4 text-center text-sm">
                OR
              </div>
              <Button variant="outline" className="mt-4 w-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="100"
                  height="100"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="#FFC107"
                    d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                  ></path>
                  <path
                    fill="#FF3D00"
                    d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                  ></path>
                  <path
                    fill="#4CAF50"
                    d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                  ></path>
                  <path
                    fill="#1976D2"
                    d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                  ></path>
                </svg>
                Sign Up with Google
              </Button>
            </form>
          )}
        </div>
      </div>
    </>
  );
};

export default SignInPage;
