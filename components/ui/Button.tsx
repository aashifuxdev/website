import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "outline" | "ghost";
  external?: boolean;
  className?: string;
  onClick?: () => void;
}

export default function Button({
  children,
  href,
  variant = "primary",
  external = false,
  className = "",
  onClick,
}: ButtonProps) {
  const base =
    "inline-flex items-center gap-2 text-sm font-medium px-4 py-2.5 transition-opacity hover:opacity-75";
  const variants = {
    primary: "bg-black text-white",
    outline: "border border-black text-black",
    ghost: "text-black underline underline-offset-4",
  };
  const cls = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return external ? (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {children}
      </a>
    ) : (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }
  return (
    <button onClick={onClick} className={cls}>
      {children}
    </button>
  );
}
