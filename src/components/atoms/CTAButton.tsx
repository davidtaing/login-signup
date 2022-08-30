export const CTAButton = (
  props: React.ButtonHTMLAttributes<HTMLButtonElement>
) => {
  return (
    <button
      {...props}
      className={`${props.className} h-8 text-sm leading-none rounded text-slate-50 bg-sky-600 hover:bg-sky-700`}
    >
      {props.children}
    </button>
  );
};
