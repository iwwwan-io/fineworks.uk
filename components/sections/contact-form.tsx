"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { submitContactForm } from "@/lib/actions";
import { Button } from "@/components/ui/button";
import { CheckCircle2, AlertCircle } from "lucide-react";

const initialState = {
  message: "",
  error: null,
  success: false,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      size="lg"
      className="w-full bg-secondary text-primary hover:bg-secondary/90"
      disabled={pending}
    >
      {pending ? "Sending..." : "Send Message"}
    </Button>
  );
}

export function ContactForm() {
  const [state, formAction] = useActionState(submitContactForm, initialState);

  return (
    <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-neutral-100">
      <h2 className="text-2xl font-serif font-bold mb-6">Send us a Message</h2>

      {state.success ? (
        <div className="bg-green-50 text-green-800 p-6 rounded-lg flex items-center gap-4">
          <CheckCircle2 className="h-8 w-8 text-green-600" />
          <div>
            <h3 className="font-bold text-lg">Message Sent!</h3>
            <p>{state.message}</p>
          </div>
        </div>
      ) : (
        <form action={formAction} className="space-y-6">
          {state.error && (
            <div className="bg-red-50 text-red-800 p-4 rounded-lg flex items-center gap-3 text-sm">
              <AlertCircle className="h-5 w-5 text-red-600" />
              <div>{state.error}</div>
            </div>
          )}

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 rounded-md border bg-neutral-50 border-neutral-200 focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-shadow"
                placeholder="John Doe"
              />
              {state.errors?.name && <p className="text-red-500 text-xs">{state.errors.name[0]}</p>}
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 rounded-md border bg-neutral-50 border-neutral-200 focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-shadow"
                placeholder="john@example.com"
              />
              {state.errors?.email && <p className="text-red-500 text-xs">{state.errors.email[0]}</p>}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="phone" className="text-sm font-medium">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                className="w-full px-4 py-3 rounded-md border bg-neutral-50 border-neutral-200 focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-shadow"
                placeholder="+44 7123 456789"
              />
              {state.errors?.phone && <p className="text-red-500 text-xs">{state.errors.phone[0]}</p>}
            </div>
            <div className="space-y-2">
              <label htmlFor="budget" className="text-sm font-medium">Budget Guide (Optional)</label>
              <select
                id="budget"
                name="budget"
                className="w-full px-4 py-3 rounded-md border bg-neutral-50 border-neutral-200 focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-shadow"
              >
                <option value="">Select a range</option>
                <option value="under50k">Under £50k</option>
                <option value="50k-150k">£50k - £150k</option>
                <option value="150k-500k">£150k - £500k</option>
                <option value="500k+">£500k+</option>
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="projectType" className="text-sm font-medium">Project Type</label>
            <select
              id="projectType"
              name="projectType"
              required
              className="w-full px-4 py-3 rounded-md border bg-neutral-50 border-neutral-200 focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-shadow"
            >
              <option value="">Select project type</option>
              <option value="residential">Residential Construction</option>
              <option value="renovation">Extensions & Renovations</option>
              <option value="commercial">Commercial Fit-Out</option>
              <option value="management">Project Management</option>
              <option value="other">Other</option>
            </select>
            {state.errors?.projectType && <p className="text-red-500 text-xs">{state.errors.projectType[0]}</p>}
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium">Message</label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className="w-full px-4 py-3 rounded-md border bg-neutral-50 border-neutral-200 focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-shadow resize-none"
              placeholder="Tell us a bit about your project..."
            ></textarea>
            {state.errors?.message && <p className="text-red-500 text-xs">{state.errors.message[0]}</p>}
          </div>

          <SubmitButton />
        </form>
      )}
    </div>
  );
}
