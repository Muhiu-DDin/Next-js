'use client';
import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";

export default function RouteChangeLoader() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleRouteChange = () => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 800);
    };

    window.addEventListener("routeChangeStart", handleRouteChange);

    return () => {
      window.removeEventListener("routeChangeStart", handleRouteChange);
    };
  }, []);

  return loading ? (
    <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="w-8 h-8 animate-spin" />
     </div>
  ) : null;
}
