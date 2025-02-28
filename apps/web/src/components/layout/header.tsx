"use client";

import { useState } from "react";
import Link from "next/link";
import { Activity } from "lucide-react";
import { cn } from "@/lib/utils";

export function Header() {
  return (
    <header className="relative sticky top-0 z-50 border-b bg-background">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center py-4">
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex items-center justify-center size-8 rounded-full bg-primary text-primary-foreground">
              <Activity className="size-5" />
            </div>
            <span className="font-bold text-xl">LivePulse</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
