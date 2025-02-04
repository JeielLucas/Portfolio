import { About } from "@/components/About/About";
import { ProjectCard } from "@/components/ProjectCard/ProjectCard";
import { Template } from "@/components/Template";

export default function Home() {
  return (
    <Template>
      <About />
      <ProjectCard
        title= "Auth Project"
        image= "https://solutis.com.br/wp-content/uploads/2020/12/dev-carreira.jpg"
        stack={["Spring boot", "React", "Docker", "Postgres"]}
        description= "Description"
        repository= "Link"
        />
    </Template>
   
  );
}
