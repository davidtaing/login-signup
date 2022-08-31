import type { NextPage } from "next";
import Link from "next/link";
import { Button } from "../components/atoms/Button";
import { Logo } from "../components/atoms/Logo";
import { StyledLink } from "../components/atoms/StyledLink";
import { FormField } from "../components/FormField";
import { HalfImageDashboardLayout } from "../components/HalfImageDashboardLayout";

const signupImageProps = {
  src: "/milada-vigerova-7E9qvMOsZEM-unsplash.jpg",
  alt: "Cat on TV Stand by Milada Vigerova",
};

const Signup: NextPage = () => {
  return (
    <HalfImageDashboardLayout imageProps={signupImageProps}>
      <Logo className="mt-16" />
      <h1 className="mt-12 text-4xl leading-none font-medium">Sign Up</h1>
      <form className="mt-8">
        <FormField label="Name:" inputId="name" inputType="text" />
        <FormField label="Email:" inputId="email" inputType="email" />
        <FormField label="Password:" inputId="password" inputType="password" />
        <Button variant="CTA" className="mt-8 w-full" type="submit">
          Sign Up
        </Button>
      </form>
      <p className="mt-8 text-sm leading-none text-center">
        Already have have an account?{" "}
        <Link href="/login">
          <StyledLink>Login</StyledLink>
        </Link>
      </p>
    </HalfImageDashboardLayout>
  );
};

export default Signup;
