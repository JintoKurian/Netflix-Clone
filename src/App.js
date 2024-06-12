
import './App.css';
import Banner from './Components/Banner/Banner';
import NavBar from './Components/NavBar/NavBar';
import RowPost from './Components/RowPost/RowPost';
import {originals,action,comedy,horror,documentaries} from './urls'

function App() {
  return (
    <div className="App">
     <h1>
      <NavBar/>
      <Banner/>
      <RowPost url={originals} title='Netfilx Originals' />
      <RowPost url={action} title='Action' isSmall />
      <RowPost url={comedy} title='Comedy' isSmall />
      <RowPost url={horror} title='Horror' isSmall />
      <RowPost url={documentaries} title='Documentaries' isSmall />

     </h1>
    </div>
  );
}

export default App;
