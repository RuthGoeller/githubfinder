
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import NotFound from "./components/pages/NotFound";
import {GithubProvider} from "./context/github/GithubContext";
import { AlertProvider } from "./context/github/alert/AlertContext";
import Alert from "./components/layout/Alert";
import User from "./components/pages/User";

function App() {
  return (
    
<GithubProvider>
<AlertProvider>
    <Router >
   <div className="flex flex-col justify-between h-screen">
   <Navbar/>
   <main className="container ma-auto px-3 pb-12">
    <Alert/>
<Routes>
  <Route path='/' element= {<Home/>}></Route>
  <Route path='/about' element= {<About/>}></Route>
  <Route path='/user/:login' element={<User/>}></Route>
  <Route path='/notfound' element= {<NotFound/>}></Route>
  <Route path='/*' element= {<NotFound/>}></Route>



</Routes>

   </main>
   <Footer></Footer>
   </div>
      
      
  
    </Router>
    </AlertProvider>
    </GithubProvider>
  );
}

export default App;
