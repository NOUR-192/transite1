import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Expertise() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-brand-blue to-blue-600 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            25 ans d'excellence et de confiance.
          </h1>
          <p className="text-lg text-blue-100">
            Une expertise reconnue auprès des plus grands acteurs de l'industrie
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Notre expérience nous a permis de développer une expertise reconnue auprès
            de grands acteurs de l'industrie, du commerce et de l'énergie.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Chaque opération est menée avec une exigence constante de performance et
            de fiabilité. Nos équipes maîtrisent les procédures complexes et offrent
            des solutions adaptées aux enjeux spécifiques de chaque secteur.
          </p>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Partenaires & Références
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-brand-blue to-brand-orange rounded mb-12"></div>

          <div className="bg-white rounded-lg p-8 md:p-12 shadow-sm mb-8">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Ils nous ont fait confiance pour la gestion de leurs flux logistiques :
            </p>
            <div className="flex flex-wrap gap-4 md:gap-6 items-center justify-center">
              {["Sonatrach", "Force Express", "Sekceram", "Okids"].map(
                (partner) => (
                  <div key={partner} className="text-center">
                    <div className="px-6 py-3 bg-gradient-to-r from-blue-50 to-orange-50 rounded-lg border border-gray-200">
                      <p className="font-semibold text-gray-900">{partner}</p>
                    </div>
                  </div>
                )
              )}
            </div>
            <p className="text-center text-gray-600 mt-8 text-sm">
              Des collaborations qui témoignent de la solidité de notre réseau et de
              notre professionnalisme.
            </p>
          </div>
        </div>
      </section>

      {/* Commitments Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nos engagements
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-brand-blue to-brand-orange rounded mb-12"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              "Respect des délais et des normes internationales",
              "Accompagnement sur mesure",
              "Suivi transparent à chaque étape",
              "Sécurité et fiabilité des opérations",
            ].map((commitment, index) => (
              <div key={index} className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-brand-orange flex-shrink-0 mt-1" />
                <div>
                  <p className="text-lg font-semibold text-gray-900">
                    {commitment}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-brand-blue to-blue-600 text-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Faites appel à notre expertise
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            Bénéficiez de 25 ans d'expérience et de professionnalisme.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-brand-orange hover:bg-orange-600 text-white rounded-lg font-bold transition-all transform hover:scale-105"
          >
            Nous contacter
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
