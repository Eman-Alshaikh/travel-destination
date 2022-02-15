import '../home/Home.css';

import Footer from "../footer/Footer";
import Header from "../header/Header";
import Tours from "../tours/Tours";

import data from '../../data/db.json';


function Home() {
    return (
        <>
            <Header /> 
            <Tours className = 'tours' data={data} />
            <Footer className = 'tours' />


        </>
    );
}

export default Home;