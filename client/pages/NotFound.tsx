import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <div className="flex-1 flex items-center justify-center py-20">
        <div className="text-center px-4 sm:px-6 lg:px-8">
          <div className="text-8xl md:text-9xl font-bold text-brand-blue mb-4">
            404
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Page non trouvée
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
            Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-brand-orange hover:bg-orange-600 text-white rounded-lg font-bold transition-all transform hover:scale-105"
          >
            <ArrowLeft className="w-5 h-5" />
            Retour à l'accueil
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default NotFound;
