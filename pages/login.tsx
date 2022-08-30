import type { NextPage } from "next";
import Image from "next/image";

const Label = (props: React.LabelHTMLAttributes<HTMLLabelElement>) => {
  return (
    <label
      {...props}
      className={`${props.className} block text-sm leading-none`}
    />
  );
};

const ErrorLabel = (props: React.LabelHTMLAttributes<HTMLLabelElement>) => {
  return (
    <Label
      {...props}
      className={`${props.className} mt-0.5 input-error text-red-600`}
    ></Label>
  );
};

const Input = (props: React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input
      {...props}
      className={`${props.className} block mt-2 px-4 w-full h-8 border rounded border-stone-300 outline-blue-400`}
    />
  );
};

interface FormFieldProps {
  label: string;
  inputId: string;
  inputType: string;
  error?: string;
}

const FormField = ({ label, inputId, inputType, error }: FormFieldProps) => {
  return (
    <div className="mt-4">
      <Label htmlFor={inputId}>{label}</Label>
      <Input id={inputId} type={inputType} />
      <ErrorLabel className="h-3.5" htmlFor={inputId}>
        {error ?? ""}
      </ErrorLabel>
    </div>
  );
};

interface LabeledCheckboxProps {
  label: string;
  inputId: string;
}

const LabeledCheckbox = ({ label, inputId }: LabeledCheckboxProps) => {
  return (
    <div className="flex">
      <input
        id={inputId}
        className="border border-stone-300 my-auto h-3.5 w-3.5 "
        type="checkbox"
      />
      <label
        className="ml-2 inline-block text-sm leading-none"
        htmlFor={inputId}
      >
        {label}
      </label>
    </div>
  );
};

const Logo = ({ className }: { className: string }) => {
  return (
    <div className={`${className} text-xl leading-none font-bold`}>
      <span className="underline">Tee</span>ang
    </div>
  );
};

const Login: NextPage = () => {
  return (
    <div className="h-screen">
      <div className="dashboard-container">
        <div className="dashboard bg-white h-full w-full px-8 grid grid-cols-12 gap-8 rounded-lg">
          <div className="col-start-1 col-end-7 p-8">
            <Logo className="mt-16" />
            <h1 className="mt-12 text-4xl leading-none font-semibold">Login</h1>
            <form className="mt-8">
              <FormField label="Email:" inputId="email" inputType="email" />
              <FormField
                label="Password:"
                inputId="password"
                inputType="password"
              />

              <div className="mt-4 h-3.5 flex justify-between items-center">
                <LabeledCheckbox label="Remember Me" inputId="remember-me" />
                <div>
                  <a
                    className="text-sm inline-block leading-none text-sky-600 hover:text-sky-700"
                    href="/forgot-password"
                  >
                    Forgot your password?
                  </a>
                </div>
              </div>
              <button
                className="mt-12 w-full h-8 text-sm leading-none rounded text-slate-50 bg-sky-600 hover:bg-sky-700"
                type="submit"
              >
                Login
              </button>
            </form>
          </div>
          <div className="w-50 relative -ml-4 -mr-8 col-start-7 col-end-13 rounded-r-lg overflow-hidden">
            <Image
              className="transition duration-500 hover:scale-105"
              src="/oscar-sutton-yihlaRCCvd4-unsplash.jpg"
              alt="Dog at a Beach by Oscar Sutton"
              layout="fill"
              object-fit="cover"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
