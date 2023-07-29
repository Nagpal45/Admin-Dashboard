import Sidebar from "./components/sidebar/sidebar";
import Topbar from "./components/topbar/topbar";
import "./app.css";
import Home from "./pages/home/home";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import UserList from "./pages/userList/userList";
import User from "./pages/user/user";
import NewUser from "./pages/newUser/newUser";

function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/user/:userId" element={<User/>} />
          <Route path="/newUser" element={<NewUser/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
