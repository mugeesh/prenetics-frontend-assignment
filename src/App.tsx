import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { Sidebar } from './components/sidebar/Sidebar';  
import { TopNav } from './components/topbar/TopNav';  
import { LandingResultPage } from './components/LandingResultPage';
import './style/app.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossOrigin="anonymous"/>
        <link rel="preconnect" href="https://fonts.googleapis.com"/> 
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
        <link href='https://fonts.googleapis.com/css2?family=Questrial&display=swap' rel="stylesheet"/>
      </header>

      <div id="content">
        <Sidebar />
        <TopNav />
        <div id="content-wrapper">
          <Provider store={store}>
              <LandingResultPage /> 
          </Provider> 
        </div> 
      </div>
    </div>
  );
}

export default App;

