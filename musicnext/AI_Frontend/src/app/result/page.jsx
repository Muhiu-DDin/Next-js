// "use client"
// import { useSearchParams } from "next/navigation";
// import { useState, useEffect } from "react";
// import { Loader2 } from "lucide-react";

// export default function Result() {
//     const searchParams = useSearchParams();
  
//     const originalImage = searchParams.get("original");
//     const dehazedImage = searchParams.get("dehazed");
    
//     const [loading, setLoading] = useState(true);

   
//     useEffect(() => {
//         const timeout = setTimeout(() => {
//             setLoading(false);
//         }, 1000);
//         return () => clearTimeout(timeout);
//     }, []);

//     if (loading) {
//         return (
//             <div className="flex items-center justify-center min-h-screen">
//                 <div className="flex flex-col items-center">
//                     <Loader2 className="mr-2 w-8 h-8 animate-spin" />
//                     {/* <span>please wait</span> */}
//                 </div>
//             </div>
//         );
//     }

//     if (!originalImage || !dehazedImage) {
//         return (
//             <div className="flex items-center justify-center min-h-screen">
//                 <div className="flex flex-col items-center">
//                     <span>No Image Found</span>
//                 </div>
//             </div>
//         );
//     }

//     return (
//         <div className="flex justify-center items-center gap-20 mt-20 w-full max-w-4xl mx-auto h-[29rem]">
//             <div className="text-center">
//                 <h2 className="text-lg font-semibold mb-2">Original Image</h2>
//                 <img
//                     src={originalImage}
//                     alt="Selected"
//                     style={{ width: "250px", height: "250px", objectFit: "cover" }}
//                     className="rounded-lg shadow-lg"
//                 />
//             </div>

//             <div className="text-center">
//                 <h2 className="text-lg font-semibold mb-2">Dehazed Image</h2>
//                 <img
//                     src={dehazedImage}
//                     alt="Dehazed"
//                     style={{ width: "250px", height: "250px", objectFit: "cover" }}
//                     className="rounded-lg shadow-lg"
//                 />
//             </div>
//         </div>
//     );
// }

// "use client";

// import { useSearchParams } from "next/navigation";
// import { useState, useEffect, Suspense } from "react";
// import { Loader2 } from "lucide-react";

// function ResultContent() {
//   const searchParams = useSearchParams();
//   const originalImage = searchParams.get("original");
//   const dehazedImage = searchParams.get("dehazed");
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const timeout = setTimeout(() => {
//       setLoading(false);
//     }, 1000);
//     return () => clearTimeout(timeout);
//   }, []);

//   if (loading) {
//     return (
//       <div className="flex items-center justify-center min-h-screen">
//         <Loader2 className="w-8 h-8 animate-spin" />
//       </div>
//     );
//   }

//   if (!originalImage || !dehazedImage) {
//     return (
//       <div className="flex items-center justify-center min-h-screen">
//         <span>No Image Found</span>
//       </div>
//     );
//   }

//   return (
//     <div className="flex justify-center items-center gap-20 mt-20 w-full max-w-4xl mx-auto h-[29rem]">
//       <div className="text-center">
//         <h2 className="text-lg font-semibold mb-2">Original Image</h2>
//         <img
//           src={originalImage}
//           alt="Selected"
//           className="w-[250px] h-[250px] object-cover rounded-lg shadow-lg"
//         />
//       </div>

//       <div className="text-center">
//         <h2 className="text-lg font-semibold mb-2">Dehazed Image</h2>
//         <img
//           src={dehazedImage}
//           alt="Dehazed"
//           className="w-[250px] h-[250px] object-cover rounded-lg shadow-lg"
//         />
//       </div>
//     </div>
//   );
// }

// export default function Page() {
//   return (
//     <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
//       <ResultContent />
//     </Suspense>
//   );
// }

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
