import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from './Components/NavBar';
import { NewsArea } from './Components/NewsArea';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<NewsArea />} />
          <Route path="/category/:category" element={<NewsArea />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

// import { NewsItem } from './Components/NewsItem';
// let pro = {
//   imgUrl : "https://images.pexels.com/photos/26898886/pexels-photo-26898886/free-photo-of-people-sitting-outdoors.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", 
//   title : "sometjign",
//   author : "Sudheer", 
//   desc : "lorem ipsum mangimgngsdju", 
//   newsUrl : "https://www.youtube.com/", 
//   time : "2024-06-12T09:00:34Z"
// }
/* <NewsItem imgUrl={pro.imgUrl} title={pro.title} author={pro.author} desc={pro.desc} newsUrl={pro.newsUrl} time={pro.time}></NewsItem> */