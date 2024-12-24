import { z } from 'zod';

const allowedEmailProviders: string[] = [
    'gmail.com',
    'yahoo.com',
    'outlook.com',
];

export const registerRequest = z.object({
    name: z
        .string()
        .min(1, { message: 'Name is required.' })
        .trim()
        .toLowerCase(),
    email: z
        .string()
        .min(1, { message: 'Email is required.' })
        .email({ message: 'Please enter a valid email address.' })
        .trim()
        .toLowerCase()
        .refine(
            email => {
                const domain = email.split('@')[1];
                return allowedEmailProviders.includes(domain!);
            },
            { message: 'Please enter a valid email provider.' },
        ),
    password: z
        .string()
        .min(1, { message: 'Password is required.' })
        .min(8, { message: 'Password must be at least 8 characters long.' })
        .max(100, { message: 'Password must not exceed 100 characters.' })
        .regex(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
            {
                message:
                    'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.',
            },
        )
        .optional(),
    provider: z.string(),
    image: z.string().optional(),
});

export const loginRequest = z.object({
    email: z
        .string()
        .min(1, { message: 'Email is required.' })
        .email({ message: 'Please enter a valid email address.' })
        .trim()
        .toLowerCase()
        .refine(
            email => {
                const domain = email.split('@')[1];
                return allowedEmailProviders.includes(domain!);
            },
            { message: 'Please enter a valid email provider.' },
        ),
    password: z
        .string()
        .min(1, { message: 'Password is required.' })
        .min(8, { message: 'Password must be at least 8 characters long.' }),
});
