import { Link } from "react-router-dom";
import { ArrowRight, Anchor, FileCheck, Truck, Package } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Services() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-brand-blue to-blue-600 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Des solutions logistiques sur mesure.
          </h1>
          <p className="text-lg text-blue-100">
            Nos services couvrent l'ensemble de la chaîne logistique, du transit
            international à la livraison finale.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg text-gray-700 leading-relaxed">
            Chaque prestation repose sur des standards élevés de qualité, de rapidité
            et de fiabilité. Nous nous engageons à transformer vos défis logistiques
            en opportunités de croissance.
          </p>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nos services
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-brand-blue to-brand-orange rounded mb-12"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Transit International */}
            <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Anchor className="w-7 h-7 text-brand-blue" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Transit international
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Gestion complète des opérations d'import/export, avec coordination
                portuaire et suivi documentaire intégral. Nous maîtrisons les procédures
                complexes et assurons une conformité totale avec les réglementations
                internationales.
              </p>
            </div>

            {/* Dédouanement */}
            <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <FileCheck className="w-7 h-7 text-brand-orange" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Dédouanement
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Traitement précis et conforme aux réglementations algériennes et
                internationales, pour un passage fluide et rapide des marchandises.
                Nos experts garantissent la gestion optimale de vos dossiers douaniers.
              </p>
            </div>

            {/* Fret & Transport */}
            <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Truck className="w-7 h-7 text-brand-blue" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Fret & transport
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Solutions de transport maritime, aérien et terrestre, selon les
                priorités de coût, de délai ou de sécurité. Nous optimisons chaque
                expédition pour vos besoins spécifiques.
              </p>
            </div>

            {/* Logistique Intégrée */}
            <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <Package className="w-7 h-7 text-brand-orange" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Logistique intégrée
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Entreposage, conditionnement et livraison : une gestion fluide et
                connectée de bout en bout. Nous coordonnons tous les aspects de la
                chaîne logistique pour vous.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Contactez-nous pour une solution adaptée à vos besoins.
          </h2>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-brand-orange hover:bg-orange-600 text-white rounded-lg font-bold transition-all transform hover:scale-105"
          >
            Demander un devis
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
