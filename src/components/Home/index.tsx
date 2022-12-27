import {IntlProvider, FormattedMessage} from 'react-intl';
import { Button, Map } from "@components/common"
import smilies from "@assets/images/smilies.png"
import "./Home.scss"

const messages = {
  welcome: "Welcome to ",
  subtitle: "Find people near you & Connect",
  item: "Create a target by clicking wherever on the map, specify the ratio and a topic: Travel, Dating, Music, etc.",
  second_item: " will start a chat whenever you've a match. You can always dismiss a conversation if you're not interested.",
  button: "OK; GOT IT!"
}

function Home() {
  return (
    <IntlProvider messages={messages} locale="en">
      <div className="home-main">
        <div className="home-left-container" >
          <img className="smilies" src={smilies} alt="smilies" />
          <h2><FormattedMessage id="welcome" /><strong>TARGET</strong></h2>
          <h3><FormattedMessage id="subtitle" /></h3>

          <ul className="welcome-list">
            <li className="item"><FormattedMessage id="item" /></li>
            <li><strong>TARGET</strong><FormattedMessage id="second_item" /></li>
          </ul>
          <Button label={<FormattedMessage id="button" />} />
        </div>
        <div className="home-right-container" >
          <Map />
        </div>
      </div>
    </IntlProvider>
  )
}

export { Home }
