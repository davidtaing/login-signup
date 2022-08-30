import Link from "next/link";

export const Logo = ({ className }: { className: string }) => {
  return (
    <div className={`${className} text-xl leading-none font-bold`}>
      <Link href="/">
        <a>
          <span className="underline">Tee</span>ang
        </a>
      </Link>
    </div>
  );
};
