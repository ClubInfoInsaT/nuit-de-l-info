import GameCard, { Game } from './GameCard';

interface GameSectionProps {
  games: Game[];
}

const GameSection = ({ games }: GameSectionProps) => {
  return (
    <section className="px-8 py-24 md:h-fit" id="games">
      <div className="space-y-2">
        <h1 className="text-xl font-bold md:text-4xl">
          Jeux de sensibilisation
        </h1>
        <p className="text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        {games.map((game, index: number) => (
          <GameCard key={index} game={game} />
        ))}
      </div>
    </section>
  );
};

export default GameSection;
