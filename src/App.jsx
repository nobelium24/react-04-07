import { Routes, Route } from "react-router-dom";
import SignUp from "./pages/signup";
import ImageUpload from "./pages/imageUpload";
import Products from "./pages/products";
import Edit from "./pages/edit";


const App = () => {
  return (
    <div>
      {/* <Router> */}
        <Routes>
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/uploads" element={<ImageUpload />} />
          <Route path="/products" element={<Products />} />
          <Route path="/edit/:id" element={<Edit />} />
        </Routes>
      {/* </Router> */}
    </div>
  )
}

export default App
