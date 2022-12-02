import GameCard, { Game } from './GameCard';

interface GameSectionProps {
  games: Game[];
}

const GameSection = ({ games }: GameSectionProps) => {
  return (
    <section className="h-fit px-8 py-24 md:h-screen" id="games">
      <div className="space-y-2">
        <h1 className="text-xl font-bold md:text-4xl">
          Jeux de <span className="text-pink-400">sensibilisation</span>
        </h1>
        <p className="text-lg text-gray-400">
          Un ensemble de jeux ludiques pour s'informer sur la sexualité et la
          santé sexuelle.
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
        {games.map((game, index: number) => (
          <GameCard key={index} game={game} />
        ))}
      </div>
    </section>
  );
};

export default GameSection;
