import { InformationIcon } from './Icons';

const HeroSection = () => {
  return (
    <section className="py-20">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold md:text-6xl">Sex'info</h1>
        <p className="mt-4 text-xl text-gray-600">
          Le serious game qui vous aide à mieux comprendre le sexe.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex justify-center gap-4">
          <button className="rounded-lg border-2 border-gray-900 px-3 py-2 font-bold hover:bg-gray-200">
            <span>Commencer le jeu</span>
          </button>

          <button className="flex gap-1 rounded-lg border-2 border-gray-900 bg-gray-900 px-3 py-2 font-bold text-white hover:border-gray-700 hover:bg-gray-700">
            <InformationIcon />
            <span>Plus d'info</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
