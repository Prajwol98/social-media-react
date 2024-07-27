import { z } from "zod";
export const signInFormValidation = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  password: z.string().min(8, {
    message: "password should be at least 8 char long",
  }),
  email: z.string().email({
    message: "email should be a valid email",
  }),
});
