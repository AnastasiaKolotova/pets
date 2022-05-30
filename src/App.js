import {Routes, Route} from "react-router-dom";
import Main from "./pages/main";
import Account from "./pages/account";
import Add_ad from "./pages/add";
import Search from "./pages/search";
import Signup from "./pages/signup";
import Edit from "./pages/edit";
import Edit_ad from "./pages/editad";
import './App.css';


function App() {
  return (
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/main' element={<Main/>}/>
        <Route path='/profile' element={<Account/>}/>
        <Route path='/registration' element={<Signup/>}/>
        <Route path='/edit' element={<Edit/>}/>
        <Route path='/add_ad' element={<Add_ad/>}/>
        <Route path='/edit_ad' element={<Edit_ad/>}/>
        <Route path='/search' element={<Search/>}/>
      </Routes>
  );
}

export default App;

