
import React, { FC, useState } from "react";
import { Project } from "../Classes/Project";

export const ProjectContext = React.createContext({});

export type ProviderProp = {
    children: React.ReactNode
}

export type ProjectContextValue = {
    projects: Project[],
    setProjects: React.Dispatch<Project[]>
}

export const ProjectProvider: FC<ProviderProp> = ({children}) => {
    
    
    const [projects, setProjects] = useState<Project[]>([]);
    
    const contextValue: ProjectContextValue = {
        projects: projects,
        setProjects: setProjects
    }
    
    return (
        <ProjectContext.Provider value={contextValue}>{children}</ProjectContext.Provider>
    )
}