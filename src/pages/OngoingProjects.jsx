import { ongoingProjects } from "../data/ongoingProjects";
import ProjectCard from "../components/ProjectCard";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function OngoingProjects() {
  const featuredProject = ongoingProjects[0];
  const otherProjects = ongoingProjects.slice(1);

  return (
    <section className="min-h-screen bg-[#f8f6ef] px-6 pt-24 pb-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-sm tracking-[0.5em] uppercase text-[#c9a646]">
            In Progress
          </p>

          <h1 className="mt-4 text-5xl md:text-6xl font-semibold text-[#111111]">
            Ongoing Projects
          </h1>

          <div className="w-20 h-[2px] bg-[#c9a646] mx-auto mt-5"></div>

          <p className="mt-5 max-w-2xl mx-auto text-[#222222] leading-relaxed text-lg">
            A curated look at projects currently being shaped by the BELMAC
            Construction team.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid lg:grid-cols-2 gap-8 items-center mb-20 bg-white rounded-[2rem] p-5 md:p-8 shadow-2xl"
        >
          <div className="relative overflow-hidden rounded-[1.5rem] h-[550px] bg-[#111111]">
            <img
              src={featuredProject.coverImage}
              alt={featuredProject.name}
              className="absolute inset-0 w-full h-full object-cover blur-xl scale-110 opacity-40"
            />

            <img
              src={featuredProject.coverImage}
              alt={featuredProject.name}
              className="relative z-10 w-full h-full object-contain p-3"
            />
          </div>

          <div className="px-2 md:px-6">
            <p className="text-sm tracking-[0.4em] uppercase text-[#c9a646]">
              Featured Ongoing Project
            </p>

            <h2 className="mt-4 text-4xl md:text-5xl font-semibold text-[#111111] leading-tight">
              {featuredProject.name}
            </h2>

            <p className="mt-5 text-[#222222] leading-relaxed text-lg">
              {featuredProject.highlights}
            </p>

            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              <div className="border border-[#e8d8a8] rounded-2xl p-4">
                <p className="text-sm text-[#777]">Location</p>
                <p className="mt-1 font-medium text-[#111111]">
                  {featuredProject.location}
                </p>
              </div>

              <div className="border border-[#e8d8a8] rounded-2xl p-4">
                <p className="text-sm text-[#777]">Status</p>
                <p className="mt-1 font-medium text-[#111111]">
                  {featuredProject.status}
                </p>
              </div>

              <div className="border border-[#e8d8a8] rounded-2xl p-4">
                <p className="text-sm text-[#777]">Expected Completion</p>
                <p className="mt-1 font-medium text-[#111111]">
                  {featuredProject.expectedCompletion}
                </p>
              </div>

              
            </div>

            <Link
              to={`/ongoing-projects/${featuredProject.id}`}
              className="inline-flex mt-8 rounded-full bg-[#111111] text-[#f8f6ef] px-8 py-4 font-semibold hover:bg-[#c9a646] hover:text-[#111111]"
            >
              View Project Progress
            </Link>
          </div>
        </motion.div>

        <div className="mb-10">
          <p className="text-sm tracking-[0.4em] uppercase text-[#c9a646]">
            Active Builds
          </p>

          <h2 className="mt-3 text-4xl md:text-5xl font-semibold text-[#111111]">
            More Ongoing Work
          </h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {otherProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              basePath="/ongoing-projects"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default OngoingProjects;