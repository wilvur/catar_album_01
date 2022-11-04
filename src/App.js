import Header from "./components/Header";
import Main from "./components/Main";
import Menu from "./components/Menu";
import {useData} from './context/DataContext'


function App() {
  return (    
        <>
          <div  style={{ backgroundImage: "url(/fondo.png)",backgroundRepeat:"no-repeat", backgroundPosition:"top", backgroundAttachment: "fixed" }}>
              <Header />
              <div className="container flex content-center justify-center mx-auto my-3">
                <Menu />
                <Main />
              </div>
          </div>
       </>
  );
}

export default App;
