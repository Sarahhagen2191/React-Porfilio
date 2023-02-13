import Header from "./components/Header";

import Main from "./components/Main";

function App() {
const title = 'React Overview';

  return (
    <>
      <Header title={title} />

     <Main title={title} />
    </>
  )
}

export default App;
