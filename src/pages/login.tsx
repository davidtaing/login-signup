import type { NextPage } from "next";
import Link from "next/link";
import { Button } from "../components/atoms/Button";
import { Logo } from "../components/atoms/Logo";
import { StyledLink } from "../components/atoms/StyledLink";
import { FormField } from "../components/FormField";
import { HalfImageDashboardLayout } from "../components/HalfImageDashboardLayout";
import { LabeledCheckbox } from "../components/LabeledCheckbox";

const loginImageProps = {
  src: "/oscar-sutton-yihlaRCCvd4-unsplash.jpg",
  alt: "Dog at a Beach by Oscar Sutton",
};

const Login: NextPage = () => {
  return (
    <HalfImageDashboardLayout imageProps={loginImageProps}>
      <Logo className="mt-16" />
      <h1 className="mt-12 text-4xl leading-none font-medium">Login</h1>
      <form className="mt-8">
        <FormField label="Email:" inputId="email" inputType="email" />
        <FormField label="Password:" inputId="password" inputType="password" />
        <div className="mt-4 h-3.5 flex justify-between items-center">
          <LabeledCheckbox label="Remember Me" inputId="remember-me" />
          <div>
            <Link href="/forgot-password">
              <StyledLink>Forgot your password?</StyledLink>
            </Link>
          </div>
        </div>
        <Button className="mt-4 w-full" type="submit" variant="CTA">
          Login
        </Button>
      </form>
      <p className="mt-8 text-sm leading-none text-center">
        Don&apos;t have have an account yet?{" "}
        <Link href="/signup">
          <StyledLink>Signup</StyledLink>
        </Link>
      </p>
    </HalfImageDashboardLayout>
  );
};

export default Login;
