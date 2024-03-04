import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './components/NavigationBar';
import NavigationSection from './components/NavigationSection';
import Images from './components/Images';
import Category from './components/Category';

function App() {
  return (
    <div className="App">
      <NavigationBar></NavigationBar>
      <NavigationSection></NavigationSection>
      <Category></Category>
      <Images></Images>
    </div>
  );
}

export default App;
