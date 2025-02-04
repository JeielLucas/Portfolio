import { Button } from "../Button/Button"
import { ProjectCard } from "./ProjectCard"


export const ProjectCardList = () => {

    return(
        <div className="flex flex-col">
            <h3 className="text-center font-semibold text-3xl mb-16">Projetos</h3>
            <div className="
            flex flex-col gap-8 p-5 
            sm:grid grid-cols-3
            ">
                <ProjectCard
                    title= "Auth Project"
                    image= "https://solutis.com.br/wp-content/uploads/2020/12/dev-carreira.jpg"
                    stack={["Spring boot", "React", "Docker", "Postgres"]}
                    description= "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nisl nisi, sagittis et turpis non, tristique malesuada tellus. Maecenas laoreet auctor scelerisque. Maecenas dictum viverra ex ac dignissim."
                    repository= "Link"
                />
                <ProjectCard
                    title= "Auth Project"
                    image= "https://solutis.com.br/wp-content/uploads/2020/12/dev-carreira.jpg"
                    stack={["Spring boot", "React", "Docker", "Postgres"]}
                    description= "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nisl nisi, sagittis et turpis non, tristique malesuada tellus. Maecenas laoreet auctor scelerisque. Maecenas dictum viverra ex ac dignissim."
                    repository= "Link"
                />
                <ProjectCard
                    title= "Auth Project"
                    image= "https://solutis.com.br/wp-content/uploads/2020/12/dev-carreira.jpg"
                    stack={["Spring boot", "React", "Docker", "Postgres"]}
                    description= "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nisl nisi, sagittis et turpis non, tristique malesuada tellus. Maecenas laoreet auctor scelerisque. Maecenas dictum viverra ex ac dignissim."
                    repository= "Link"
                />
                <ProjectCard
                    title= "Auth Project"
                    image= "https://solutis.com.br/wp-content/uploads/2020/12/dev-carreira.jpg"
                    stack={["Spring boot", "React", "Docker", "Postgres"]}
                    description= "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nisl nisi, sagittis et turpis non, tristique malesuada tellus. Maecenas laoreet auctor scelerisque. Maecenas dictum viverra ex ac dignissim."
                    repository= "Link"
                />
            </div>
            <div className="flex justify-center py-10">
                <Button 
                text="Ver mais"
                link="#"
                />
            </div>
            
        </div>
    )
}