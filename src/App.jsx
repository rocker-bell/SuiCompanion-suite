import {Routes, Route} from "react-router-dom";
import SuiCompanionLanding from "./Components/SuiCompanionLanding";
const App = () => {
  return (
    <>
      <Routes>
            <Route path="/"  element={<SuiCompanionLanding/>}/>
      </Routes>
    </>
  )
}

export default App;