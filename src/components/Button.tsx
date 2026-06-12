import React from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'tertiary';

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  href?: string;
  onClick?: () => void;
  className?: string;
  target?: string;
  rel?: string;
}

const primaryShadow = '0 1px 2px 0 rgba(5,26,36,0.1), 0 4px 4px 0 rgba(5,26,36,0.09), 0 9px 6px 0 rgba(5,26,36,0.05), 0 17px 7px 0 rgba(5,26,36,0.01), 0 26px 7px 0 rgba(5,26,36,0), inset 0 2px 8px 0 rgba(255,255,255,0.5)';
const secondaryShadow = '0 0 0 0.5px rgba(0,0,0,0.05), 0 4px 30px rgba(0,0,0,0.08)';

export function Button({ children, variant = 'primary', href, onClick, className = '', target, rel }: ButtonProps) {
  const baseClasses = 'inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-medium transition-opacity hover:opacity-80 cursor-pointer whitespace-nowrap';

  const variantStyles: Record<ButtonVariant, React.CSSProperties> = {
    primary: {
      backgroundColor: '#051A24',
      color: '#ffffff',
      boxShadow: primaryShadow,
    },
    secondary: {
      backgroundColor: '#ffffff',
      color: '#051A24',
      boxShadow: secondaryShadow,
    },
    tertiary: {
      backgroundColor: '#ffffff',
      color: '#051A24',
      boxShadow: `${primaryShadow}, ${secondaryShadow}`,
    },
  };

  const style = variantStyles[variant];

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        className={`${baseClasses} ${className}`}
        style={style}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${className}`}
      style={style}
    >
      {children}
    </button>
  );
}
