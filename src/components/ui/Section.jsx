import { cn } from "@/lib/utils";

const tones = {
  ivory: "bg-ivory text-espresso",
  cream: "bg-ivory-100 text-espresso",
  espresso: "bg-espresso text-ivory",
  sand: "bg-ivory-200 text-espresso",
};

export default function Section({ as: Tag = "section", tone = "ivory", className, children, ...props }) {
  return (
    <Tag className={cn(tones[tone] || tones.ivory, className)} {...props}>
      {children}
    </Tag>
  );
}
