import { Link } from "react-router-dom"
import SignInForm from "@components/common/forms/SignInForm"
import WelcomeRightContainer from "@components/WelcomeRightContainer"
import smilies from "@assets/images/smilies.png"
import menu from "@assets/images/menu.png"
import "./SignIn.scss"

function SignIn() {
  return (
   <div className="main">
    <section className="left-container">
      <div className="left-container__menu">
        <img src={menu} alt="menu" />
      </div>
      <img className="smilies" src={smilies} alt="smilies" />
      <p className="left-container__title">TARGET MVD</p>
      <p className="left-container__subtitle">Find people near you & Connect</p>
      <p className="left-container__description">Create a target wherever on the map, specify your interest: Travel, Dating, Music, etc and start conecting with others who share your interest.</p>
      <div className="sign-in-container">
       <SignInForm />
      </div>
      <hr className="solid" />
      <Link className="left-container__link" to="/signup">Sign Up</Link>
    </section>
    <WelcomeRightContainer />
   </div>
  )
}

export { SignIn }
