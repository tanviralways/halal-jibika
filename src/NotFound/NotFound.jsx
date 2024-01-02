import { useNavigate } from "react-router";

const NotFound = () => {
    const navigate = useNavigate();
    const backToHome = ()=>{
navigate("/")
    }
  return (
    <div style={{ textAlign: "center" }}>
      <img
        src="https://cdni.iconscout.com/illustration/premium/thumb/404-error-3702359-3119148.png"
        alt=""
      />
      <button onClick={backToHome}>Back to Home</button>
    </div>
  );
};

export default NotFound;
