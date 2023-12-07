import './App.css';
import Home from './components/home/Home';
import UserAccount from './context/ContextApi';



function App() {
  return (
    <>
      <UserAccount>
        <Home />
      </UserAccount>
    </>
  );
}

export default App;
