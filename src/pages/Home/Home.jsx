import { FaEdit, FaRegHeart } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useLoaderData } from "react-router";
import svg from "../../assets/38814296_503566823401613_8014003606732668928_n.jpg";
import "./home.css";
import { Link } from "react-router-dom";

const Home = () => {
  const jobs = useLoaderData();
  console.log(jobs);
  const firstThreeJobs = jobs.slice(0, 5);

  return (
    <div>
      <div className="banner">
        <div>
          <p>
            We have <span>200,000</span> great job offers you deserve!
          </p>
          <h1>
            Largest Job Site In <br /> The World
          </h1>
          <Link to="/signup">
            {" "}
            <button>Explore Now </button>
          </Link>
        </div>
        <div>
          <img src={svg} alt="" />
        </div>
      </div>

      <div className="container">
        {firstThreeJobs.map((job) => {
          const { id, companyName, description, position, title, logo } = job;

          return (
            <div key={id} className="job-card">
              <img src={logo} alt="Company Logo" />
              <div className="job-card-content">
                <div className="job-card-title">{title}</div>
                <div className="job-card-company">{companyName}</div>
                <div className="job-card-position">{position}</div>
                <div className="job-card-description">{description}</div>
              </div>
              <div className="job-card-btn">
                <button id="apply-btn">Apply now</button>
                <FaEdit color="#6c63ff" fontSize="1.8em" cursor="pointer" />
                <FaRegHeart background="#FF1493" fontSize="1.8rem" />
                <MdDelete color="red" fontSize="1.9em" cursor="pointer" />  
                <button id="details-btn">Details</button>
              </div>
            </div>
          );
        })}
      </div>
      <Link id="explore-all-job" to="/jobs">
        <button>Explore All Jobs</button>
      </Link>
    </div>
  );
};

export default Home;
