import Sidebar from "./components/sidebar/sidebar";
import Topbar from "./components/topbar/topbar";
import "./app.css";
import Home from "./pages/home/home";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import UserList from "./pages/userList/userList";
import User from "./pages/user/user";
import NewUser from "./pages/newUser/newUser";
import ProductList from "./pages/productList/productList";
import Product from "./pages/product/product";
import NewProduct from "./pages/newProduct/newProduct";

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
          <Route path="/products" element={<ProductList/>}/>
          <Route path="/product/:productId" element={<Product/>}/>
          <Route path="/newProduct" element={<NewProduct/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
