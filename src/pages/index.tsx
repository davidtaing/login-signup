import type { NextPage } from "next";
import { useRouter } from "next/router";
import { Logo } from "../components/atoms/Logo";
import { Dashboard } from "../components/Dashboard";

enum BUILT_WITH {
  NEXTJS = "Next.js",
  TYPESCRIPT = "Typescript",
  TAILWIND = "Tailwind",
}

const loggedIn = false;

const Home: NextPage = () => {
  const router = useRouter();

  if (!loggedIn) router.push("/login");

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
        <p className="mt-9">
          Built with:
          <ul className="pl-10">
            {Object.values(BUILT_WITH).map((item) => (
              <li key={item} className="list-disc">
                {item}
              </li>
            ))}
          </ul>
        </p>
      </div>
    </Dashboard>
  );
};

export default Home;
