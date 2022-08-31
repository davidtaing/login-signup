import { PropsWithVariant } from "../../types/ComponentProps";

enum ButtonVariants {
  Common = "h-8 px-4 text-sm leading-none rounded",
  Base = "text-slate-700 hover:text-slate-900 border border-slate-400 hover:border-slate-700",
  CTA = "text-slate-50 bg-sky-600 hover:bg-sky-700",
  Danger = "text-slate-50 bg-red-600 hover:bg-red-700",
}

type ButtonVariant = keyof typeof ButtonVariants;
type ButtonProps = PropsWithVariant<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  ButtonVariant
>;

/**
 * Determining Classes
 * 1. Always add Common classes,
 * 2. Add Base variant classes if no variant was provided or variant === "Common"
 * 3. Otherwise, add variant classes if another variant was provided
 */
export function Button({ variant, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={`${ButtonVariants.Common} ${
        (!variant || variant === "Common") && ButtonVariants.Base
      } ${variant && ButtonVariants[variant]}
       ${props.className}`}
    />
  );
}
