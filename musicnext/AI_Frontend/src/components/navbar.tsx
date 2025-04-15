"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem} from "./ui/navbar-menu";
import { cn } from "@/app/utils/cn";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from 'next/navigation';


export default function Navbar({ className }: { className?: string }){
    const [active, setActive] = useState<string | null>(null);
    const router = useRouter();

    const goHome = (e : any) => {
        e.preventDefault();
      
        if (window.location.pathname === "/") {
          window.dispatchEvent(new Event("routeChangeStart"));
          window.scrollTo({ top: 0, behavior: "smooth" });
          return;
        }
      
        window.dispatchEvent(new Event("routeChangeStart"));
      
        setTimeout(() => {
          router.push("/");
        }, 1000);
      };
      
      

    return(
        <div className={cn("fixed top-5 inset-x-0 max-w-2xl mx-auto z-50", className)}>
            <Menu setActive={setActive}>
                <Link href="/" onClick={goHome}>

                <MenuItem setActive={setActive} active={active} item="Home">
                </MenuItem>
                </Link>

                <MenuItem setActive={setActive} active={active} item="Collaborators">

                <div className="flex items-center gap-3 mb-2">
                    <HoveredLink href="/" className="w-[200px] text-left">
                    Course In-Charge : Dr. Humaira Bashir
                    </HoveredLink>
                </div>

                <div className="flex flex-col gap-3">

                <div className="flex items-center gap-3">
                    <HoveredLink href="/" className="w-[200px] text-left">
                        Ghulam Mohiuddin (B22110106023)
                    </HoveredLink>
                    <div className="w-8 h-8 rounded-full overflow-hidden">
                        <Image 
                            src="/muhiu.jpg" 
                            alt="mohiuddin" 
                            width={30} 
                            height={30} 
                            className="object-cover"
                        />
                    </div>
                </div>


                <div className="flex items-center gap-3">
                    <HoveredLink href="/" className="w-[200px] text-left">
                        Abdul Moiz (B22110106002)
                    </HoveredLink>
                    <div className="w-8 h-8 rounded-full overflow-hidden">
                        <Image 
                            src="/moiz.png" 
                            alt="moiz" 
                            width={30} 
                            height={30} 
                            className="object-cover"
                        />
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <HoveredLink href="/" className="w-[200px] text-left">
                        Arham Khalid (B22110106042)
                    </HoveredLink>
                    <div className="w-8 h-8 rounded-full overflow-hidden">
                        <Image 
                            src="/arham.png" 
                            alt="arham" 
                            width={30} 
                            height={30} 
                            className="object-cover"
                        />
                    </div>
                </div>

    </div>
            </MenuItem>


                <Link href="/RESEARCH_PAPER_AI_PROJECT_2025.pdf">
                    <MenuItem setActive={setActive} active={active} item="Research Paper">
                    </MenuItem>
                </Link>

            </Menu>



        </div>
    )
}