import { useState } from 'react';

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import AboutMe from "./pages/aboutme";
import Project from "./pages/project";

import Header from "./components/Header";

function App() {
  const title = 'Sarah Hagen';
  const [page, setPage] = useState('home');

  const handlePageView = () => {
 switch (page) {
    case 'home':
      return <Home title={title} />;
    case 'contact':
      return <Contact />;
      case 'project':
      return <Project />
      case 'aboutme':
        return <AboutMe/>
  }

  }

  return (
    <>
      <Header title={title} setPage={setPage} />

     {handlePageView()}


    </>
  )
}

export default App;
