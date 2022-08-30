export const StyledLink = (
  props: React.AnchorHTMLAttributes<HTMLAnchorElement>
) => {
  return (
    <a
      {...props}
      className={`${props.className} text-sm inline-block leading-none text-sky-600 hover:text-sky-700 cursor-pointer`}
    />
  );
};
