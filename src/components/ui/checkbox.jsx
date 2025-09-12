

import React from "react";
import { cn } from "../../lib/utils";
import { Check } from "lucide-react";

const Checkbox = React.forwardRef(({ className, checked, onChange, ...props }, ref) => {
  return (
    <div className="relative flex items-center">
      <input
        type="checkbox"
        className="sr-only"
        ref={ref}
        checked={checked}
        onChange={onChange}
        {...props}
      />
      <div
        className={cn(
          "h-5 w-5 rounded border border-gray-300 flex items-center justify-center",
          checked ? "bg-blue-600 border-blue-600" : "bg-white",
          className
        )}
      >
        {checked && <Check className="h-3.5 w-3.5 text-white" />}
      </div>
    </div>
  );
});

Checkbox.displayName = "Checkbox";

export { Checkbox };

