import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <div className="wrapper">
        <div className="textContainer">
          <h2>Abdulkadir TARTILACI</h2>
          <h1>Web Developer and Designer</h1>
          <div className="buttons">
            <button>See My Projects</button>
            <button>Contact Me</button>
          </div>
          <img src="./scroll.png" alt="" />
        </div>
      </div>

      <div className="imageContainer">
        <img src="/hero2.png" alt="" />
      </div>
    </div>
  );
};

export default Home;
