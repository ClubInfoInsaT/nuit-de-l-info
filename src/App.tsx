import Footer from './components/Footer';
import { Game } from './components/GameCard';
import GameSection from './components/GameSection';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';

function App() {
  const games: Game[] = [
    {
      title: 'A serious game',
      id: 1,
    },
    {
      title: 'Save the condom',
      id: 2,
    },
    {
      title: 'Snake',
      id: 3,
    },
    {
      title: 'Qui est-ce ?',
      id: 4,
    },
  ];
  return (
    <div className="App">
      <div className="mx-auto mb-10 max-w-screen-xl p-4">
        <Navbar />

        <HeroSection />

        <div className="mx-auto h-96 w-3/4 rounded-lg border-2 border-gray-900 md:h-[500px] md:w-1/2">
          <img
            className="h-full w-full rounded-lg object-cover"
            alt=""
            src="https://cdn.dribbble.com/users/6713540/screenshots/19844445/media/239aeff7d90cb998891307308bdee256.gif"
          />
          {/* Caption */}
          <p className="text-center">
            <span className="font-bold">Kiss you!</span> by{' '}
            <a
              href="https://dribbble.com/ElinaKrasilnikova"
              className="underline"
            >
              Elina Krasilnikova
            </a>
          </p>
        </div>

        <GameSection games={games} />
      </div>

      <Footer />
    </div>
  );
}

export default App;
