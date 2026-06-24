import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("");
    setIsSending(true);

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setStatus("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        setStatus(data.message || "Message failed to send.");
      }
    } catch (error) {
      console.error(error);
      setStatus("Could not connect to the backend.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section className="min-h-screen bg-[#f8f6ef] px-6 pt-24 pb-20 flex items-center">
      <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-2 gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-sm tracking-[0.5em] uppercase text-[#c9a646]">
            Contact Belmac
          </p>

          <h1 className="mt-4 text-5xl md:text-6xl font-semibold text-[#111111] leading-tight">
            Let’s build your next great home / Investment.
          </h1>

          <div className="w-20 h-0.5 bg-[#c9a646] mt-6"></div>

          <p className="mt-6 text-[#222222] leading-relaxed text-xl max-w-xl">
            Have a project in mind? Reach out to BELMAC Construction for
            quality workmanship, reliable communication, and homes built with
            care from foundation to finish.
          </p>

          <div className="mt-8 space-y-4">
            <div className="flex items-center gap-4 bg-white rounded-2xl p-5 shadow">
              <Mail className="text-[#c9a646]" />
              <div>
                <p className="font-bold text-[#111111]">Email</p>
                <p className="text-[#222222]">belmaccompanyltd@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-white rounded-2xl p-5 shadow">
              <Phone className="text-[#c9a646]" />
              <div>
                <p className="font-bold text-[#111111]">Phone</p>
                <p className="text-[#222222]">
                  +254 723 472992 / +254 721 205834
                </p>
              </div>
            </div>

            <a
              href="https://wa.me/254723472992"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 bg-[#111111] rounded-2xl p-5 shadow hover:bg-[#c9a646] group"
            >
              <MessageCircle className="text-[#c9a646] group-hover:text-[#111111]" />
              <div>
                <p className="font-bold text-white group-hover:text-[#111111]">
                  WhatsApp
                </p>
                <p className="text-[#f8f6ef] group-hover:text-[#111111]">
                  Chat with us directly
                </p>
              </div>
            </a>

            <div className="flex items-center gap-4 bg-white rounded-2xl p-5 shadow">
              <MapPin className="text-[#c9a646]" />
              <div>
                <p className="font-bold text-[#111111]">Location</p>
                <p className="text-[#222222]">Kenya</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40, rotate: 1 }}
          animate={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-[2rem] shadow-2xl p-8"
        >
          <h2 className="text-4xl font-semibold text-[#111111]">
            Send a Message
          </h2>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <div>
              <label className="block text-base font-semibold text-[#111111] mb-2">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
                className="w-full rounded-2xl border border-[#e8d8a8] bg-[#f8f6ef] px-5 py-4 outline-none focus:border-[#c9a646]"
              />
            </div>

            <div>
              <label className="block text-base font-semibold text-[#111111] mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                required
                className="w-full rounded-2xl border border-[#e8d8a8] bg-[#f8f6ef] px-5 py-4 outline-none focus:border-[#c9a646]"
              />
            </div>

            <div>
              <label className="block text-base font-semibold text-[#111111] mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                placeholder="Tell us about your project..."
                required
                className="w-full rounded-2xl border border-[#e8d8a8] bg-[#f8f6ef] px-5 py-4 outline-none focus:border-[#c9a646] resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSending}
              className="w-full rounded-full bg-[#c9a646] px-8 py-4 text-[#111111] font-bold hover:bg-[#e8d8a8] shadow-xl hover:-translate-y-1 disabled:opacity-60"
            >
              {isSending ? "Sending..." : "Send Message"}
            </button>

            {status && (
              <p className="text-center font-semibold text-[#111111]">
                {status}
              </p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;