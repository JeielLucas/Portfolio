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
            <div className="flex grid grid-cols-2 mt-5 gap-7">
                <Contact 
                    type="Email"
                    image="/Email.svg"
                    text="jeiellucas0404@gmail.com"
                    style="col-span-2 grid-cols-subgrid"
                />
                <Contact 
                    type="GitHub"
                    image="/GitHub.svg"
                    text="@JeielLucas"
                />
                 <Contact 
                    type="LinkedIn"
                    image="/LinkedIn.svg"
                    text="Jeiel Lucas"
                />
            </div>
       </div>
    )
}

const Header: React.FC = () =>{
    const [isDarkMode, setIsDarkMode] = useState(false);

    return(
        <div className="border-b-2 border-solid border-[#134E4A]">
            <div className="flex items-center justify-between p-3">
                <button>
                <Image src="/menu.svg" alt="Menu" width={32} height={32}/>
                </button>

                <button className={`w-12 h-6 flex items-center p-1 rounded-xl transition-all duration-200 ${isDarkMode ? "justify-end bg-[#F9F9F9]" : "justify-start bg-[#134E4A]"}`}
                onClick={() => setIsDarkMode(!isDarkMode)}
                >
                    <span className="w-4 h-4 bg-black rounded-full"></span>
                </button>
            </div>
        </div>
        
    )
}