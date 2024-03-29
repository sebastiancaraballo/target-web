import React from "react";
import SignUpForm from "@components/common/forms/SignUpForm"
import WelcomeRightContainer from "@components/WelcomeRightContainer"
import menu from "@assets/images/menu.png"
import "./SignUp.scss"

function SignUp() {
  return (
   <div className="main">
    <section className="left-container">
      <div className="left-container__menu">
        <img src={menu} alt="menu" />
      </div>
      <SignUpForm />
    </section>
   <WelcomeRightContainer />
   </div>
  )
}

export { SignUp }
