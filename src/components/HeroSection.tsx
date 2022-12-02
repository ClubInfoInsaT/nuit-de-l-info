import { InformationIcon, PuzzleIcon } from './Icons';

const HeroSection = () => {
  return (
    <section className="py-20">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold md:text-6xl">
          <span className="text-pink-400">Sex'</span>info
        </h1>
        <p className="mt-4 text-xl text-gray-600">
          Le serious game qui vous aide à mieux comprendre les enjeux sur la
          sexualité.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex justify-center gap-4">
          <a
            href="#games"
            className="flex gap-1 rounded-lg border-2 border-gray-900 bg-pink-200 px-3 py-2 font-bold hover:bg-pink-300"
          >
            <PuzzleIcon />
            <span>Voir les jeux</span>
          </a>

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
