import { motion } from "framer-motion";

function Testimonials() {
  const testimonials = [
    {
      name: "Juliana",
      project: "Hazina Estate Kapsoya Project",
      quote:
        "BELMAC handled the project with care, professionalism, and attention to detail from start to finish.",
    },
    {
      name: "The Bett Family",
      project: "Moi's Bridge Kipsingori Project",
      quote:
        "The workmanship, coordination, and final result reflected quality and commitment.",
    },
    {
      name: "The Lagat Family",
      project: "Elgon View Project",
      quote:
        "BELMAC delivered a beautiful home with excellent finishing and strong construction quality.",
    },
  ];

  return (
    <section className="min-h-screen bg-[#f8f6ef] px-6 pt-24 pb-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.5em] uppercase text-[#c9a646]">
            Client Words
          </p>

          <h1 className="mt-4 text-5xl md:text-6xl font-semibold text-[#111111]">
            Testimonials
          </h1>

          <div className="w-20 h-0.5 bg-[#c9a646] mx-auto mt-5"></div>

          <p className="mt-5 max-w-2xl mx-auto text-[#222222] text-lg leading-relaxed">
            A few words from clients whose homes and projects were built with
            BELMAC Construction.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              className="bg-white rounded-[2rem] p-8 shadow-2xl"
            >
              <p className="text-6xl text-[#c9a646] leading-none">“</p>

              <p className="mt-4 text-[#222222] leading-relaxed text-lg">
                {item.quote}
              </p>

              <div className="mt-8 pt-6 border-t border-[#e8d8a8]">
                <h3 className="text-2xl font-semibold text-[#111111]">
                  {item.name}
                </h3>

                <p className="mt-1 text-[#777]">{item.project}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;