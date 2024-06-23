import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import { VariantProps, cva } from "class-variance-authority";
import React from "react";

const buttonVariants = cva("", {
  variants: {
    variant: {
      pTag: "leading-7 mt-6",
      blockquote: "mt-6 border-l-2 pl-6 italic",
      hTag: "scroll-m-20",
      muted: "text-muted-foreground",
      default: "font-semibold tracking-tight",
    },
    size: {
      h1: "text-4xl font-extrabold tracking-tight lg:text-5xl",
      h2: "text-3xl font-semibold tracking-tight",
      h3: "text-2xl font-semibold tracking-tight",
      h4: "text-xl font-semibold tracking-tight",
      small: "text-xs font-medium leading-none",
      default: "",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

export interface TypographyProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  tag: "h1" | "h2" | "h3" | "h4" | "blockquote" | "p";
}

function Typography({
  asChild,
  size,
  className,
  variant,
  tag,
  ...props
}: TypographyProps) {
  let Comp = tag || "h4";
  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export default Typography;
