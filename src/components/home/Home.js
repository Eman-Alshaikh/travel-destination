 
import Header from './components/header/Header';
import Tours  from './components/tours/Tours'
import traveldata from './data/db.json'
import Footer from './components/footer/Footer'

function Home() {
  return (
    <>
    <Header/> 
   <Tours myData={traveldata}/>
   <Footer/>

   </>
   );
}

export default Home;
