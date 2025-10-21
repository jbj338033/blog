interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  children: React.ReactNode;
}

export function Button({ 
  variant = "primary", 
  children, 
  className = "",
  ...props 
}: ButtonProps) {
  const variants = {
    primary: "bg-primary text-white hover:bg-[#1b64da]",
    secondary: "bg-gray-100 text-gray-700 hover:bg-gray-200",
  };

  return (
    <button 
      className={`rounded-md transition-colors cursor-pointer ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
