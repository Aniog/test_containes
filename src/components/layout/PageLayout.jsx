import { useEffect } from "react";

export default function PageLayout({ title, children, className = "" }) {
  useEffect(() => {
    if (title) {
      const suffix = " | SSourcing China";
      if (title.endsWith(suffix)) {
        document.title = title;
      } else {
        document.title = `${title}${suffix}`;
      }
    }
  }, [title]);

  return (
    <div className={`min-h-screen flex flex-col ${className}`}>
      {children}
    </div>
  );
}
