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
    outsideLine?: boolean;
}


export const ProjectCard:React.FC<ProjectCardProps> = ({
    title,
    image,
    stack,
    description,
    repository,
    outsideLine= false
}) =>{

    const [isHovered, setIsHovered] = useState(false);

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
                    ${isHovered ? "opacity-100" : "opacity-0"}
                `}>
                <p className="text-center p-3">{description}</p>
                <Button link="#" text="Repositório"/>
                </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
                {stack.map((stack, index) =>(
                    <Tag tech={stack} key={index}/>
                ))}
            </div>

        </div>
    )
}