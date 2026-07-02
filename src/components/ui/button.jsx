import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-[#B3875F] text-white hover:bg-[#9A714D] focus-visible:ring-[#B3875F]",
        outline:
          "border border-[#B3875F] bg-transparent text-[#B3875F] hover:bg-[#B3875F] hover:text-white focus-visible:ring-[#B3875F]",
        ghost: "hover:bg-[#F8F5F1] text-[#3E3228]",
        secondary:
          "bg-[#3E3228] text-[#F8F5F1] hover:bg-[#2A211B] focus-visible:ring-[#3E3228]",
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 px-4 text-xs tracking-widest uppercase",
        lg: "h-12 px-8 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
