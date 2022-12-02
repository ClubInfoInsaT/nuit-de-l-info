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
            className="CROSS-ICON absolute top-4 right-4 rounded-lg p-2 text-gray-900 hover:bg-gray-200 md:hidden"
            onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
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
