"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/app/utils/cn";
import Link from "next/link";


export default function Navbar({ className }: { className?: string }){
    const [active, setActive] = useState<string | null>(null);
    return(
        <div className={cn("fixed top-5 inset-x-0 max-w-2xl mx-auto z-50", className)}>
            <Menu setActive={setActive}>
                <Link href="/">

                <MenuItem setActive={setActive} active={active} item="Home">
                </MenuItem>
                </Link>

                <MenuItem setActive={setActive} active={active} item="Members">
                    <div className="flex flex-col gap-3">
                         <HoveredLink href="/">Abdul Moiz (B22110106002)</HoveredLink>
                         <HoveredLink href="/">Ghulam MohiuDDin (b22110106023)</HoveredLink>
                         <HoveredLink href="/">M.Arham Khalid (B22110106042)</HoveredLink>
                    </div>
                </MenuItem>

                <Link href="/RESEARCH_PAPER_AI_PROJECT_2025.pdf">
                    <MenuItem setActive={setActive} active={active} item="Manuscript">
                    </MenuItem>
                </Link>
            </Menu>

        </div>
    )
}