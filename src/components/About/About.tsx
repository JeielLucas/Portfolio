import { Button } from "../Button/Button"

export const About = () =>{
    return(
        <div className="flex flex-col items-center p-5">
            <img
                    src={'/profile.svg'}
                    alt="Foto de perfil"
                    className="
                    w-3xl mt-5
                    sm:max-w-[300px]
                    "
                />
            <div className="flex flex-col items-center gap-5 m-5">
                <h2 className="flex flex-col font-bold text-2xl">
                    Olá, eu sou o <span className="text-3xl">Jeiel Lucas</span>
                </h2>
                <span className="text-[#828282] text-2xl font-light">Desenvolvedor Full Stack</span>
                <div className="flex gap-7">
                    <Button text="Download CV"/>
                    <Button variant="secondary" text="Entrar em contato"/>
                </div>
            </div>


            <div className="flex flex-col items-center">
                <h2 className="font-bold text-2xl">Sobre mim</h2>
                <p>Desenvolvedor Full Stack com experiência prática em aplicações web utilizando React, TypeScript, Spring Boot, PostgreSQL e MongoDB. Possuo vivência em gerenciamento de projetos, boas práticas de desenvolvimento e trabalho em equipe. Apaixonado por resolver desafios de programação e implementar soluções inovadoras com tecnologias modernas. Busco oportunidades para contribuir com projetos escaláveis e de impacto, colaborando com equipes dinâmicas.</p>
            </div>
        </div>
    )
}