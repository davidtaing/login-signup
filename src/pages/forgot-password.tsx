import type { NextPage } from "next";
import { Logo } from "../components/atoms/Logo";
import { Dashboard } from "../components/Dashboard";

// TODO - Redirect if user is not logged in.

const Home: NextPage = () => {
  return (
    <Dashboard>
      <div className="col-start-1 col-end-13 p-8">
        <div className="mt-16">
          <div className="flex justify-between items-center">
            <Logo />
          </div>
        </div>
        <h1 className="mt-12 text-4xl font-medium">Forgot your password?</h1>
        <h2 className="mt-6 text-2xl font-stone-600">
          Too bad, ain&apos;t nothing you can do.
        </h2>
      </div>
    </Dashboard>
  );
};

export default Home;
