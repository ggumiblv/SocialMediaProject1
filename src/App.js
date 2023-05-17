import React from 'react';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import News from './components/News/News';
import Friends from './components/Friends/Friends';
import { addPost } from './redux/state';

const App = (props) => {

  return (

    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Routes>

          <Route path="/dialogs/*" element= {<Dialogs 
          state = {props.state.dialogsPage} 
          />}/>

          <Route path="/profile" element= { <Profile 
          state={props.state.profilePage}
          addPost={props.addPost} />} />

          <Route path="/news" element={<News />} />
          <Route path="/music" element={<Music />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/friends" element={<Friends
           state={props.state.sidebarPage}/>} />
          
          </Routes>
        </div>
      </div>
    </BrowserRouter>)
}


export default App;
