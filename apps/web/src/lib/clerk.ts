import { Clerk } from "@clerk/clerk-js";

export const clerk = new Clerk(process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY ?? "");

// Mock Clerk implementation for development
export async function getToken() {
  return null;
}
