import './App.css';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import NavbarBanner from './components/Navbar/NavbarBanner';
import NumberCounter from './components/NumberCounter/NumberCounter';
import ResponsiveBanner from './components/ResponsiveBanner/ResponsiveBanner';
import ServicesSection from './components/ServicesSection/ServicesSection';
import Img1 from './assets/banner1.png'
import Img2 from './assets/banner2.png'
import SubjectCard from './components/SubjectCard/SubjectCard';
import Testimonial from './components/Testimonial/Testimonial';
import Footer from './components/Footer/Footer';
function App() {
  const BannerData1 ={
    image:Img1,
    tag:"CUSTOMIZE WITH YOUR SCHEDULE",
    title:"Personalized professional Online Tutor on Your Schedule!",
    description:`Our scheduling system allows you to select based on your fr
    ee time. Lorem ipsum demo text for template. Keep track of your students 
    class and tutoring schedules, and never miss your lectures. The best onli
    ne class scheduling system with easy accessibility.Lorem ipsum is a placeho
    lder text commonly used to demonstrate the visual form`,
    link:"#"
}
const BannerData2 ={
    image:Img2,
    tag:"CUSTOMIZE WITH YOUR SCHEDULE",
    title:"Talented and Qualified Tutors to Serve You for Help",
    description:`Our scheduling system allows you to select based on your free
     time. Lorem ipsum demo text for template. Keep track of your students cla
     ss and tutoring schedules, and never miss your lectures. The best online c
     lass scheduling system with easy access
    ibility. Lorem ipsum is a placeholder text commonly used`,
    link:"#"
}

  return (
    <div className="App overflow-x-hidden">
      <Navbar/>
      <Hero/>
      <NumberCounter/>
      <ServicesSection/>
      <ResponsiveBanner {...BannerData1}/>
      <ResponsiveBanner {...BannerData2} reverse={true}/>
   <SubjectCard/>
   <Testimonial/>
   <Footer/>
      
    </div>
  );
} 

export default App;
