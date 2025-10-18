import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Accueil", href: "/" },
    { label: "À propos", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Expertise", href: "/expertise" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center" style={{ height: "75px" }}>
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="flex items-center gap-2">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Ff437020d2595432692b5e23d56de6c22%2F7d65750871f84f0bab5873be616ff6de?format=webp&width=800"
                alt="Transit Kolli Samira Logo"
                className="rounded-lg"
                style={{ width: "50px", height: "50px" }}
              />
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Ff437020d2595432692b5e23d56de6c22%2F50ed84d36dd443f89010175df1ec25dd?format=webp&width=800"
                alt="Transit Kolli Text Logo"
                className="hidden sm:block"
                style={{ height: "18px" }}
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-gray-700 hover:text-brand-blue transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              to="/contact"
              className="bg-brand-orange text-white hover:bg-orange-600 transition-colors font-medium overflow-hidden"
              style={{ borderRadius: "6px", padding: "9px 24px" }}
            >
              Nous contacter
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="lg:hidden pb-4 border-t border-gray-200">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-brand-blue transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="px-4 py-3">
              <Link
                to="/contact"
                className="block w-full text-center bg-brand-orange text-white hover:bg-orange-600 transition-colors overflow-hidden"
                style={{ borderRadius: "6px", padding: "9px 24px" }}
                onClick={() => setIsOpen(false)}
              >
                Nous contacter
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
