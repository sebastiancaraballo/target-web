import { Map } from "@components/common"
import "./Home.scss"
import { Welcome } from '@components/main/Welcome';

import { useAppSelector } from "@/state/app/hooks";


function Home() {
  const { welcomed } = useAppSelector((state) => state.welcomed);

  return (
    <div>
      { welcomed === false ? (
        <Welcome />
      ) : (
        <p>Hello</p>
      )
      }
      <div className="home-right-container" >
        <Map />
      </div>
    </div>
  )
}

export { Home }
