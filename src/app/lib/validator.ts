import { z } from 'zod';

export const userSchema = z.object({
    email: z.string().email('Invalid email address'),
    password: z.string().min(8, 'Password must be at least 8 characters'),
    name: z.string().min(1, 'Name is required'),
});

export type User = z.infer<typeof userSchema>;

export function validateUser(data: unknown) {
    return userSchema.safeParse(data);
}