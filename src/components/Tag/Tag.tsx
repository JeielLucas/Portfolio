interface TagProps{
    tech: string;
}

export const Tag: React.FC<TagProps> = (props: TagProps) =>{
    return(
        <span
        className={"pl-2 pr-2 text-white bg-[#134E4A] rounded-xl text-center"} 
        > {props.tech} </span>
    )
}