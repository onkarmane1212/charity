import { ReactNode } from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  description?: string | ReactNode;
  align?: 'left' | 'center' | 'right';
  className?: string;
}

export default function SectionTitle({
  title,
  subtitle,
  description,
  align = 'center',
  className = '',
}: SectionTitleProps) {
  const alignClasses = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto',
  };

  return (
    <div className={`max-w-3xl ${alignClasses[align]} ${className}`}>
      {subtitle && (
        <span className="text-emerald-600 font-semibold tracking-wide uppercase text-sm">
          {subtitle}
        </span>
      )}
      <h2 className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg text-gray-600">{description}</p>
      )}
    </div>
  );
}
