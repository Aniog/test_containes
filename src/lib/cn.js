// Small classname combinator. We don't need shadcn's full tailwind-merge
// because we control the design system; clsx alone is plenty.
import clsx from "clsx";

export function cn(...inputs) {
  return clsx(inputs);
}
