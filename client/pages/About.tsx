import { Link } from "react-router-dom";
import { ArrowRight, Target, Eye, Heart } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-brand-blue to-blue-600 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Une entreprise bâtie sur la confiance et la précision.
          </h1>
          <p className="text-lg text-blue-100">
            Plus de 25 ans d'expertise au service de la logistique internationale
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Fondée il y a plus de 25 ans, Transit Kolli Samira est aujourd'hui une
            référence dans le transit international et la logistique en Algérie.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Notre force réside dans l'alliance entre une expérience solide et une
            vision moderne, adaptée aux enjeux du commerce mondial.
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Vision & Mission
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-brand-blue to-brand-orange rounded mb-12"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Vision */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Eye className="w-8 h-8 text-brand-blue" />
                <h3 className="text-2xl font-bold text-gray-900">Vision</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Devenir la référence moderne et fiable du transit en Algérie,
                symbole d'excellence opérationnelle.
              </p>
            </div>

            {/* Mission */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-8 h-8 text-brand-orange" />
                <h3 className="text-2xl font-bold text-gray-900">Mission</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Simplifier et sécuriser chaque étape du transport de marchandises,
                en garantissant rapidité, conformité et transparence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nos valeurs
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-brand-blue to-brand-orange rounded mb-12"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-8">
              <h3 className="text-lg font-bold text-brand-blue mb-3">
                Vitesse & Fluidité
              </h3>
              <p className="text-gray-700">
                Optimiser chaque étape pour un acheminement sans friction.
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-8">
              <h3 className="text-lg font-bold text-brand-orange mb-3">
                Leadership & Direction
              </h3>
              <p className="text-gray-700">
                Guider nos clients avec expertise et vision stratégique.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-8">
              <h3 className="text-lg font-bold text-brand-blue mb-3">
                Précision & Contrôle
              </h3>
              <p className="text-gray-700">
                Garantir la fiabilité grâce à une gestion rigoureuse.
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-8">
              <h3 className="text-lg font-bold text-brand-orange mb-3">
                Connectivité & Réseau
              </h3>
              <p className="text-gray-700">
                S'appuyer sur un réseau solide pour une couverture mondiale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Notre présence nationale
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-brand-blue to-brand-orange rounded mb-12"></div>

          <div className="bg-white rounded-lg p-8 md:p-12 shadow-sm">
            <p className="text-lg text-gray-700 leading-relaxed">
              Situé à El Eulma (Sétif), notre siège principal reflète notre approche :
              moderne, organisée et tournée vers la performance. Deux annexes, à Alger
              et Béjaïa, renforcent notre présence nationale et la proximité avec nos
              partenaires.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-brand-blue to-blue-600 text-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Découvrez nos services
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            Explorez comment nous pouvons accompagner votre entreprise.
          </p>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-8 py-4 bg-brand-orange hover:bg-orange-600 text-white rounded-lg font-bold transition-all transform hover:scale-105"
          >
            Nos services
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
