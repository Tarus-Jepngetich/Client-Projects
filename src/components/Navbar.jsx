import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Ongoing", path: "/ongoing-projects" },
    { name: "Contact", path: "/contact" },
    { name: "Testimonials", path: "/testimonials" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-4 pt-3">
      <nav className="max-w-6xl mx-auto rounded-full bg-[#111111]/80 backdrop-blur-xl border border-[#c9a646]/20 shadow-xl px-6 py-3 flex items-center">
        
        {/* LOGO */}
        <Link
          to="/"
          className="logo-font text-[#f8f6ef] text-2xl tracking-[0.2em]"
        >
          BELMAC
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-10 ml-auto pr-4">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `text-sm tracking-wide ${
                  isActive
                    ? "text-[#c9a646]"
                    : "text-[#f8f6ef]/80 hover:text-[#e8d8a8]"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-[#f8f6ef] ml-auto"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden max-w-6xl mx-auto mt-3 rounded-3xl bg-[#111111]/95 border border-[#c9a646]/20 p-5">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setOpen(false)}
                className="text-[#f8f6ef] text-base"
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;