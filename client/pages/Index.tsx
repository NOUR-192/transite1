import { Link } from "react-router-dom";
import { ArrowRight, Anchor, FileCheck, Truck, Package } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Index() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-brand-blue to-blue-600 text-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                25 ans d'expertise pour faire avancer votre logistique.
              </h1>
              <p className="text-lg md:text-xl text-blue-100 mb-8 leading-relaxed">
                Depuis plus de deux décennies, Transit Kolli Samira accompagne les
                entreprises nationales et internationales dans leurs opérations de
                transit et de logistique.
              </p>
              <p className="text-lg text-blue-50 mb-8">
                Notre mission : offrir des solutions rapides, précises et transparentes,
                pour relier les entreprises à leurs objectifs avec fiabilité.
              </p>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-8 py-4 bg-brand-orange hover:bg-orange-600 text-white rounded-lg font-bold transition-all transform hover:scale-105"
              >
                Découvrir nos services
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="hidden lg:flex justify-center items-center">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Ff437020d2595432692b5e23d56de6c22%2F55908aae084540378e8e7097120cdbda?format=webp&width=800"
                alt="Conteneur Transit"
                className="max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nos domaines d'expertise
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-brand-blue to-brand-orange rounded"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Transit International */}
            <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Anchor className="w-6 h-6 text-brand-blue" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Transit international
              </h3>
              <p className="text-gray-600">
                Gestion complète des importations et exportations.
              </p>
            </div>

            {/* Dédouanement */}
            <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <FileCheck className="w-6 h-6 text-brand-orange" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Dédouanement
              </h3>
              <p className="text-gray-600">
                Maîtrise des procédures et conformité assurée.
              </p>
            </div>

            {/* Fret & Transport */}
            <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Truck className="w-6 h-6 text-brand-blue" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Fret & transport
              </h3>
              <p className="text-gray-600">
                Solutions maritimes, aériennes et terrestres.
              </p>
            </div>

            {/* Logistique Intégrée */}
            <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <Package className="w-6 h-6 text-brand-orange" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Logistique intégrée
              </h3>
              <p className="text-gray-600">
                Entreposage, coordination et suivi.
              </p>
            </div>
          </div>

          <div className="flex justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3 border-2 border-brand-orange text-brand-orange hover:bg-orange-50 rounded-lg font-bold transition-all"
            >
              Obtenir un devis
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Key Figures Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nos repères de performance
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-brand-blue to-brand-orange rounded"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Years */}
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-brand-blue mb-4">
                +25
              </div>
              <p className="text-lg text-gray-700 font-semibold">
                ans d'activité continue
              </p>
            </div>

            {/* Locations */}
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-brand-orange mb-4">
                3
              </div>
              <p className="text-lg text-gray-700 font-semibold">
                implantations :<br />
                <span className="text-gray-600 font-normal text-base">
                  El Eulma, Alger, Béjaïa
                </span>
              </p>
            </div>

            {/* Partners */}
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-brand-blue mb-4">
                Partenaires de référence
              </div>
              <p className="text-gray-600">
                Sonatrach • Force Express • Sekceram • Okids
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-100 relative overflow-hidden" style={{ padding: "82px 0" }}>
        <div className="absolute right-0 top-0 bottom-0 hidden lg:block overflow-hidden" style={{ width: "55%" }}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2Ff437020d2595432692b5e23d56de6c22%2F0ab161d92bac43f3b1a19137ac5292c1?format=webp&width=800"
            alt="Logistics and Shipping"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-xl">
            <div className="bg-white rounded-lg p-12" style={{ width: "110%" }}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                Faites confiance à une équipe d'<span className="text-brand-blue">expérience</span>.
              </h2>
              <p className="text-lg md:text-xl text-gray-900 mb-8 leading-relaxed">
                Nos spécialistes sont à votre écoute pour concevoir la solution
                logistique qui répond à vos exigences.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-brand-orange hover:bg-orange-600 text-white rounded-lg font-bold transition-all transform hover:scale-105"
              >
                Nous contacter
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
