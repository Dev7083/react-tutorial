
import './App.css';
import { Cards } from './components/Cards';
function App() {

  return (
    <>
      <main className="">
        <h1 className=' text-black p-4 rounded-xl mb-4 font-Montserrat'>React Props</h1>
        <section className="xl:padding-l wide:padding-r padding-b flex gap-2 ">

          <Cards productName="Macbook Air" content="Entry level Laptop" />
          <Cards productName="Macbook Air M2" content="LAptop with M2 Chip" />
          <Cards productName="Macbook Pro" content="Laptop for professionals" />
        </section>
      </main>
    </>
  );
}

export default App;
