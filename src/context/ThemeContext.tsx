"use client"

import { createContext, useContext, useEffect, useState } from "react";

interface ThemeContextType{
    theme: "dark" | "light";
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({children}: {children: React.ReactNode}) =>{
    const getInitialTheme = (): "light" | "dark" => {
        if (typeof window !== "undefined") {
            return (localStorage.getItem("theme") as "light" | "dark") || "dark";
        }
        return "dark"; // Garantia para SSR
    };

    const [theme, setTheme] = useState<"light" | "dark">("dark");

    useEffect(() =>{
        const storedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
        const themeToApply = storedTheme || "dark";

        document.documentElement.setAttribute("data-theme", themeToApply);
        document.documentElement.classList.remove("light", "dark");
        document.documentElement.classList.add(themeToApply);

        setTheme(themeToApply);
       
    }, []);

    const toggleTheme = () =>{
        
        setTheme((prevTheme) =>{
            const newTheme = prevTheme === "light" ? "dark" : "light";
            localStorage.setItem("theme", newTheme);

            document.documentElement.setAttribute("data-theme", newTheme);
            document.documentElement.classList.remove("light", "dark");
            document.documentElement.classList.add(newTheme);
            
            return newTheme;
        })
    }

    return(
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () =>{
    const context = useContext(ThemeContext);
    if(!context){
        throw new Error("useTheme deve ser usado dentro do ThemeProvider")
    }
    return context;
}