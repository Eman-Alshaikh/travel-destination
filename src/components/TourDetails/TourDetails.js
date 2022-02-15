import { Text } from "react-native";
import '../TourDetails/TourDetails.css';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function MoreDetails(props) {
    const { id } = useParams();
    const numberOfLines = 3;

    const isSame = props.data.filter((travel) => {
        return (travel.id === id)
    });


    const [loadMore, setLoadMore] = useState(true);

    const handleLoad = () => {
        setLoadMore(!loadMore);
    }



    return (
        <>
            {isSame.map((tourid, idx) => {
                if (loadMore) {

                    return (
                        <div key={idx} className='text'>

                            <Link className="link" to='/'>  Home </Link>
                            <br></br>
                            <div className="info">
                                <h2>name : {tourid.name}</h2>
                                <Text numberOfLines={numberOfLines}  >{tourid.info}</Text>
                                <button onClick={handleLoad}>See More</button>
                                <h3>The price :{tourid.price}</h3>
                                <img className='img' src={tourid.image} alt={tourid.name} />
                            </div>

                        </div>
                    );
                }
                else {
                    return (
                        <div key={idx} className='text'>

                            <Link className="homelink" to='/'>  Home </Link>
                            <br></br><br></br>
                            <div className="details">
                                <h1>Name : {tourid.name}</h1>
                                <Text className="info">{tourid.info}</Text>
                                <button onClick={handleLoad}>See Less</button>
                                <h3>{tourid.price}</h3>
                                <img className='img' src={tourid.image} alt={tourid.name} />

                            </div>

                        </div>
                    );
                }

            })};

        </>
    );
}

export default MoreDetails;