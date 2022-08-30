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
            <button className="h-8 px-4 leading-none rounded border border-stone-300 hover:border-stone-800 text-stone-500 hover:text-stone-800">
              Log Out
            </button>
          </div>
        </div>
        <h1 className="mt-12 text-4xl leading-none font-semibold">
          David&apos;s Super Secret Stuff
        </h1>
      </div>
    </Dashboard>
  );
};

export default Home;
