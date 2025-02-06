import { Contact } from "./Contact"


export const ContactList = () =>{
    return(
        <div className="flex flex-col gap-10" id="contatos">
            <h3 className="text-center font-semibold text-3xl">Contatos</h3>
            <div className="grid grid-cols-2 items-center gap-7 sm:grid-cols-3 mb-10">
                <Contact
                    type="Email"
                    image="/Email.svg"
                    text="jeiellucas0404@gmail.com"
                    style="col-span-2 grid-cols-subgrid order-1
                    sm:col-span-1 sm:order-2"
                    link="mailto:jeiellucas0404@gmail.com"
                    />
                <Contact 
                    type="GitHub"
                    image="/GitHub.svg"
                    text="@JeielLucas"
                    style="order-2 sm:order-1"
                    link="https://github.com/JeielLucas"
                    />
                <Contact 
                    type="LinkedIn"
                    image="/LinkedIn.svg"
                    text="Jeiel Lucas"
                    style="order-3"
                    link="https://www.linkedin.com/in/jeiel-lucas-329799236/"
                    />
            </div>
        </div>
    )
}