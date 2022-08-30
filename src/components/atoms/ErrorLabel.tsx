import { Label } from "./Label";

export const ErrorLabel = (
  props: React.LabelHTMLAttributes<HTMLLabelElement>
) => {
  return (
    <Label
      {...props}
      className={`${props.className} mt-0.5 input-error text-red-600`}
    />
  );
};
