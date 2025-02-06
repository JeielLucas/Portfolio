interface ButtonProps{
    text?: string;
    link?: string;
    variant?: "primary" | "secondary";
    download?: boolean;
    type?: string;
    style?: string;
}

export const Button: React.FC<ButtonProps> = ({
    variant = "primary",
    link,
    text,
    download,
    type,
    style = "text-[var(--primary)]"
}) =>{

    const baseStyles = "px-2 rounded-xl text-center";

    const variants = {
        primary: "text-white bg-[#134E4A]",
        secondary: "text-[#5EEAD4] bg-transparent border border-[#8257E6]"
    };

    return(
        <button className={`${baseStyles} ${variants[variant]} ${style}`} >
            <a href={link} {...(download ? { download: true} : {})} target={type}>
                {text}
            </a>
        </button>
    )
}