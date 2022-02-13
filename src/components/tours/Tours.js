function Tours(props)
{
    console.log(props)
    return(
        <>
        {
            props.myData.map(travel=>{


 return (
        <>
<h1>Travel Name : {travel.name}  </h1>
<img src={travel.image}  />
 
        
        
        </>
    )


    }) 
        }
        </>
   
    )
   
}
export default Tours ;