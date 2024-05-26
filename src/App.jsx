import Test from './Test';
import './app.scss'
import Navbar from './components/navbar/Navbar';

const App = () => {
  return <div>
    <section><Navbar/></section>
    <section>Parallax</section>
    <section>Sercives</section>
    <section>Parallax</section>
    <section>Portfolio1</section>
    <section>Portfolio2</section>
    <section>Portfolio3</section>
    <section>Contact</section>
    {/* <div><Test/></div>
    <div><Test/></div> */}
  </div>;
};

export default App;
