'use client'

import Image from "next/image";
import { useState } from "react";
import { Contact } from "./Contact/Contact";
interface TemplateProps{
    children?: React.ReactNode;
}

export const Template: React.FC<TemplateProps> = ({children} : TemplateProps) =>{
    return(
        <div className="bg-[#13131F]">
           <Header />
            {children}
            
       </div>
    )
}

const Header: React.FC = () =>{
    const [isDarkMode, setIsDarkMode] = useState(false);

    return(
        <div className="border-b-2 border-solid border-[#134E4A]">
            <div className="flex items-center justify-between p-7 pr-20 pl-20">
                <ul className="flex text-2xl gap-14">
                    <li>Home</li>
                    <li>Projetos</li>
                    <li>Contato</li>
                </ul>
                <button className="block md:hidden">
                    <Image src="/menu.svg" alt="Menu" width={32} height={32}/>
                </button>

                <button className={`w-16 h-6 flex items-center p-1 rounded-xl transition-all duration-200 ${isDarkMode ? "justify-end bg-[#F9F9F9]" : "justify-start bg-[#134E4A]"}`}
                onClick={() => setIsDarkMode(!isDarkMode)}
                >
                    <span className="w-4 h-4 bg-black rounded-full"></span>
                </button>
            </div>
        </div>
        
    )
}