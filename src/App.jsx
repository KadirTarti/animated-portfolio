import Test from './Test';
import './app.scss'
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import Parallax from './components/parallax/Parallax';

const App = () => {
  return <div>
    <section id='Homepage'>
    <Navbar/>
    <Home/>
    </section>
    <section id='Services'><Parallax type='services'/></section>
    <section>Sercives</section>
    <section id='Portfolio'><Parallax type='portfolio'/></section>
    <section>Portfolio1</section>
    <section>Portfolio2</section>
    <section>Portfolio3</section>
    <section id='Contact'>Contact</section>
    <section id='About'>About</section>
    {/* <div><Test/></div>
    <div><Test/></div> */}
  </div>;
};

export default App;
