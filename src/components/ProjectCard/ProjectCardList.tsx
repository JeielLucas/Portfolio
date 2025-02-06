import { Button } from "../Button/Button"
import { ProjectCard } from "./ProjectCard"


export const ProjectCardList = () => {

    return(
        <div className="flex flex-col" id="projetos">
            <h3 className="text-center font-semibold text-3xl mb-10">Projetos</h3>
            <div className="
            flex flex-col gap-8 p-5 
            md:grid md:grid-cols-2
            lg:grid-cols-3
            ">
                <ProjectCard
                    title= "Auth Project"
                    image= "https://solutis.com.br/wp-content/uploads/2020/12/dev-carreira.jpg"
                    stack={["Spring boot", "React", "Docker", "Postgres"]}
                    description= "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nisl nisi, sagittis et turpis non, tristique malesuada tellus. Maecenas laoreet auctor scelerisque. Maecenas dictum viverra ex ac dignissim."
                    repository= "https://github.com/JeielLucas/Auth-Project.git"
                    type="_blank"
                />
                <ProjectCard
                    title= "Auth Project"
                    image= "https://solutis.com.br/wp-content/uploads/2020/12/dev-carreira.jpg"
                    stack={["Spring boot", "React", "Docker", "Postgres"]}
                    description= "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nisl nisi, sagittis et turpis non, tristique malesuada tellus. Maecenas laoreet auctor scelerisque. Maecenas dictum viverra ex ac dignissim."
                    repository= "https://github.com/JeielLucas/Auth-Project.git"
                />
                <ProjectCard
                    title= "Auth Project"
                    image= "https://solutis.com.br/wp-content/uploads/2020/12/dev-carreira.jpg"
                    stack={["Spring boot", "React", "Docker", "Postgres"]}
                    description= "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nisl nisi, sagittis et turpis non, tristique malesuada tellus. Maecenas laoreet auctor scelerisque. Maecenas dictum viverra ex ac dignissim."
                    repository= "https://github.com/JeielLucas/Auth-Project.git"
                />
                <ProjectCard
                    title= "Auth Project"
                    image= "https://solutis.com.br/wp-content/uploads/2020/12/dev-carreira.jpg"
                    stack={["Spring boot", "React", "Docker", "Postgres"]}
                    description= "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nisl nisi, sagittis et turpis non, tristique malesuada tellus. Maecenas laoreet auctor scelerisque. Maecenas dictum viverra ex ac dignissim."
                    repository= "https://github.com/JeielLucas/Auth-Project.git"
                />
            </div>
        </div>
    )
}