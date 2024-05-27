import Test from './Test';
import './app.scss'
import Navbar from './components/navbar/Navbar';

const App = () => {
  return <div>
    <section id='Homepage'><Navbar/></section>
    <section id='Services'>Parallax</section>
    <section>Sercives</section>
    <section id='Portfolio'>Parallax</section>
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
