import  "./newslater.css"
const Newslater = () => {
  return (
    <div className="newslater">
      <h1>Subcribe to our Newsletter</h1>
      <p>
        Far far away, behind the word mountains, far from the countries Vokalia
        and <br /> Consonantia, there live the blind texts. Separated they live in
      </p>
     <div id="subscribe">
     <input type="email" placeholder="Enter Email Address" />
     <button> Subscribe</button>
     </div>
    </div>
  );
};

export default Newslater;
