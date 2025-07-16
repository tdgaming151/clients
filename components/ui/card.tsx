import React, { ReactNode } from 'react';
import clsx from 'clsx';

interface CardProps {
    children: ReactNode;
    className?: string;
}

interface CardHeaderProps {
    children: ReactNode;
    className?: string;
}

interface CardTitleProps {
    children: ReactNode;
    className?: string;
}

interface CardContentProps {
    children: ReactNode;
    className?: string;
}

export const Card: React.FC<CardProps> = ({ children, className }) => (
    <div
        className={clsx(
            'bg-white rounded-2xl shadow-lg overflow-hidden',
            'border border-gray-100',
            className
        )}
    >
        {children}
    </div>
);

export const CardHeader: React.FC<CardHeaderProps> = ({ children, className }) => (
    <div
        className={clsx(
            'px-6 py-4 border-b border-gray-200 bg-gray-50',
            className
        )}
    >
        {children}
    </div>
);

export const CardTitle: React.FC<CardTitleProps> = ({ children, className }) => (
    <h3
        className={clsx(
            'text-lg font-semibold leading-tight',
            className
        )}
    >
        {children}
    </h3>
);

export const CardContent: React.FC<CardContentProps> = ({ children, className }) => (
    <div
        className={clsx(
            'px-6 py-4',
            className
        )}
    >
        {children}
    </div>
);
