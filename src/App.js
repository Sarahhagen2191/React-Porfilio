import Header from "./components/Header";

import Main from "./components/Main";

function App() {
const title = 'Sarah Hagen';

  return (
    <>
      <Header title={title} />

     <Main title={title} />
    </>
  )
}

export default App;
