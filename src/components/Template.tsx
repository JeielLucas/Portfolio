'use client'

import { useTheme } from "@/context/ThemeContext";
import Image from "next/image";
import { useState } from "react";

interface TemplateProps{
    children?: React.ReactNode;
}

export const Template: React.FC<TemplateProps> = ({children} : TemplateProps) =>{
    return(
        <div className=" flex flex-col gap-32">
           <Header />
            {children}
            
       </div>
    )
}

const Header: React.FC = () =>{
    const { theme, toggleTheme } = useTheme();
    console.log(theme)
    return(
        <div className="border-b-2 border-solid border-[#134E4A] bg-[#13131f] text-[#f9f9f9]">
            <div className="flex items-center justify-between p-7 px-20">
                <ul className="hidden gap-6 text-xl sm:flex md:text-2xl md:gap-14">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#projetos">Projetos</a></li>
                    <li><a href="#contatos">Contato</a></li>
                </ul>
                <button className="block sm:hidden">
                    <Image src="/menu.svg" alt="Menu" width={32} height={32}/>
                </button>

                <button className={`w-16 h-6 flex items-center p-1 rounded-xl transition-all duration-200
                    ${theme === "dark" ? "justify-start bg-[#134E4A]" : "justify-end bg-[#F9F9F9]"}`}
                onClick={() => toggleTheme()}
                >
                    <span className="w-4 h-4 bg-black rounded-full"></span>
                </button>
            </div>
        </div>
        
    )
}