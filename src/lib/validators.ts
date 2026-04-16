import { z } from 'zod';

export const emailValidator = z.string().email('Invalid email address');

export const passwordValidator = z.string().min(8, 'Password must be at least 8 characters');

export const userSchema = z.object({
    email: emailValidator,
    password: passwordValidator,
    name: z.string().min(1, 'Name is required'),
});

export type User = z.infer<typeof userSchema>;