import "./job.css";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { FaRegHeart  } from "react-icons/fa";
import { Link } from "react-router-dom";

const Job = ({ job }) => {
  const { id, companyName, description, position, title, logo } = job;

  return (
    <div className="job-card">
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
        <FaRegHeart  background="#FF1493" fontSize="1.8rem" />

        <MdDelete color="red" fontSize="1.9em" cursor="pointer" />

        <button  id="details-btn"> <Link to={`/job/${id}`}>Details</Link> </button>
      </div>
    </div>
  );
};

export default Job;
