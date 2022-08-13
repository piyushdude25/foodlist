import React, { useEffect, useState } from 'react'

const Page2 = () => {



    // useEffect(() => {
    //       axios.get(`https://meesho123.herokuapp.com/products/${id}`)
    //       .then((response) => {
    //         console.log(response.data);
    //         // setProduct(...[response.data]);
    //       });
    //     }, []);

        const [plants, setPlants] = useState([])
console.log("dataplants",plants)
        const foodData = async()=> {
    
      const data = await fetch(`http://localhost:8000/plants/${code}`)
      setPlants(await data.json())
        }
        useEffect(()=>{foodData()},[])




  return (
    <div>
      
    </div>
  )
}

export default Page2
