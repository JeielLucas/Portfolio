import { Button } from "../Button/Button"

export const About = () =>{
    return(
        <div className="p-5" id="home">
            <div className="flex flex-col items-center md:flex-row-reverse justify-around">
            <img
                    src={'/profile.svg'}
                    alt="Foto de perfil"
                    className="
                    w-3xl
                    md:max-w-[300px]
                    "
                />
            <div className="flex flex-col items-center gap-5 m-5 md:items-start">
                <h2 className="flex flex-col font-bold text-xl sm:text-2xl">
                    Olá, eu sou o <span className="text-2xl sm:text-3xl">Jeiel Lucas</span>
                </h2>
                <span className="text-[#828282] text-2xl font-light text-center md:text-start">Desenvolvedor Full Stack</span>
                <div className="flex gap-7">
                    <Button style={`text-[var(--primary)]`}
                        text="Download CV" 
                        link="/curriculo.pdf" 
                        download
                    />
                    <Button style={`text-[var(--primary)]`}
                        variant="secondary" 
                        text="Entrar em contato" 
                        link="mailto:jeiellucas0404@gmail.com" 
                        type="_blank"
                    />
                </div>
            </div>
            </div>

            <div className="flex flex-col items-center pt-20">
                <h2 className="font-bold text-3xl mb-10">Sobre mim</h2>
                <p className="text-[#828282] text-center max-w-[800px] text-[18px]">Desenvolvedor Full Stack com experiência prática em aplicações web utilizando React, TypeScript, Spring Boot, PostgreSQL e MongoDB. Possuo vivência em gerenciamento de projetos, boas práticas de desenvolvimento e trabalho em equipe. Apaixonado por resolver desafios de programação e implementar soluções inovadoras com tecnologias modernas. Busco oportunidades para contribuir com projetos escaláveis e de impacto, colaborando com equipes dinâmicas.</p>
            </div>
        </div>
    )
}