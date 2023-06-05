import "../assets/css/App.css";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import AddMeeting from "../pages/AddMeeting";
import NotFound from "../pages/NotFound";
import Nav from "./Nav";
import UpcomingMeeting from "../pages/UpcomingMeeting";

function App() {
  return (
    <div className="">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-meetings" element={<AddMeeting />} />
        <Route path="/UpcomingMeeting" element={<UpcomingMeeting />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
