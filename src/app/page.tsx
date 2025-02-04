import { About } from "@/components/About/About";
import { ContactList } from "@/components/Contact/ContactList";
import { ProjectCardList } from "@/components/ProjectCard/ProjectCardList";
import { Template } from "@/components/Template";

export default function Home() {
  return (
    <Template>
      <About />
      <ProjectCardList />
        <ContactList />
    </Template>
   
  );
}
