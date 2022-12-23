import { Button, Map } from "@components/common"
import smilies from "@assets/images/smilies.png"
import "./Home.scss"

function Home() {
  return (
   <div className="home-main">
    <div className="home-left-container" >
      <img className="smilies" src={smilies} alt="smilies" />
      <h2>Welcome to <strong>TARGET</strong></h2>
      <h3>Find people near you & Connect</h3>

      <ul className="welcome-list">
        <li className="item">Create a target by clicking wherever on the map, specify the ratio and a topic: Travel, Dating, Music, etc.</li>
        <li><strong>TARGET</strong> will start a chat whenever you've a match. You can always dismiss a conversation if you're not interested.</li>
      </ul>
      <Button label="OK; GOT IT!" />
    </div>
    <div className="home-right-container" >
      <Map />
    </div>
   </div>
  )
}

export { Home }
