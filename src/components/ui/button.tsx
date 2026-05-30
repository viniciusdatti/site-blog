import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"
import * as React from "react"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-lg border border-transparent bg-clip-padding text-action-sm font-inter whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-2 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        primary: "rounded-full bg-blue-200 text-white hover:bg-blue-300",
        default: "bg-blue-200 text-white hover:bg-blue-300",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-gray-400 bg-gray-700 transition-colors duration-200 hover:border-blue-200 hover:text-blue-200",
        secondary:
          "rounded-full bg-gray-100 text-gray-800 hover:bg-blue-100",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  children,
  ...props
}: ButtonPrimitive.Props &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const classes = cn(buttonVariants({ variant, size, className }))

  if (asChild) {
    if (!React.isValidElement(children)) {
      throw new Error("Button with asChild expects a single valid element child.")
    }

    return (
      <ButtonPrimitive
        data-slot="button"
        nativeButton={false}
        render={children}
        className={classes}
        {...props}
      />
    )
  }

  return (
    <ButtonPrimitive
      data-slot="button"
      className={classes}
      {...props}
    >
      {children}
    </ButtonPrimitive>
  )
}

export { Button, buttonVariants }
