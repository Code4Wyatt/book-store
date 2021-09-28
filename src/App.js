import './App.css';
import NavigationBar from './Components/NavigationBar';
import MyFooter from './Components/MyFooter'
import Welcome from './Components/Welcome'
import 'bootstrap/dist/css/bootstrap.min.css';
import LatestReleases from './Components/LatestReleases';

function App() {
  return (
    
    <div>
      <NavigationBar />
      <Welcome />
      <LatestReleases />
      <MyFooter />
    </div>
  )
}

export default App;
