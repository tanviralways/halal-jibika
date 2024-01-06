import { useLoaderData } from "react-router";

const  JobDetails = () => {

  const job = useLoaderData()
  console.log(job);
  return <div>ghkhj</div>;
};

export default JobDetails;
