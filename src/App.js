import Find from "./components/Find";
import Navbar from "./components/Navbar";
import './index.css';
import data from "./data.js"

function App() {

  const find = data.map(item => {
    
    return(
      <Find
        {...item}
      />

    )
  })
 

  return (
    <div>
      <Navbar />
      {find}
    </div>
  );
}

export default App;
