"use client";

import {
  createContext,
  useState,
  ReactNode,
  useContext,
  useEffect,
} from "react";
import { Project } from "../data/data";

const ProjectContext = createContext<{
  project: Project | null;
  setProject: (project: Project | null) => void;
  loading: boolean;
} | null>(null);

export function useProject() {
  const context = useContext(ProjectContext);
  if (!context) {
    throw new Error("useProject must be used within a ProjectProvider");
  }
  return context;
}

export const ProjectProvider = ({ children }: { children: ReactNode }) => {
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const storedProject = localStorage.getItem("project");
    if (storedProject) {
      setProject(JSON.parse(storedProject));
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    if (project) {
      localStorage.setItem("project", JSON.stringify(project));
    } else {
      localStorage.removeItem("project");
    }
  }, [project]);

  return (
    <ProjectContext.Provider value={{ project, setProject, loading }}>
      {children}
    </ProjectContext.Provider>
  );
};
