export type Project = {
  name: string;
  shortDescription: string;
  duration: string;
  teamSize: string;
  completionDate: string;
  techHighlights: string[];
};

export const projects: Projects[] = [
  {
    name: "MarketMon",
    shortDescription: "This is a short description of this project",
    duration: "3 Weeks",
    teamSize: "Independent",
    completionDate: "July 5, 2024",
    techHighlights: [
      "TypeScript",
      "React",
      "Node",
      "Express",
      "PostgreSQL",
      "CSS",
    ],
  },
  {
    name: "Personal Portfolio",
    shortDescription: "This is a short description of this project",
    duration: "3 Weeks",
    teamSize: "Independent",
    completionDate: "July 5, 2024",
    techHighlights: ["JavaScript", "TypeScript", "Next", "CSS", "Rest API"],
  },
  {
    name: "Conbini Corner",
    shortDescription: "This is a short description of this project",
    duration: "2 Weeks",
    teamSize: "Independent",
    completionDate: "July 5, 2024",
    techHighlights: ["JavaScript", "TypeScript", "HTML", "CSS", "Rest API"],
  },
];
