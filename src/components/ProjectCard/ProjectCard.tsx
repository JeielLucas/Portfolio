'use client'

import { useState } from "react";
import { Button} from "../Button/Button";
import { Tag } from "../Tag/Tag";

interface ProjectCardProps{
    title: string;
    image: string;
    stack: string[];
    description: string;
    repository: string;
    type?: string;
}


export const ProjectCard:React.FC<ProjectCardProps> = ({
    title,
    image,
    stack,
    description,
    repository,
    type
}) =>{

    const [isHovered, setIsHovered] = useState(true);

    return(
        <div
            className="
            flex flex-col relative rounded-lg overflow-hidden group gap-4
            "
            onMouseEnter={() => window.innerHeight >= 768 && setIsHovered(true)}
            onMouseLeave={() => window.innerHeight >= 768 && setIsHovered(false)}
            onClick={() => window.innerHeight < 768 && setIsHovered(!isHovered)}
        >

            <h3 className="text-xl text-center">{title}</h3>
            
            
            <div className="relative">
                <img src={image}/>
                <div className={`
                    absolute inset-0 bg-gray-900/80
                    flex flex-col items-center justify-center
                    transition-all duration-300
                    sm:hidden
                    ${isHovered ? "opacity-100" : "opacity-0"}
                `}>
                    <p className="text-center p-3 text-[#f9f9f9]">{description}</p>
                    <Button link={repository} text="Repositório" type={type}/>
                </div>
            </div>

            <div className="grid grid-cols-3 gap-4 
            md:grid-cols-2 
            xl:grid-cols-3">
                {stack.map((stack, index) =>(
                    <Tag tech={stack} key={index}/>
                ))}
            </div>

        </div>
    )
}