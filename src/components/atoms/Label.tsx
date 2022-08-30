export const Label = (props: React.LabelHTMLAttributes<HTMLLabelElement>) => {
  return (
    <label
      {...props}
      className={`${props.className} block text-sm leading-none`}
    />
  );
};
