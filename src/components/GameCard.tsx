export type Game = {
  title: string;
  id: number;
  description?: string;
};

interface GameProps {
  game: Game;
}

const GameCard = ({ game }: GameProps) => {
  const { title, id, description } = game;

  const gamePreview = () => {
    return `https://picsum.photos/300/200?random=${id}`;
  };

  return (
    <a href="#" className="group rounded-lg">
      <div className="">
        <img src={gamePreview()} alt="" className="w-full rounded-lg" />
      </div>

      <h1 className="text-lg font-bold group-hover:text-pink-500">{title}</h1>
      <p className="text-sm text-gray-500">{description ?? 'N/A'}</p>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"></div>
    </a>
  );
};

export default GameCard;
