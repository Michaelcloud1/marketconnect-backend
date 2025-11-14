import React from "react";

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className = "", ...props }, ref) => {
  return (
    <input
      ref={ref}
      className={`w-full border rounded-md px-3 py-2 text-sm focus:ring-1 focus:outline-none ${className}`}
      {...props}
    />
  );
});

Input.displayName = "Input";
export default Input;
