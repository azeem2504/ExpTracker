import styled from "styled-components"
import UnivStyle from "./styles/univStyle"
import bg from './img/bg.png'
import MainLayout from './styles/Layout'
import Gooey from "./components/Gooey/Gooey"
import Navigation from "./components/Navigation/Navigation"
import { useMemo, useState } from "react"
import Dashboard from "./components/Dashboard/Dashboard"
import Expenses from "./components/Expenses/Expenses"
import Income from "./components/Income/Income"
import { useGlobalContext } from "./context/globalContext"
import AllTransactions from "./components/Transactions/AllTransactions"


function App() {

  const [active, setActive] = useState(1)

  const global = useGlobalContext()
  // console.log(global);

  const GooeyMemo = useMemo(() => {
        return <Gooey/>
  }, [])

  const displayData = () => {
    switch(active){
      case 1:
        return <Dashboard/>
      case 2:
        return <AllTransactions/>
      case 3:
        return <Income/>
      case 4:
        return <Expenses/>
      default:
        return <Dashboard/>
    }
  }

  return (
    <AppStyled bg={bg} className="App">
      {GooeyMemo}
      <MainLayout>
        <Navigation active={active} setActive={setActive}/>
        <main>
          {displayData()}
        </main>
      </MainLayout>
    </AppStyled>
  )
}
const AppStyled = styled.div`
        height: 100vh;
        width: 100vw;
        background-image: url(${props => props.bg});
        position: relative;

        main{
          flex: 1;
          background: rgba(252, 246, 249, 0.78);
          border: 3px solid white;
          backdrop-filter: blur(4.5px);
          border-radius: 32px;
          &::-webkit-scrollbar{
            width: 0;
          }
        }
  `;


export default App
