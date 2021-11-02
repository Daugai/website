import * as React from 'react';

export const H2: React.FC<{className?: string}> = ({children, className = ''}) => (
    <h2 className={`text-2xl font-extrabold text-gray-900 sm:text-3xl ${className}`}>{children}</h2>
)
