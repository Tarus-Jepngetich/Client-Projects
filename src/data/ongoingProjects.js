import { getProjectMedia } from "./projectMedia";

const bunei = getProjectMedia("The Bunei's Elgon View Project");
const malaika = getProjectMedia("Malaika Court Project");

export const ongoingProjects = [
  {
    id: 1,
    name: "THE BUNEI'S ELGON VIEW PROJECT",
    ...bunei,
    location: "Elgon View",
    type: "Residential Project",
    status: "Ongoing",
    expectedCompletion: "To Be Updated",
    year: "2026",
    cost: "Available Upon Request",
    challenges:
      "Managing an active construction site while maintaining progress, safety, and quality control.",
    highlights:
      "A premium Elgon View build currently taking shape with strong structure and refined design direction.",
    outcome:
      "An ongoing project that reflects BELMAC Construction’s commitment to careful execution from foundation to finish.",
  },
  {
    id: 2,
    name: "MALAIKA COURT PROJECT",
    ...malaika,
    location: "Malaika Court",
    type: "Residential Court Project",
    status: "Under Construction",
    expectedCompletion: "2026",
    year: "2026",
    cost: "Available Upon Request",
    challenges:
      "Coordinating a multi-level development while maintaining site safety and construction progress.",
    highlights:
      "Large-scale structure, modern planning, and strong visual presence.",
    outcome:
      "A residential court project currently developing into a polished and functional build.",
  },
];