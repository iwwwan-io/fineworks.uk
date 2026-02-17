"use server"

import { z } from "zod"

const contactFormSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number is required"),
  projectType: z.string().min(1, "Please select a project type"),
  budget: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

export type FormState = {
  success?: boolean
  error?: string | null
  errors?: Record<string, string[]>
  message?: string
}

export async function submitContactForm(prevState: FormState, formData: FormData): Promise<FormState> {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000))

  const rawData = {
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    projectType: formData.get("projectType"),
    budget: formData.get("budget"),
    message: formData.get("message"),
  }

  const validatedFields = contactFormSchema.safeParse(rawData)

  if (!validatedFields.success) {
    return {
      success: false,
      error: "Validation failed",
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }

  // Here you would typically send an email (e.g., using Resend or Nodemailer)
  // or save to a database.
  console.log("Form Submitted:", validatedFields.data)

  return {
    success: true,
    message: "Thank you for getting in touch. We will respond to your enquiry shortly.",
  }
}
