import { useLoaderData } from "react-router";
import Job from "../Job/Job";
import "./jobs.css";
//import { useState } from "react";
//import { Audio } from "react-loader-spinner";

const Jobs = () => {
  // const [loader, setLoader] = useState(true);
  const jobs = useLoaderData();
  // setTimeout(() => {
  //   setLoader(false);
  // }, 5000);
  console.log(jobs);
  return (
    <div>
      <div className="container">
        {jobs && jobs.map((job) => <Job key={job.id} job={job} />)}
      </div>
    </div>
  );
};

export default Jobs;
