import { Routes, Route } from "react-router-dom";
import SignUp from "./pages/signup";
import ImageUpload from "./pages/imageUpload";


const App = () => {
  return (
    <div>
      {/* <Router> */}
        <Routes>
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/uploads" element={<ImageUpload />} />
        </Routes>
      {/* </Router> */}
    </div>
  )
}

export default App
