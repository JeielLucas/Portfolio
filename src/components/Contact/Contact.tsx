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
        <a href={link} className={`flex flex-col items-center ${style}`}>
            <img src={image}/>
            <p className="font-semibold text-xl">{type}</p>
            <span className="text-[#828282]">{text}</span>
        </a>
    )
}