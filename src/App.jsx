import { Route, Routes } from "react-router-dom";
import Body from "./components/Body";
import Feed from "./components/Feed";
import LandingPage from "./components/LandingPage";
import Profile from "./components/Profile";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Body />}>
        <Route path="/feed" element={<Feed />} />
        <Route path="/landingPage" element={<LandingPage />} />
        <Route path="/profile" element={<Profile />} />
      </Route>
    </Routes>
  );
};

export default App;
