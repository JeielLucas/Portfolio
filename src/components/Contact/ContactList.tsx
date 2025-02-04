import { Contact } from "./Contact"


export const ContactList = () =>{
    return(
        <div className="flex flex-col gap-10">
            <h3 className="text-center font-semibold text-3xl">Contatos</h3>
            <div className="grid grid-cols-2 mt-5 items-center gap-7 sm:grid-cols-3 gap-0 mb-10">
                <Contact
                    type="Email"
                    image="/Email.svg"
                    text="jeiellucas0404@gmail.com"
                    style="col-span-2 grid-cols-subgrid order-1
                    sm:col-span-1 sm:order-2"
                    />
                <Contact 
                    type="GitHub"
                    image="/GitHub.svg"
                    text="@JeielLucas"
                    style="order-2 sm:order-1"
                    />
                <Contact 
                    type="LinkedIn"
                    image="/LinkedIn.svg"
                    text="Jeiel Lucas"
                    style="order-3"
                    />
            </div>
        </div>
    )
}