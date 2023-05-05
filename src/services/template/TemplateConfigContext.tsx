import { createContext, useContext } from "react";
import type { iTemplateConfig } from "./TemplateConfig";

const TemplateConfigContext = createContext<iTemplateConfig>({})

interface TemplateConfigProviderProps {
    children: React.ReactNode;
    value: iTemplateConfig
}

export function TemplateConfigProvider({value, children}: TemplateConfigProviderProps){
    return (
        <TemplateConfigContext.Provider value={value}>
            {children}
        </TemplateConfigContext.Provider>
    )
}

export const useTemplateConfig = () => useContext(TemplateConfigContext)