import { Bars3Icon } from './Icons';
import { useState } from 'react'; // import state

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false
  return (
    <nav className="flex items-center justify-between">
      <a href="/" className="text-xl font-bold">
        {/* Brand Name */}
        <span className="text-pink-500">Sex'</span>info
      </a>

      <section className="MOBILE-MENU flex md:hidden">
        <div
          className="HAMBURGER-ICON space-y-2"
          onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
        >
          {/* Hamburger Menu */}
          <button className="rounded-lg p-2 hover:bg-gray-200 md:hidden">
            <Bars3Icon strokeWidth={2} />
          </button>
        </div>

        <div className={isNavOpen ? 'showMenuNav' : 'hideMenuNav'}>
          <div
            className="CROSS-ICON absolute top-4 right-4 rounded-lg p-2 text-gray-900 hover:bg-gray-200 md:hidden"
            onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
          <div className="flex flex-col gap-2 md:hidden">
            <a href="#games" className="font-bold hover:text-pink-500">
              Jeux
            </a>
            <a href="#games" className="font-bold hover:text-pink-500">
              Urgences
            </a>
            <a
              href="#faqs"
              className="rounded-lg border-2 border-gray-900 bg-gray-900 px-3 py-2 font-bold text-white hover:border-gray-700 hover:bg-gray-700"
            >
              FAQs
            </a>
          </div>
        </div>
      </section>

      <div className="hidden gap-4 md:flex md:items-center">
        <div className="flex gap-2">
          <a href="#games" className="font-bold hover:text-pink-500">
            Jeux
          </a>

          <a href="#games" className="font-bold hover:text-pink-500">
            Urgences
          </a>
        </div>

        <a
          href="#faqs"
          className="rounded-lg border-2 border-gray-900 bg-gray-900 px-3 py-2 font-bold text-white hover:border-gray-700 hover:bg-gray-700"
        >
          FAQs
        </a>
      </div>

      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    </nav>
  );
};

export default Navbar;
