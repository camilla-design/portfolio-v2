import { Component } from "react";
import wwwImage from '../images/www.svg';

class OmMeg extends Component {
    render() {
      return (
        <>
        <div className="wrapper about-container">
        <div class="container">
            <div>
            <h2>Om meg</h2>
            <hr></hr>
            <div className="about-intro">
                <p>Mitt navn er Camilla. Jeg er Frontend utvikler som har gått 2 år fagskole ved Noroff School of Technology and Digital Media, hvor jeg har studert Frontend utvikling. </p>
            </div>
            <div className="about">
                <p>Jeg er opptatt av gode brukervennlige løsninger og design. Det skal være lett for brukeren å forstå hvem/hva bedrifter er, samt bruke mine kunnskaper til å bygge og holde på Brand identiteten igjennom farger, font og design.</p>
            </div>
            <div className="code-experiense">
                <p>HTML | CSS3 | JavaScript | SASS | Bootstrap | Wordpress | Node.js | Strapi.IO | React.js | Next.js | MongoDB | Heroku | Vercel | Netlify | AWS</p>
            </div>
            </div>
        </div>
        </div>

            <div className="wrapper">
                <div className="container">
                    <div className="card">
                        <img src={wwwImage } alt="www icon"/>
                        <h3>Hjemmeside</h3>
                        <p>Fokus på rask og brukervennlig side med oversiktlig rent design. Samt grunnleggende søkermotoropptimalisering.</p>
                        <p className="code-experiense">HTML | CSS3 | JavaScript | Strapi.IO | React.js | Next.js</p>
                    </div>
                    <div className="card">
                        <img src={wwwImage } alt="pencel icon"/>
                        <h3>Design</h3>
                        <p>Fokus på hjemmeside design og skape en brand identitet.  Lage logo, finne farger og font som representerer kunden. Designet er rent, enkelt og lett å forstå og tiltalende.</p>
                        <p className="code-experiense">Adobe illustrator | Adobe Photoshop | Adobe XD | Figma</p>
                    </div>
                </div>
            </div>


            <div className="wrapper achievement">
                <div className="container">
                    <div>
                        <h2>58</h2>
                        <p>Skoleoppgaver</p>
                    </div>
                    <div>
                        <h2>3</h2>
                        <p>Kunder</p>
                    </div>
                    <div>
                        <h2>3</h2>
                        <p>Kurs fra Udemy</p>
                    </div>
                </div>
            </div>
        </>
      );
    }
  }
  
  export default OmMeg;