import { Card } from "@/components/ui/card";
import { WaitlistForm } from "./_components/waitlist-form";

export default function Home() {
  return (
    <main className="flex flex-1 items-center justify-center py-16 px-4">
      <Card className="max-w-xl w-full p-8">
        <div className="flex flex-col items-center space-y-8 text-center">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold">LivePulse</h1>
            <p className="text-muted-foreground">
              Real-time polling & quiz app that transforms how conference presenters engage with their audience.
            </p>
          </div>
          
          <WaitlistForm />
        </div>
      </Card>
    </main>
  );
}
