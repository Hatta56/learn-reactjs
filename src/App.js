import './assets/css/app.css';


import HomePage from 'pages/HomePage';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Details from 'pages/Detail';
function App() {
  return (
    <div className="App">
      <Router>
      <Route exact path="/" component={HomePage} ></Route>
      <Route path="/categories/:idc" component={Details} ></Route>
      </Router>
    </div>
  );
}

export default App;
