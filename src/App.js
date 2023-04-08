import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import "bootstrap/dist/css/bootstrap.min.css";

import "bootstrap/dist/js/bootstrap.bundle";
import About_us from './Components/About_us';
import OnlineAppointment from './Components/OnlineAppointment';
import Working from './Components/Working';
import Testimonials from './Components/Testimonials';
import Affiliate from './Components/Affiliate';
import Footer from './Components/Footer';


function App() {
  return (
    <div>
      <Header />
      <About_us />
      <OnlineAppointment />
      <Working />
      <Testimonials />
      <Affiliate />
      <Footer />
      
    </div>
  );
}

export default App;
