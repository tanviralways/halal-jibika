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
    <>
      {!jobs ? (
        <div>
          <Audio
            height="80"
            width="80"
            radius="9"
            color="green"
            ariaLabel="three-dots-loading"
            wrapperStyle
            wrapperClass
          />
        </div>
      ) : (
        <div>
          <div className="container">
            {jobs ?.map((job) => (
              <Job key={job.id} job={job} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Jobs;
