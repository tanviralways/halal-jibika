import svg from "../../assets/38814296_503566823401613_8014003606732668928_n.jpg";
import "./home.css";
const Home = () => {
  return (
    <div>
      <div className="banner">
        <div>
          <p>We have <span>200,000</span> great job offers you deserve!</p>
          <h1>Largets Job Site In <br /> The World</h1>
          <button>Explore Now</button>
        </div>
        <div>
          <img src={svg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
