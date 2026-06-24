import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Hammer, Building2, ClipboardCheck, Paintbrush } from "lucide-react";

function Home() {
  const stats = [
    { number: "20+", label: "Years Experience" },
    { number: "14+", label: "Completed Projects" },
    { number: "2", label: "Ongoing Projects" },
    { number: "100%", label: "Client Focused" },
  ];

  const services = [
    {
      icon: <Building2 />,
      title: "Residential Construction",
      text: "Quality homes built with structure, care, and long-term durability.",
    },
    {
      icon: <Hammer />,
      title: "Renovations & Extensions",
      text: "Improving existing spaces with strong workmanship and thoughtful finishes.",
    },
    {
      icon: <ClipboardCheck />,
      title: "Project Management",
      text: "Clear coordination from planning to execution and final delivery.",
    },
    {
      icon: <Paintbrush />,
      title: "Interior & Exterior Finishes",
      text: "Clean finishing details that complete the beauty of every build.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#f8f6ef]">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#111111]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
            alt="Modern construction house"
            className="h-full w-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-black/65" />
        </div>

        <motion.div
          animate={{ y: [0, -25, 0], rotate: [0, 8, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute left-10 top-25 hidden lg:block h-40 w-40 rounded-2xl bg-white/10 border border-[#c9a646]/30 backdrop-blur-md shadow-2xl"
        />

        <motion.div
          animate={{ y: [0, 30, 0], rotate: [0, -10, 0] }}
          transition={{ duration: 7, repeat: Infinity }}
          className="absolute right-12 bottom-20 hidden lg:block h-40 w-40 rounded-2xl bg-[#c9a646]/15 border border-[#c9a646]/30 backdrop-blur-md shadow-2xl"
        />

        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center px-6"
        >
          <p className="mb-4 text-base md:text-lg tracking-[0.45em] uppercase text-[#e8d8a8]">
            Trusted Builders
          </p>

          <h1 className="text-5xl md:text-7xl lg:text-[5rem] font-bold text-white tracking-wide drop-shadow-2xl">
            BELMAC CONSTRUCTION
          </h1>

          <p className="mt-6 text-xl md:text-3xl text-[#f8f6ef]">
            We build great homes.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/projects"
              className="flex items-center justify-center px-10 py-5 text-lg rounded-full bg-[#c9a646] text-[#111111] font-semibold hover:bg-[#e8d8a8] shadow-xl hover:-translate-y-1"
            >
              View Projects
            </Link>

            <Link
              to="/contact"
              className="flex items-center justify-center px-8 py-4 text-base rounded-full bg-[#f8f6ef]/90 text-[#111111] font-semibold hover:bg-white shadow-xl hover:-translate-y-1"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      </section>

      <section className="px-6 py-20 bg-[#f8f6ef]">
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-white rounded-[2rem] p-8 text-center shadow">
              <h2 className="text-5xl font-semibold text-[#c9a646]">
                {stat.number}
              </h2>
              <p className="mt-3 text-[#222222]">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 pb-24 bg-[#f8f6ef]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-sm tracking-[0.5em] uppercase text-[#c9a646]">
              What We Do
            </p>

            <h2 className="mt-4 text-5xl md:text-6xl font-semibold text-[#111111]">
              Our Services
            </h2>

            <div className="w-20 h-0.5 bg-[#c9a646] mx-auto mt-5"></div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <motion.div
                key={service.title}
                whileHover={{ y: -10 }}
                className="bg-white rounded-[2rem] p-7 shadow-xl"
              >
                <div className="h-12 w-12 rounded-full bg-[#c9a646]/20 text-[#c9a646] flex items-center justify-center">
                  {service.icon}
                </div>

                <h3 className="mt-6 text-2xl font-semibold text-[#111111]">
                  {service.title}
                </h3>

                <p className="mt-3 text-[#222222] leading-relaxed">
                  {service.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;