import { useState } from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        message: "",
      });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-brand-blue to-blue-600 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contactez-nous</h1>
          <p className="text-lg text-blue-100">
            Besoin d'un devis ou d'un accompagnement personnalisé ?
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg text-gray-700 leading-relaxed text-center">
            Notre équipe est disponible pour répondre à toutes vos demandes dans les
            plus brefs délais.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg p-8 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Envoyer votre demande
                </h2>

                {submitted && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-green-800 font-semibold">
                      ✓ Merci ! Votre message a été envoyé avec succès.
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nom / Prénom
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-blue-100"
                        placeholder="Votre nom"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Entreprise
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-blue-100"
                        placeholder="Votre entreprise"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-blue-100"
                        placeholder="votre@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Téléphone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-blue-100"
                        placeholder="+213 XX XXX XXXX"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-blue-100"
                      placeholder="Décrivez votre demande..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-gradient-to-r from-brand-blue to-brand-orange text-white rounded-lg font-bold hover:shadow-lg transition-all transform hover:scale-105"
                  >
                    Envoyer ma demande
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <div className="bg-white rounded-lg p-8 shadow-sm mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  Nos coordonnées
                </h3>

                <div className="space-y-6">
                  {/* Siège */}
                  <div className="flex gap-4">
                    <MapPin className="w-6 h-6 text-brand-orange flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">Siège</p>
                      <p className="text-gray-600 text-sm mt-1">
                        El Eulma, Wilaya de Sétif
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex gap-4">
                    <Phone className="w-6 h-6 text-brand-orange flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">
                        Téléphone / WhatsApp
                      </p>
                      <p className="text-gray-600 text-sm mt-1">
                        À consulter directement
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex gap-4">
                    <Mail className="w-6 h-6 text-brand-orange flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">Email</p>
                      <p className="text-gray-600 text-sm mt-1">
                        À consulter directement
                      </p>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex gap-4">
                    <Clock className="w-6 h-6 text-brand-orange flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">Horaires</p>
                      <p className="text-gray-600 text-sm mt-1">
                        Dimanche – Jeudi
                      </p>
                      <p className="text-gray-600 text-sm">08h30 à 17h00</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Info Box */}
              <div className="bg-gradient-to-br from-blue-50 to-orange-50 rounded-lg p-6 border border-gray-200">
                <p className="text-sm text-gray-700 leading-relaxed">
                  <strong>Réponse rapide :</strong> Nous nous engageons à répondre
                  à vos demandes dans les plus brefs délais.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
