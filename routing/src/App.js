import logo from './logo.svg';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import AppRouter from './config/router';
import Appbar from './components/Appbar';




function App() {
  return (
    <div className="App">

<div className="App-link">

<Appbar/>

<h1 className="routing" > Routing App </h1>

   <br/>

   
<AppRouter/>
 


</div>
</div>

  );
}

export default App;
