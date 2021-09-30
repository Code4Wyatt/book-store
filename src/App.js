import './App.css';
import NavigationBar from './Components/NavigationBar';
import MyFooter from './Components/MyFooter';
import Welcome from './Components/Welcome';
import 'bootstrap/dist/css/bootstrap.min.css';
import LatestReleases from './Components/LatestReleases';
import WarningSign from './Components/WarningSign';
import MyBadge from './Components/MyBadge';
import SingleBook from './Components/SingleBook';
import BookList from './Components/BookList'
import historyBooks from "./Assetts/history.json";
import fantasyBooks from "./Assetts/fantasy.json";
import scifiBooks from "./Assetts/scifi.json";
import romanticBooks from "./Assetts/romance.json";

function App() {
  return (
    
    <div>
      <NavigationBar />
      <Welcome />
      <WarningSign text="Warning, low on stock" />
      <MyBadge text="NEW books coming soon!" color="info" />
      <SingleBook onClick="componentDidMount()" book={fantasyBooks[7]} />
      <BookList onClick="componentDidMount()" books={fantasyBooks} />
      
      <LatestReleases />
      <MyFooter />
    </div>
  )
}

export default App;
