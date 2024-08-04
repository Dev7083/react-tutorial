
import './App.css';
import { Cards } from './components/Cards';
function App() {

  return (
    <>
      <main className="">
        <h1 className=' text-black p-4 rounded-xl mb-4 font-Montserrat'>Tailwind Test</h1>
        <section className="xl:padding-l wide:padding-r padding-b flex gap-2 ">

          <Cards />
          <Cards />
          <Cards />
        </section>
      </main>
    </>
  );
}

export default App;
