import { Component } from "react";
import heelsImg from "../../images/heels.png";
class HeelsShop extends Component {
    render() {
      return (
        <>
        <div class="container">
            <div class="detailContainer">
        <h1>Heels shop</h1>
        <div class="imgContainer">
        <img src={heelsImg} alt="Heels shop homepage"/>
        </div>
        <div className="project-links">
                  <a href="https://heels-shop.vercel.app">Besøk side</a>
                  <a href="https://github.com/camilla-design/heels-shop">Github</a>
        </div>
        <div class="text-container">
            <h2>E-commerce nettside</h2>
            <p>Heels er en e-commerce nettside bygd på Next.js, hvor Strapi
                  har blitt brukt for å holde all api.</p>
            <p>Dette er skoleprosjekt hvor vi har Homepage, Detail page og Admin page. Jeg har lagt til cart, registrering og login side. </p>
            <h4>Brukt på dette prosjektet:</h4>
            <p><span>| Next.js | CSS Modules | Strapi.io | Heroku | MongoDB | Amazon AWS | Formspree | Vecel | React Animasjon </span></p>
        </div>
        </div>
        </div>
         
        </>
      );
    }
  }
  
  export default HeelsShop;
  