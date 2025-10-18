import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-brand-blue to-brand-orange rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">TKS</span>
              </div>
              <h3 className="text-lg font-bold">Transit Kolli Samira</h3>
            </div>
            <p className="text-gray-400 text-sm">
              25 ans d'expertise en transit et logistique internationale.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-brand-orange transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-brand-orange transition-colors">
                  À propos
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-brand-orange transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/expertise" className="text-gray-400 hover:text-brand-orange transition-colors">
                  Expertise
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Transit international</li>
              <li>Dédouanement</li>
              <li>Fret & transport</li>
              <li>Logistique intégrée</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2 text-gray-400">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0 text-brand-orange" />
                <span>El Eulma, Wilaya de Sétif</span>
              </li>
              <li className="flex items-start gap-2 text-gray-400">
                <Phone className="w-4 h-4 mt-1 flex-shrink-0 text-brand-orange" />
                <span>Disponible sur WhatsApp</span>
              </li>
              <li className="flex items-start gap-2 text-gray-400">
                <Mail className="w-4 h-4 mt-1 flex-shrink-0 text-brand-orange" />
                <span>Nous contacter</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Transit Kolli Samira. Tous droits réservés.
            </p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-brand-orange transition-colors">
                LinkedIn
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-orange transition-colors">
                Facebook
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-orange transition-colors">
                Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
