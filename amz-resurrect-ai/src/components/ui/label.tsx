import * as React from "react";
import { cn } from "@/lib/utils";

export interface LabelProps
  extends React.LabelHTMLAttributes<HTMLLabelElement> {
  requiredIndicator?: boolean;
}

const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({ className, requiredIndicator, children, ...props }, ref) => (
    <label
      ref={ref}
      className={cn(
        "flex items-center gap-1 text-sm font-medium text-slate-600",
        className,
      )}
      {...props}
    >
      {children}
      {requiredIndicator ? (
        <span className="text-rose-500" aria-hidden>
          *
        </span>
      ) : null}
    </label>
  ),
);
Label.displayName = "Label";

export { Label };
