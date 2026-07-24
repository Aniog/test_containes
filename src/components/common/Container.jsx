import React from "react";

export default function Container({ children, className = "", as: Tag = "div" }) {
  return (
    <Tag className={`container-velmora ${className}`}>{children}</Tag>
  );
}
