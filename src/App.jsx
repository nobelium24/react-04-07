import { Routes, Route, Router } from "react-router-dom";
import SignUp from "./pages/signup";


const App = () => {
  return (
    <div>
      {/* <Router> */}
        <Routes>
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      {/* </Router> */}
    </div>
  )
}

export default App
