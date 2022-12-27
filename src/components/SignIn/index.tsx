import React from "react";
import { Link } from "react-router-dom"
import {IntlProvider, FormattedMessage} from 'react-intl'
import SignInForm from "@components/common/forms/SignInForm"
import WelcomeRightContainer from "@components/WelcomeRightContainer"
import smilies from "@assets/images/smilies.png"
import menu from "@assets/images/menu.png"
import "./SignIn.scss"

const messages = {
  title: "TARGET MVD",
  subtitle: "Find people near you & Connect",
  description: "Create a target wherever on the map, specify your interest: Travel, Dating, Music, etc and start conecting with others who share your interest.",
  signUp: "Sign Up"
}

function SignIn() {
  return (
    <IntlProvider messages={messages} locale="en">
      <div className="main">
        <section className="left-container">
          <div className="left-container__menu">
            <img src={menu} alt="menu" />
          </div>
          <img className="smilies" src={smilies} alt="smilies" />
          <p className="left-container__title"><FormattedMessage id="title" /></p>
          <p className="left-container__subtitle"><FormattedMessage id="subtitle" /></p>
          <p className="left-container__description"><FormattedMessage id="description" /></p>
          <div className="sign-in-container">
          <SignInForm />
          </div>
          <hr className="solid" />
          <Link className="left-container__link" to="/signup"><FormattedMessage id="signUp" /></Link>
        </section>
        <WelcomeRightContainer />
      </div>
    </IntlProvider>
  )
}

export { SignIn }
