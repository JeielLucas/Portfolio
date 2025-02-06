interface ContactProps{
    image: string;
    type: string;
    text: string;
    link?: string;
    style?: string;
}

export const Contact: React.FC<ContactProps> = ({
    image,
    type,
    text,
    link,
    style
}) =>{
    return(
        <a href={link} target="_blank" className={`flex flex-col gap-3 items-center ${style}`}>
            <img src={image} className="w-15 h-15"/>
            <p className="font-semibold text-xl">{type}</p>
            <span className="text-[#828282]">{text}</span>
        </a>
    )
}