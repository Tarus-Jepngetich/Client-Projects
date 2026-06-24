import { useParams } from "react-router-dom";
import { Play } from "lucide-react";
import { ongoingProjects } from "../data/ongoingProjects";

function OngoingProjectDetails() {
  const { id } = useParams();

  const project = ongoingProjects.find(
    (project) => project.id === Number(id)
  );

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Ongoing project not found
      </div>
    );
  }

  return (
    <section className="bg-[#f8f6ef] min-h-screen pt-24 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="relative h-[520px] rounded-[2rem] overflow-hidden shadow-2xl bg-[#111111]">
          <img
            src={project.coverImage}
            alt={project.name}
            className="absolute inset-0 w-full h-full object-cover blur-xl scale-110 opacity-40"
          />

          <img
            src={project.coverImage}
            alt={project.name}
            className="relative z-10 w-full h-full object-contain"
          />

          <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/85 via-black/20 to-transparent"></div>

          <div className="absolute bottom-10 left-10 right-10 z-30">
            <p className="text-sm tracking-[0.4em] uppercase text-[#e8d8a8]">
              Ongoing Project Progress
            </p>

            <h1 className="text-4xl md:text-6xl text-white font-semibold mt-3">
              {project.name}
            </h1>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-4 mt-8">
          <div className="bg-white p-5 rounded-2xl shadow">
            <p className="text-sm text-gray-500">Location</p>
            <p className="font-semibold">{project.location}</p>
          </div>

          <div className="bg-white p-5 rounded-2xl shadow">
            <p className="text-sm text-gray-500">Status</p>
            <p className="font-semibold">{project.status}</p>
          </div>

          <div className="bg-white p-5 rounded-2xl shadow">
            <p className="text-sm text-gray-500">Expected Completion</p>
            <p className="font-semibold">{project.expectedCompletion}</p>
          </div>

          <div className="bg-white p-5 rounded-2xl shadow">
            <p className="text-sm text-gray-500">Media Files</p>
            <p className="font-semibold">{project.media.length}</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mt-16">
          <div>
            <p className="text-sm tracking-[0.4em] uppercase text-[#c9a646]">
              Progress Overview
            </p>

            <h2 className="mt-3 text-4xl md:text-5xl font-semibold text-[#111111]">
              Currently taking shape.
            </h2>
          </div>

          <p className="text-lg leading-relaxed text-[#222222]">
            {project.outcome}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-14">
          <div className="bg-white rounded-[2rem] p-8 shadow">
            <h3 className="text-3xl font-semibold text-[#111111]">
              Current Challenge
            </h3>

            <p className="mt-4 text-[#222222] leading-relaxed">
              {project.challenges}
            </p>
          </div>

          <div className="bg-white rounded-[2rem] p-8 shadow">
            <h3 className="text-3xl font-semibold text-[#111111]">
              Progress Highlights
            </h3>

            <p className="mt-4 text-[#222222] leading-relaxed">
              {project.highlights}
            </p>
          </div>
        </div>

        <div className="mt-16">
          <p className="text-sm tracking-[0.4em] uppercase text-[#c9a646]">
            Progress Gallery
          </p>

          <h2 className="mt-3 text-4xl md:text-5xl font-semibold text-[#111111]">
            Site Media
          </h2>

          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.media.map((item, index) => (
              <div
                key={index}
                className="relative rounded-[1.5rem] overflow-hidden bg-[#111111] shadow-xl h-[320px]"
              >
                {item.type === "image" ? (
                  <>
                    <img
                      src={item.src}
                      alt={project.name}
                      className="absolute inset-0 w-full h-full object-cover blur-xl scale-110 opacity-30"
                    />

                    <img
                      src={item.src}
                      alt={project.name}
                      className="relative z-10 w-full h-full object-contain p-2"
                    />
                  </>
                ) : (
                  <>
                    <video
                      src={item.src}
                      controls
                      className="w-full h-full object-contain bg-black"
                    />

                    <div className="absolute top-4 left-4 bg-[#c9a646] text-[#111111] rounded-full px-4 py-2 flex items-center gap-2 text-sm font-semibold">
                      <Play size={16} />
                      Video
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default OngoingProjectDetails;