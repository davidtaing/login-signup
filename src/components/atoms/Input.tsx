import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export const Input = (props: React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <div className={`${props.className} mt-2 w-full h-8 relative`}>
      <input
        {...props}
        className="block px-4 h-full w-full border border-stone-300 rounded outline-blue-400"
      />
    </div>
  );
};

export const PasswordInput = (
  props: Omit<React.InputHTMLAttributes<HTMLInputElement>, "type">
) => {
  const [showPassword, setShowPassword] = useState(false);

  const onPasswordToggle = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={`${props.className} mt-2 w-full h-8 relative`}>
      <input
        {...props}
        type={showPassword ? "text" : "password"}
        className="block px-4 h-full w-full border border-stone-300 rounded outline-blue-400"
      />
      <div className="absolute right-4 top-2 text-stone-300 hover:text-stone-700">
        {showPassword ? (
          <FaEyeSlash onClick={onPasswordToggle} />
        ) : (
          <FaEye onClick={onPasswordToggle} />
        )}
      </div>
    </div>
  );
};
