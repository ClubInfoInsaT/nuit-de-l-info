import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <div className="mx-auto max-w-screen-xl p-4">
        <Navbar />

        {/* Hero Section with centered title and desription */}
        <section className="py-20">
          <div className="text-center">
            <h1 className="text-4xl font-bold md:text-6xl">Me gusta pollo</h1>
            <p className="mt-4 text-xl text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              quod, voluptate, quia.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex justify-center gap-4">
              <button className="rounded-lg border-2 border-gray-900 px-3 py-2 font-bold hover:bg-gray-200">
                Action 1
              </button>

              <button className="rounded-lg border-2 border-gray-900 bg-gray-900 px-3 py-2 font-bold text-white hover:border-gray-700 hover:bg-gray-700">
                Action 2
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
