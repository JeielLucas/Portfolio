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
            className="relative rounded-lg overflow-hidden group"
            onMouseEnter={() => window.innerHeight >= 768 && setIsHovered(true)}
            onMouseLeave={() => window.innerHeight >= 768 && setIsHovered(false)}
            onClick={() => window.innerHeight < 768 && setIsHovered(!isHovered)}
        >

            <div className={`
                flex flex-col gap-y-5 m-5
                transition-all duration-300
                ${isHovered ? 'opacity-0' : 'opacity-100'}`}
            >
                <h3 className="text-xl text-center">{title}</h3>
                <img className="max-w-md" src={image}/>
                <div className="grid grid-cols-3 gap-4">
                    {stack.map((stack, index) =>(
                        <Tag 
                            tech={stack}
                            index={index}
                        />
                    ))}
                </div>


                
            </div>

            <div className={`
                absolute inset-0
                bg-gray-900/95
                flex flex-col items-center justify-center
                transition-all duration-300
                ${isHovered ? "opacity-100" : "opacity-0 pointer-events-none"}
            `}>
                <p>{description}</p>
                <Button link="#" text="Repositório"/>
            </div>

        </div>
    )
}