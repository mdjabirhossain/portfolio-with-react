import aboutimg0 from "../images/maksimilen.jpeg";
import "./about.styles.scss";

const About = () => {
  return (
    <div className="aboutpage-container">
      <div className="whoami">
        <img src={aboutimg0} className="profile-image" />
        <div className="profile-title">whoami</div>
        <div className="profile-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          nisi risus, malesuada vel nibh sit amet, porttitor fringilla purus.
          Nulla tristique enim pellentesque aliquam tristique. Curabitur ornare
          dui quis nisl interdum, non sagittis eros porttitor. Ut id elit felis.
          Class aptent taciti sociosqu ad litora torquent per conubia nostra,
          per inceptos himenaeos. Mauris vel lectus sed nibh eleifend semper
          eget at leo. Donec varius ligula a dapibus maximus. Phasellus eu
          commodo odio
        </div>
      </div>

      <div className="skills">
        <div className="skills-title">ls skills</div>
        <div className="security">
          <img src={aboutimg0} className="security-image" />
          <div className="security-content">
            <div className="security-title">Cybersecurity</div>
            <div className="security-text">
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              nisi risus, malesuada vel nibh sit amet, porttitor fringilla
              purus. Nulla tristique enim pellentesque aliquam tristique.
              Curabitur ornare dui quis nisl interdum, non sagittis eros
              porttitor. Curabitur ornare dui quis nisl interdum, non sagittis
              eros porttitor. Ut id elit felis. Class aptent taciti sociosqu ad
              litora torquent per conubia nostra, per inceptos himenaeos. Mauris
              vel lectus sed nibh eleifend semper eget at leo. Donec varius
              ligula a dapibus maximus. Phasellus eu commodo odio.
            </div>
          </div>
        </div>
        <div className="ml">
          <div className="ml-content">
            <div className="ml-title">ML</div>
            <div className="ml-text">
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              nisi risus, malesuada vel nibh sit amet, porttitor fringilla
              purus. Nulla tristique enim pellentesque aliquam tristique.
              Curabitur ornare dui quis nisl interdum, non sagittis eros
              porttitor. Curabitur ornare dui quis nisl interdum, non sagittis
              eros porttitor. Ut id elit felis. Class aptent taciti sociosqu ad
              litora torquent per conubia nostra, per inceptos himenaeos. Mauris
              vel lectus sed nibh eleifend semper eget at leo. Donec varius
              ligula a dapibus maximus. Phasellus eu commodo odio.
            </div>
          </div>
          <img src={aboutimg0} className="ml-image" />
        </div>
        <div className="software">
          <img src={aboutimg0} className="software-image" />
          <div className="software-content">
            <div className="software-title">Software</div>
            <div className="software-text">
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              nisi risus, malesuada vel nibh sit amet, porttitor fringilla
              purus. Nulla tristique enim pellentesque aliquam tristique.
              Curabitur ornare dui quis nisl interdum, non sagittis eros
              porttitor. Curabitur ornare dui quis nisl interdum, non sagittis
              eros porttitor. Ut id elit felis. Class aptent taciti sociosqu ad
              litora torquent per conubia nostra, per inceptos himenaeos. Mauris
              vel lectus sed nibh eleifend semper eget at leo. Donec varius
              ligula a dapibus maximus. Phasellus eu commodo odio.
            </div>
          </div>
        </div>
      </div>
      <div className="movies">
        <div className="movies-content">
          <img src={aboutimg0} className="movies-image" />
          <div className="movies-title">cat movies</div>
          <div className="movies-text"></div>
        </div>
      </div>
      <div>cat books</div>
    </div>
  );
};

export default About;
