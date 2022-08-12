import MainBanner from "./components/MainBanner/MainBanner";
import Nav from "./components/Nav/Nav";
import JustMainPage from "./pages/JustMainPage";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
function App() {
  return (
    <BrowserRouter basename="JUNCTION">
      <Routes>
        <Route path="/" element={<JustMainPage></JustMainPage>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
