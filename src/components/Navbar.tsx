import { Bars3Icon } from './Icons';
import { useState } from 'react'; // import state

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false
  return (
    <nav className="flex items-center justify-between">
      <a href="/" className="text-xl font-bold">
        {/* Brand Name */}
        Sex'info
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
            className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
            onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
          >
            <svg
              className="h-8 w-8 text-gray-600"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </div>
          <div className="flex flex-col gap-2 md:hidden">
            <button className="rounded-lg border-2 border-gray-900 px-3 py-2 font-bold hover:bg-gray-200">
              Action 1
            </button>
            <button className="rounded-lg border-2 border-gray-900 bg-gray-900 px-3 py-2 font-bold text-white hover:border-gray-700 hover:bg-gray-700">
              Action 2
            </button>
          </div>
        </div>
      </section>

      <div className="hidden gap-2 md:flex">
        <button className="rounded-lg border-2 border-gray-900 px-3 py-2 font-bold hover:bg-gray-200">
          Action 1
        </button>
        <button className="rounded-lg border-2 border-gray-900 bg-gray-900 px-3 py-2 font-bold text-white hover:border-gray-700 hover:bg-gray-700">
          Action 2
        </button>
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
