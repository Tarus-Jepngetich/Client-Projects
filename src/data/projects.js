import { getProjectMedia } from "./projectMedia";

const bettsMois = getProjectMedia("The Bett's Moi's Bridge Kipsingori Project");
const juliana = getProjectMedia("Juliana's Hazina Estate Kapsoya Project");
const bettsIlula = getProjectMedia("The Bett's Ilula Kapsoya Project");
const bettsKapsoya = getProjectMedia("The Bett's Kapsoya Project");
const chelilim = getProjectMedia("The Chelilim's Hazina Estate Kapsoya Project");
const chumba = getProjectMedia("The Chumba's Hazina Estate Kapsoya Project");
const gitaa = getProjectMedia("The Gitaa's Mois Bridge Kipsingori Project");
const kandie = getProjectMedia("The Kandie's Kapsoya Project");
const lagat = getProjectMedia("The Lagat's Elgon View Project");
const murei = getProjectMedia("The Murei's Tugoin");
const siror = getProjectMedia("The Siror's Mois Bridge Project");
const tarus = getProjectMedia("The Tarus's Kapsoya Project");
const tonui = getProjectMedia("The Tonui's Hazina Estate Kapsoya Project");

export const projects = [
  {
    id: 1,
    name: "THE BETT'S MOI'S BRIDGE KIPSINGORI PROJECT",
    ...bettsMois,
    location: "Moi's Bridge, Kipsingori",
    type: "Luxury Residential Home",
    year: "2025",
    cost: "Available Upon Request",
    challenges:
      "Delivering a high-end residential home while maintaining architectural detail, landscape integration, and quality workmanship.",
    highlights:
      "Expansive grounds, custom roofing design, premium exterior detailing, and strong residential character.",
    outcome:
      "A landmark residential project showcasing BELMAC Construction's commitment to craftsmanship, quality, and timeless design.",
  },
  {
    id: 2,
    name: "JULIANA'S HAZINA ESTATE KAPSOYA PROJECT",
    ...juliana,
    location: "Hazina Estate, Kapsoya",
    type: "Residential Project",
    year: "2025",
    cost: "Available Upon Request",
    challenges: "Site planning, structural coordination, and finish detailing.",
    highlights:
      "A refined residential build designed for comfort, function, and long-term durability.",
    outcome:
      "A carefully executed home project with strong structure, clean finishes, and thoughtful spatial planning.",
  },
  {
    id: 3,
    name: "THE BETT'S ILULA KAPSOYA PROJECT",
    ...bettsIlula,
    location: "Ilula, Kapsoya",
    type: "Residential Project",
    year: "2025",
    cost: "Available Upon Request",
    challenges: "Managing site conditions and maintaining construction precision.",
    highlights:
      "A family-focused home with practical layout and strong structural execution.",
    outcome: "A durable and well-finished residential space built with care.",
  },
  {
    id: 4,
    name: "THE BETT'S KAPSOYA PROJECT",
    ...bettsKapsoya,
    location: "Kapsoya",
    type: "Residential Project",
    year: "2025",
    cost: "Available Upon Request",
    challenges: "Balancing budget, quality, and timeline expectations.",
    highlights:
      "A clean residential build with reliable finishes and strong workmanship.",
    outcome:
      "A complete home project reflecting practical design and quality construction.",
  },
  {
    id: 5,
    name: "THE CHELILIM'S HAZINA ESTATE KAPSOYA PROJECT",
    ...chelilim,
    location: "Hazina Estate, Kapsoya",
    type: "Residential Project",
    year: "2025",
    cost: "Available Upon Request",
    challenges: "Coordinating architectural detail with construction execution.",
    highlights:
      "A thoughtfully crafted home project with emphasis on quality and finish.",
    outcome:
      "A strong residential build shaped around comfort, structure, and lasting value.",
  },
  {
    id: 6,
    name: "THE CHUMBA'S HAZINA ESTATE KAPSOYA PROJECT",
    ...chumba,
    location: "Hazina Estate, Kapsoya",
    type: "Residential Project",
    year: "2025",
    cost: "Available Upon Request",
    challenges: "Coordinating design, site planning, and finishing details.",
    highlights:
      "A spacious home project with strong exterior presence and refined construction detail.",
    outcome:
      "A completed residential project built with attention to comfort, structure, and client needs.",
  },
  {
    id: 7,
    name: "THE GITAA'S MOI'S BRIDGE KIPSINGORI PROJECT",
    ...gitaa,
    location: "Moi's Bridge, Kipsingori",
    type: "Residential Project",
    year: "2025",
    cost: "Available Upon Request",
    challenges: "Site access, material movement, and construction sequencing.",
    highlights:
      "A functional residential build designed with practical family living in mind.",
    outcome:
      "A complete project shaped by careful planning and quality execution.",
  },
  {
    id: 8,
    name: "THE KANDIE'S KAPSOYA PROJECT",
    ...kandie,
    location: "Kapsoya",
    type: "Residential Project",
    year: "2025",
    cost: "Available Upon Request",
    challenges:
      "Coordinating construction phases while maintaining finish quality.",
    highlights:
      "A modern home project with strong structural and visual appeal.",
    outcome: "A well-built home that reflects BELMAC’s attention to detail.",
  },
  {
    id: 9,
    name: "THE LAGAT'S ELGON VIEW PROJECT",
    ...lagat,
    location: "Elgon View",
    type: "Premium Residential Project",
    year: "2025",
    cost: "Available Upon Request",
    challenges:
      "Delivering a high-quality finish within a premium residential setting.",
    highlights:
      "A polished home project in Elgon View with elegant construction details.",
    outcome:
      "A refined residential build with a premium finish and strong design presence.",
  },
  {
    id: 10,
    name: "THE MUREI'S TUGOIN",
    ...murei,
    location: "Tugoin",
    type: "Residential Project",
    year: "2025",
    cost: "Available Upon Request",
    challenges: "Managing site logistics and maintaining construction quality.",
    highlights:
      "A residential project built for durability, comfort, and everyday living.",
    outcome:
      "A complete home project with reliable workmanship and practical design.",
  },
  {
    id: 11,
    name: "THE SIROR'S MOI'S BRIDGE PROJECT",
    ...siror,
    location: "Moi's Bridge",
    type: "Residential Project",
    year: "2025",
    cost: "Available Upon Request",
    challenges: "Balancing site demands with the client’s design requirements.",
    highlights: "A carefully managed residential project with strong execution.",
    outcome:
      "A home project completed with attention to structure, function, and finish.",
  },
  {
    id: 12,
    name: "THE TARUS'S KAPSOYA PROJECT",
    ...tarus,
    location: "Kapsoya",
    type: "Residential Project",
    year: "2025",
    cost: "Available Upon Request",
    challenges: "Coordinating construction details and maintaining project flow.",
    highlights:
      "A quality residential project shaped around comfort and reliable construction.",
    outcome:
      "A well-executed home build with practical planning and clean finishes.",
  },
  {
    id: 13,
    name: "THE TONUI'S HAZINA ESTATE KAPSOYA PROJECT",
    ...tonui,
    location: "Hazina Estate, Kapsoya",
    type: "Residential Project",
    year: "2025",
    cost: "Available Upon Request",
    challenges: "Coordinating design, materials, and finishing details.",
    highlights:
      "A Hazina Estate residential project focused on lasting quality and comfort.",
    outcome:
      "A completed home project with solid workmanship and refined construction detail.",
  },
];