import Image from "next/image"
import { Button } from "../Button/Button"


export const About = () =>{
    return(
        <div>
            <div>
                <h2 className="font-bold">Olá, eu sou o Jeiel Lucas</h2>
                <span className="text-[#828282]">Desenvolvedor Full Stack</span>
                <Button text="Download CV"/>
                <Button variant="secondary" text="Entrar em contato"/>
            </div>

            <div>
                <Image src="image.svg" alt="Foto de perfil" width={50} height={50}/>
            </div>

            <div>
                <h2>Sobre mim</h2>
                <p>Desenvolvedor Full Stack com experiência prática em aplicações web utilizando React, TypeScript, Spring Boot, PostgreSQL e MongoDB. Possuo vivência em gerenciamento de projetos, boas práticas de desenvolvimento e trabalho em equipe. Apaixonado por resolver desafios de programação e implementar soluções inovadoras com tecnologias modernas. Busco oportunidades para contribuir com projetos escaláveis e de impacto, colaborando com equipes dinâmicas.</p>
            </div>
        </div>
    )
}