import "./WelcomeRightContainer.scss"
import mobilePreview from "@assets/images/i6.png"
import appstore from "@assets/images/appstore.png"
import facebook from "@assets/images/Facebook.png"
import twitter from "@assets/images/Twitter.png"

function WelcomeRightContainer() {
  return (
    <section className="container">
      <img className="mobile-preview" src={mobilePreview} alt="mobile app preview" />
      <img className="appstore" src={appstore} alt="app store link" />
      <div className="socials">
        <img className="socials-facebook" src={facebook} alt="facebook link" />
        <img className="socials-twitter" src={twitter} alt="twitter link" />
      </div>
    </section>
  )
}

export default WelcomeRightContainer
