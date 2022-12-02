import FAQSection, { FAQ } from './components/FAQSection';
import Footer from './components/Footer';
import { Game } from './components/GameCard';
import GameSection from './components/GameSection';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import UrgenceSection from './components/UrgenceSection';

function App() {
  const games: Game[] = [
    {
      title: 'A serious game',
      description: '',
      id: 1,
    },
    {
      title: 'Save the condom',
      description: '',
      id: 2,
    },
    {
      title: 'Snake',
      description: '',
      id: 3,
    },
    {
      title: 'Qui est-ce ?',
      description: '',
      id: 4,
    },
  ];

  const faqs: FAQ[] = [
    {
      title: 'Qu’est-ce qu’un rapport à risque ?',
      content:
        "C'est un rapport où les partenaires ne se sont pas protégés ou alors lorsque les moyens de protection n'ont pas été efficaces. Mais…les moyens de se protéger contre quoi ???",
    },
    {
      title: 'C’est quoi un cunnilingus ?',
      content:
        'C’est le contact entre une vulve d’une personne et la bouche de quelqu’un d’autre. Attention tout contact quoi doit être consenti !',
    },
    {
      title: "C'est quoi une fellation ?",
      content:
        'C’est le contact entre le pénis d’une personne et la bouche de quelqu’un d’autre. Attention tout contact quoi doit être consenti !',
    },
    {
      title: 'C’est quoi le consentement ?',
      content:
        'C’est le fait que chaque personne d’une relation doit respecter l’autre qu’elle que soit la relation. C’est extrêmement important ! Sinon, c’est une agression sexuelle ou un viol et cela est puni par la loi !',
    },
    {
      title: 'C’est quoi une sodomie ?',
      content:
        'C’est le contact entre le pénis d’une personne et l’anus de quelqu’un d’autre. Attention tout contact quoi doit être consenti !',
    },
    {
      title: 'C’est quoi la contraception ?',
      content:
        'C’est le fait une méthode qui permet de manière transitoire de ne pas avoir d’enfant.',
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

        <UrgenceSection />

        <FAQSection faqs={faqs} />
      </div>

      <Footer />
    </div>
  );
}

export default App;
