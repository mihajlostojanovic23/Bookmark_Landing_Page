import './App.css';
import './css/Responsive.css'
import Header from './Components/Header/Header';
import First_Section from './Components/First_Section/First_Section';
import Features_Section from './Components/Features_Section/Features_Section';
import Download_Section from './Components/Download_Section/Download_Section';
import Question_Section from './Components/Question_Section/Question_Section';
import Contact_Us from './Components/Contact_Us/Contact_Us';
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <div className="App">
     <Header></Header>
     <First_Section></First_Section>
     <Features_Section></Features_Section>
     <Download_Section></Download_Section>
     <Question_Section></Question_Section>
     <Contact_Us></Contact_Us>
     <Footer></Footer>
    </div>
  );
}

export default App;
