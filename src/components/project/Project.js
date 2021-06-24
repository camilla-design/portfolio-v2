import { Component } from "react";
import heelsImg from "../images/heels.png";
import atlungstadImg from "../images/atlungstad.png";
import earproofImg from "../images/earproof.png";

class Project extends Component {
  render() {
    return (
      <>
        <div className="wrapper">
          <div class="portfolio-container">
            <h2>Portefølje</h2>
            <hr></hr>
            <div className="project-container">
              <div className="project-content">
                <img src={heelsImg} alt="Heels shop homescreen" />
                <h3>Heels Shop</h3>
                <p>
                  Heels er en e-commerce nettside bygd på Next.js, hvor Strapi
                  har blitt brukt for å holde all api.
                </p>
                <p>
                  <span>
                    | Next.js | CSS Module |
                  </span>
                </p>
                <div className="project-links">
                  <a href="#">Les mer</a>
                </div>
              </div>
            </div>
            <div className="project-container">
              <div className="project-content">
                <img src={atlungstadImg} alt="Atlungstad Brenneri homescreen" />
                <h3>Atlungstad Brenner</h3>
                <p>
                  Atlungstad Brenneri er en restaurant nettside bygd på
                  React.js, hvor Strapi har blitt brukt for å holde all api.
                </p>
                <p>
                  <span>
                    | React.js | Sass | Bootstrap | 
                  </span>
                </p>
                <div className="project-links">
                  <a href="#">Les mer</a>
                </div>
              </div>
            </div>
            <div className="project-container">
              <div className="project-content">
                <img src={earproofImg} alt="EarProof homescreen" />
                <h3>EarProof</h3>
                <p>
                  EarProof er en e-comers webside, bygd på Vanilla JavaScript,
                  Sass og HTML. Strapi er brukt for å holde all API.
                </p>
                <p>
                  <span>| JavaScript | Sass | HTML | </span>
                </p>
                <div className="project-links">
                  <a href="#">Les mer</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Project;
