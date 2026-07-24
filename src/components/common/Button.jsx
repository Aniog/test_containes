import React from "react";

const variants = {
  primary: "btn-primary",
  gold: "btn-gold",
  outline: "btn-outline",
  outlineLight: "btn-outline-light",
  ghost: "btn-ghost",
};

export default function Button({
  children,
  variant = "primary",
  className = "",
  type = "button",
  ...rest
}) {
  const variantClass = variants[variant] || variants.primary;
  return (
    <button type={type} className={`btn ${variantClass} ${className}`} {...rest}>
      {children}
    </button>
  );
}
