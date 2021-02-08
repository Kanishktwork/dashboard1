import {useState} from 'react';
import navbar from "./components/navbar/navbar"
import main from "./components/main/main"
import sidebar from "./components/sidebar/sidebar"
import { render } from '@testing-library/react';


const App = () => {

  const[sidebarOpen, setSidebarOpen] = useState(false);

  const openSidebar = () => {
    setSidebarOpen(true);
  }

  const closeSidebar = () => {
    setSidebarOpen(false);
  }

  return(
    <div className= "container">
      <navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
      <main />
      <sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
    </div>
  );
};

export default App;
