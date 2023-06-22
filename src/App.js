import VideoBG from './components/VideoBG';
import Navbar from './components/Navbar'
import Slider from './components/Slider';
import About from './components/About';
import ComingSoon from './components/ComingSoon';
import Pro from './components/Pro';
import TimeLine from './components/TimeLine';
import Faq from './components/Faq';

function App() {
  return (
    <div>
      <VideoBG />
      <Slider />
      <div className="content-wrapper">
        <About />
        <ComingSoon />
        <Pro />
        <TimeLine />
        <Faq />
      </div>
    </div>
  );
}

export default App;
