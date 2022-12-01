import "./SignIn.scss"
import smilies from "../../assets/images/smilies.png"
import mobilePreview from "../../assets/images/i6.png"
import appstore from "../../assets/images/appstore.png"
import facebook from "../../assets/images/Facebook.png"
import twitter from "../../assets/images/Twitter.png"
import menu from "../../assets/images/menu.png"
import SignInForm from "../../components/common/forms/SignInForm"

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
      <SignInForm />
    </section>
    <section className="right-container">
      <img className="right-container__mobile-preview" src={mobilePreview} alt="mobile app preview" />
      <img className="right-container__appstore" src={appstore} alt="app store link" />
      <div className="right-container__socials">
        <img className="right-container__socials__facebook" src={facebook} alt="facebook link" />
        <img className="right-container__socials__twitter" src={twitter} alt="twitter link" />
      </div>
    </section>
   </div>
  )
}

export default SignIn
