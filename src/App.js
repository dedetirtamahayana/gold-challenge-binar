import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import {useRoutes} from 'react-router';
import routes from './routes'
function App() {
  const appRoutes = useRoutes(routes());
    
  return appRoutes;
}

export default App;
