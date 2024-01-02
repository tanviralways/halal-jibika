import svg from "../../assets/38814296_503566823401613_8014003606732668928_n.jpg";
import Newslater from "../Newslater/Newslater";
import "./about.css";
const About = () => {
  return (
    <div>
      <div className="about">
        <div>
          <img src={svg} alt="" />
        </div>
        <div>
          <h1>Welcome to Halal Jobs</h1>
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they <br />
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean. <br />  <br />On her way she met a copy. The copy warned the
            Little Blind Text, that where it came from it would have been
            rewritten a thousand <br /> times and everything that was left from its
            origin would be the word and and the Little Blind Text should turn
            around and return to <br /> its own, safe country. But nothing the copy
            said could convince her and so it didn’t take long until a few
            insidious Copy Writers <br /> ambushed her, made her drunk with Longe and
            Parole and dragged her into their agency, where they abused her for
            their.
          </p>
        </div>
      </div>
     <div>
     <Newslater/>
     </div>
    </div>
  );
};

export default About;
