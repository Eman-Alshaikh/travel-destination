 
import Header from '../header/Header';
import Tours  from '../tours/Tours'
import traveldata from '../../data/db.json'
import Footer from '../footer/Footer'

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
