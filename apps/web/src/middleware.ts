import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// This simple middleware always allows the request to continue
export function middleware(request: NextRequest) {
  return NextResponse.next();
}

// This configuration doesn't check any routes
export const config = {
  matcher: [], 
};
