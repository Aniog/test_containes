import { useEffect } from "react";

export default function HelmetSEO({ title, description }) {
  useEffect(() => {
    if (title) {
      document.title = title;
    }
    const metaDescription = document.querySelector('meta[name="description"]');
    if (description) {
      if (metaDescription) {
        metaDescription.setAttribute("content", description);
      } else {
        const meta = document.createElement("meta");
        meta.name = "description";
        meta.content = description;
        document.head.appendChild(meta);
      }
    }
  }, [title, description]);

  return null;
}
