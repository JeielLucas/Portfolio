interface ButtonProps{
    text?: string;
    link?: string;
    variant?: "primary" | "secondary";
}

export const Button: React.FC<ButtonProps> = ({
    variant = "primary",
    link,
    text
}) =>{

    const baseStyles = "pl-2 pr-2 rounded-xl text-center";

    const variants = {
        primary: "text-white bg-[#134E4A]",
        secondary: "text-[#5EEAD4] bg-transparent border border-[#8257E6]"
    };

    return(
        <button className={`${baseStyles} ${variants[variant]}`} >
            <a href={link}>
                {text}
            </a>
        </button>
    )
}