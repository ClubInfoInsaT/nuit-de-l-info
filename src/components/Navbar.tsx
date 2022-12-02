import { Bars3Icon } from "./Icons";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between">
      <a href="/" className="text-xl font-bold">
        {/* Brand Name */}
        Sex'info
      </a>
      {/* Actions buttons */}
      <div className="hidden gap-2 md:flex">
        <button className="rounded-lg border-2 border-gray-900 px-3 py-2 font-bold hover:bg-gray-200">
          Action 1
        </button>
        <button className="rounded-lg border-2 border-gray-900 bg-gray-900 px-3 py-2 font-bold text-white hover:border-gray-700 hover:bg-gray-700">
          Action 2
        </button>
      </div>

      {/* Hamburger Menu */}
      <button className="rounded-lg p-2 hover:bg-gray-200 md:hidden">
        <Bars3Icon strokeWidth={2} />
      </button>
    </nav>
  );
};

export default Navbar;
