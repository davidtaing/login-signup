export const Input = (props: React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input
      {...props}
      className={`${props.className} block mt-2 px-4 w-full h-8 border rounded border-stone-300 outline-blue-400`}
    />
  );
};
