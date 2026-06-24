import { motion } from "framer-motion";
import aboutImage from "../assets/Projects/curated-lifestyle-Tx3bb6AeeUg-unsplash.jpg";

function About() {
  return (
    <main className="bg-[#f8f6ef]">
      <section className="min-h-screen bg-[#f8f6ef] px-6 pt-20 pb-16 flex items-center">
        <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm tracking-[0.5em] uppercase text-[#c9a646]">
              About Belmac
            </p>

            <h1 className="mt-4 text-4xl md:text-5xl font-semibold text-[#111111] leading-tight">
              Building homes with strength, beauty, and purpose.
            </h1>

            <div className="w-20 h-0.5 bg-[#c9a646] mt-6"></div>

            <p className="mt-6 text-[#222222] leading-relaxed text-base">
              BELMAC Construction is committed to creating quality homes and
              spaces that are reliable, modern, and built to last. Every project
              is handled with attention to detail, strong workmanship, and a deep
              respect for the client’s vision.
            </p>

            <div className="mt-6 grid sm:grid-cols-3 gap-4">
              <div className="bg-white rounded-2xl p-4 shadow">
                <h3 className="font-bold text-[#111111] text-lg">Quality</h3>
                <p className="text-sm mt-2 text-[#222222]">
                  Strong finishes and reliable structures.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-4 shadow">
                <h3 className="font-bold text-[#111111] text-lg">Trust</h3>
                <p className="text-sm mt-2 text-[#222222]">
                  Clear communication from start to finish.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-4 shadow">
                <h3 className="font-bold text-[#111111] text-lg">Design</h3>
                <p className="text-sm mt-2 text-[#222222]">
                  Homes that feel modern and personal.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40, rotate: 2 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img
              src={aboutImage}
              alt="Construction team"
              className="rounded-[2rem] shadow-2xl h-[420px] w-full object-cover"
            />

            <div className="absolute -bottom-6 -left-4 bg-[#111111] text-white rounded-3xl p-5 shadow-2xl max-w-xs">
              <p className="text-3xl font-bold text-[#c9a646]">20 +</p>
              <p className="text-[#f8f6ef] mt-1 text-sm">
                Years Building Projects with care
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="max-w-6xl mx-auto bg-white rounded-[2rem] p-8 md:p-12 shadow-2xl">
          <p className="text-sm tracking-[0.5em] uppercase text-[#c9a646]">
            Our Story
          </p>

          <div className="grid lg:grid-cols-2 gap-10 mt-5">
            <h2 className="text-4xl md:text-5xl font-semibold text-[#111111] leading-tight">
              A construction company shaped by experience, trust, and lasting workmanship.
            </h2>

            <div className="space-y-5 text-[#222222] leading-relaxed">
              <p>
                BELMAC Construction was built on the belief that every home should
                carry strength, comfort, and a sense of permanence. Over the years,
                the company has grown through consistent workmanship, client trust,
                and a commitment to delivering projects with care.
              </p>

              <p>
                From residential homes to ongoing developments, every BELMAC project
                is approached with discipline, attention to detail, and respect for
                the people who will live, invest, and build their future within those
                spaces.
              </p>

              <p>
                The goal is simple: to build homes and projects that stand strong,
                look beautiful, and serve families for years to come.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;