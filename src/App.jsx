import Upload from "./pages/UploadPage/UploadPage";
import HomePage from "./pages/HomePage/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import { Link } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/"  element={<HomePage/>} />
        <Route path="/videos/:id"  element={<HomePage/>} />
        <Route path= "/upload" element={<Upload />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;