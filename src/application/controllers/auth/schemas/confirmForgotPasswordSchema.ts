// Dependencies
import { z } from 'zod';

export const confirmForgotPasswordSchema = z.object({
  email: z.string().min(1, '"email" is required').email('Invalid email'),
  password: z.string().min(8, '"password" should be at least 8 characters long'),
  confirmationCode: z.string().min(1, '"confirmationCode" is required'),
});

export type ConfirmForgotPasswordBody = z.infer<typeof confirmForgotPasswordSchema>;
