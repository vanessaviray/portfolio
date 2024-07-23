export type Project = {
  name: string;
  shortDescription: string;
  duration: string;
  teamSize: string;
  completionDate: string;
  techHighlights: string[];
  url: string;
};

export const projects: Project[] = [
  {
    name: "Conbini Corner",
    shortDescription:
      "A full stack e-commerce site for users who want to purchase snacks and drinks imported from Japan.",
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
    url: "conbini-corner",
  },
  {
    name: "Personal Portfolio",
    shortDescription: "This is a short description of this project",
    duration: "3 Weeks",
    teamSize: "Independent",
    completionDate: "July 5, 2024",
    techHighlights: ["JavaScript", "TypeScript", "Next", "Tailwind"],
    url: "personal-portfolio",
  },
  {
    name: "MarketMon",
    shortDescription:
      "A dynamic web app that allows users to search and view the details of 12,000+ Pokémon cards, create a digital card collection and see its total estimated market value.",
    duration: "2 Weeks",
    teamSize: "Independent",
    completionDate: "July 5, 2024",
    techHighlights: ["JavaScript", "TypeScript", "HTML", "CSS", "Rest API"],
    url: "marketmon",
  },
];
