import { PropsWithChildren } from "react";
import clsx from "clsx";

type ButtonProps = PropsWithChildren<{
    onClick?: () => void;
    variant: "primary" | "secondary";
    size: "sm" | "md" | "lg";
}>;

export const Button = ({
                           onClick,
                           variant = "primary",
                           size = 'md',
                           children,
                       }: ButtonProps) => {
    const baseClasses =
        "rounded-md font-medium focus:outline-none transition-colors duration-200";

    const variantClasses: Record<ButtonProps["variant"], string> = {
        primary: "bg-blue-600 text-white hover:bg-blue-700",
        secondary: "bg-red-500 text-white hover:bg-red-600",
    };

    const sizeClasses: Record<ButtonProps["size"], string> = {
        sm: "px-3 py-1 text-sm",
        md: "px-4 py-2 text-base",
        lg: "px-6 py-3 text-lg",
    };

    return (
        <button
            onClick={onClick}
            className={clsx(baseClasses, variantClasses[variant], sizeClasses[size])}
        >
            {children}
        </button>
    );
};
