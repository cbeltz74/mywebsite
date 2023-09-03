import { Header, Footer } from "./components";
import { AllRoutes } from "./routes/AllRoutes";
import './App.css';

function App() {
  return (
    <div className="App" 
    // style={{ backgroundImage: `url(${bird})`,
    // backgroundRepeat: 'no-repeat',
    // // backgroundSize: '120% auto',
    // // objectFit: 'cover'
    // backgroundPosition: '25% 75%' 
    // }}
    >
      <main className="app-main">
        <Header />
        <AllRoutes />
        <Footer />
      </main>
    </div>
  );
}

export default App;
