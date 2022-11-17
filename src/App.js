import Accordion from './components/Accordions';
import Footer from './components/Footer'
import 'accordion-js/dist/accordion.min.css';


function App() {
  return (
    <div className="App">
      <main>
        <img src='/vdud/assets/images/banner.jpg' alt="banner"/>
        <div>
          <h1>Рекомендации от гостей Дудя</h1>
          <h2>
            Здесь собраны в основном фильмы и книги которые были упомянуты в интервью. Список не полный и будет пополнятся.
          </h2>
        </div>
        <Accordion/>
        </main>
        <Footer/>
    </div>
  );
}

export default App;
