interface TagProps{
    tech: string;
}

export const Tag: React.FC<TagProps> = (props: TagProps) =>{
    return(
        <span
        className={"text-white bg-[#134E4A] rounded-xl text-center flex justify-center items-center"} 
        > {props.tech} </span>
    )
}