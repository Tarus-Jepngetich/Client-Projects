import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function ProjectCard({ project, basePath = "/projects" }) {
  const navigate = useNavigate();

  return (
    <motion.div
      onClick={() => navigate(`${basePath}/${project.id}`)}
      whileHover={{ y: -10 }}
      transition={{ type: "spring", stiffness: 150 }}
      className="group relative h-[360px] overflow-hidden rounded-[2rem] shadow-xl cursor-pointer bg-[#111111]"
    >
      <img
        src={project.coverImage}
        alt={project.name}
        className="absolute inset-0 w-full h-full object-cover blur-xl scale-110 opacity-40"
      />

      <img
        src={project.coverImage}
        alt={project.name}
        className="relative z-10 w-full h-full object-contain p-3"
      />

      <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>

      <div className="absolute bottom-0 left-0 right-0 z-30 p-6">
        <p className="text-xs tracking-[0.4em] uppercase text-[#e8d8a8]">
          {project.type || project.status}
        </p>

        <h2 className="mt-3 text-2xl md:text-3xl text-white font-semibold leading-tight">
          {project.name}
        </h2>

        <p className="mt-3 text-[#f8f6ef] opacity-0 group-hover:opacity-100">
          View Project →
        </p>
      </div>
    </motion.div>
  );
}

export default ProjectCard;