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
      <Navigation />
      <div className="bg-background text-foreground flex min-h-screen items-center justify-center overflow-hidden font-sans">
        <div className="from-primary/10 via-background to-background absolute inset-0 z-[-1] bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))]" />
        <div className="bg-primary/30 pointer-events-none absolute top-0 left-1/2 h-125 w-full max-w-250 -translate-x-1/2 rounded-full opacity-20 blur-[120px]" />

        <div className="absolute top-6 left-1/2 -translate-x-1/2">
          <div className="from-primary to-primary/60 text-primary-foreground shadow-primary/20 flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br shadow-lg">
            <span className="text-xl font-bold tracking-tight">DentAssist</span>
          </div>
        </div>
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
