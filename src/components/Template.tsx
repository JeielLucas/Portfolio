'use client'

import Image from "next/image";
import { useState } from "react";
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
        <div className="flex items-center justify-between">
            <button>
               <Image src="/menu.svg" alt="Menu" width={32} height={32}/>
            </button>

            <button className={`w-12 h-6 flex items-center p-1 rounded-xl ${isDarkMode ? "justify-end bg-[#F9F9F9]" : "justify-start bg-[#134E4A]"}`}
            onClick={() => setIsDarkMode(!isDarkMode)}
            >
                <span className="w-4 h-4 bg-black rounded-full"></span>
            </button>
        </div>
    )
}