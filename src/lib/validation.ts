import { z } from "zod";

export const demoSchema = z.object({
  name: z.string().trim().min(2, "Please enter at least 2 characters.").max(80, "Please keep your name under 80 characters."),
  email: z.email("Please enter a valid work email.").max(254, "Email address is too long."),
  company: z.string().trim().min(2, "Please enter your company name.").max(100, "Please keep the company name under 100 characters."),
  message: z.string().trim().max(1000, "Please keep your message under 1,000 characters."),
});

export type DemoValues = z.infer<typeof demoSchema>;
