import { Component } from "react";
import heelsImg from "../images/heels.png";
import atlungstadImg from "../images/atlungstad.png";
import earproofImg from '../images/earproof.png';

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
                <h3>Heels Shop</h3>
                <img src={heelsImg} alt="Heels shop homescreen" />
                <div className="project-links">
                  <a href="">Github</a>
                  <a href="">Besøk side</a>
                </div>
                <p>
                  Heels er en e-commerce nettside bygd på Next.js, hvor Strapi
                  har blitt brukt for å holde all api.
                </p>
                <p>
                  <span>
                    Next.js | CSS Module | Strapi.IO | Amazone AWS | Heroku |
                    Vercel | MongoDB | Formspree | Animasjon
                  </span>
                </p>
              </div>
            </div>
            <div className="project-container">
              <div className="project-content">
                <h3>Atlungstad Brenner</h3>
                <img src={atlungstadImg} alt="Atlungstad Brenneri homescreen" />
                <div className="project-links">
                  <a href="">Github</a>
                  <a href="">Besøk side</a>
                </div>
                <p>
                  Atlungstad Brenneri er en restaurant nettside bygd på
                  React.js, hvor Strapi har blitt brukt for å holde all api.
                </p>
                <p>
                  <span>
                    React.js | Sass | Bootstrap | Strapi.IO | Amazon AWS |
                    Heroku | Vercel | MongoDB | Formspree | Animasjon
                  </span>
                </p>
              </div>
            </div>
            <div className="project-container">
              <div className="project-content">
                <h3>EarProof</h3>
                <img src={earproofImg} alt="EarProof homescreen" />
                <div className="project-links">
                  <a href="">Github</a>
                  <a href="">Besøk side</a>
                </div>
                <p>
                EarProof er en e-comers webside, bygd på Vanilla JavaScript, Sass og HTML. Strapi er brukt for å holde all API. 
                </p>
                <p>
                  <span>
                  JavaScript | Sass | HTML | Strapi
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Project;
