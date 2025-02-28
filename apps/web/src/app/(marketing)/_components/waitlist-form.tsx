"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send the email to your backend
    console.log("Email submitted:", email);
    setSubmitted(true);
    setEmail("");
  };

  return (
    <div className="w-full max-w-md mx-auto">
      {submitted ? (
        <div className="text-center p-4 bg-green-50 dark:bg-green-950 rounded-lg">
          <h3 className="font-medium text-xl mb-2">Thanks for joining!</h3>
          <p className="text-muted-foreground">
            We'll notify you when LivePulse launches.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-2">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1"
            />
            <Button type="submit">
              Join Waitlist
            </Button>
          </div>
          <p className="text-xs text-muted-foreground text-center">
            Be the first to know when we launch. No spam, ever.
          </p>
        </form>
      )}
    </div>
  );
} 