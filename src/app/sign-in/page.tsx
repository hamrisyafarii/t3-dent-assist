const SignInPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="mx-auto w-full max-w-md rounded-md border p-8">
        <p className="text-xl font-bold">Sign In</p>
        <form className="space-y-2">
          <div className="flex flex-col">
            <label htmlFor="">Email</label>
            <input type="text" className="w-full rounded-md border py-2" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Password</label>
            <input type="password" className="w-full rounded-md border py-2" />
          </div>
          <button className="w-full rounded-md border py-2" type="submit">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignInPage;
