import React from 'react';
import logo from './logo.svg';
import './assets/app.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Header from './componnet/Acceuil/Header';
import Footer from './componnet/Acceuil/Footer';
import ArticlesWithHookForm from './componnet/form/hook.form';
import Test1 from './componnet/form/Test1';
import Article from './componnet/Articles';
import Main from './componnet/Acceuil/Main';





function App() {
  return (
    <div className="App">
     {/*<Header />
   <Article/>
  <Footer />*/}
  <BrowserRouter>
  <Routes>
<Route path='/' element={<Main/>}>
<Route path='/' element={<Article/>}></Route>
<Route path='/comment/:id' element={<Test1/>}></Route>
</Route>

  </Routes>
  </BrowserRouter>
   </div>
  );
}

export default App;
