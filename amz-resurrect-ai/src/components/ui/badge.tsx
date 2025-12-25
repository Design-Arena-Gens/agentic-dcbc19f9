import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement> {
  tone?: "default" | "success" | "warning" | "muted";
}

const toneClasses: Record<Required<BadgeProps>["tone"], string> = {
  default: "bg-slate-900/10 text-slate-900 ring-1 ring-slate-900/20",
  success: "bg-emerald-100 text-emerald-700 ring-1 ring-emerald-200",
  warning: "bg-amber-100 text-amber-700 ring-1 ring-amber-200",
  muted: "bg-slate-100 text-slate-600 ring-1 ring-slate-200",
};

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, tone = "default", ...props }, ref) => (
    <span
      ref={ref}
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium",
        toneClasses[tone],
        className,
      )}
      {...props}
    />
  ),
);
Badge.displayName = "Badge";

export { Badge };
