import { Component } from "react";
import profileImage from '../images/me-dark.png';
import OmMeg from "../omMeg/OmMeg";

class Home extends Component {
    render() {
      return (
        <>
        
        <div className="wrapper">
        <div class="container">
            <div>
            <h1><span>Frontend</span> Utvikler</h1>
            <p>Nyutdannet Frontend Utvikler med fokus på enkel og brukervennlig design.</p>
            <div className="profilImageConrainer">
            <img className="profileImage" src={profileImage} alt="profile" />
            </div>
            </div>
        </div>
        </div>

        <OmMeg />
        
        </>
      );
    }
  }
  
  export default Home;