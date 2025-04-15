import { Suspense } from "react";
import ResultContent from "@/components/ResultContent";

export default function Page() {
  return (
    <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
      <ResultContent />
    </Suspense>
  );
}

export const dynamic = "force-dynamic";
