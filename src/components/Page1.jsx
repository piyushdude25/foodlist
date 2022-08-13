import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";

const Page1 = () => {

    const [plants, setPlants] = useState([])

    const foodData = async()=> {

  const data = await fetch("http://localhost:8000/plants")
  setPlants(await data.json())
    }
    useEffect(()=>{foodData()},[])
  return (
    <div>
      {plants.map((item)=> {
        return(
            
            <div className="subBox" key={item.code}>
       
            <Link to={`/plants/${item.code}`}>
                      <div className="" >
                      <div className="">
                        {/* <img src={img1} alt={name} /> */}
                      </div>
                      <div className="content">
                       <div> {item.product_name} ({item.generic_name})</div>
                      </div>
                         
                    </div>
            </Link>
          </div>
        )
      })}
    </div>
  )
}

export default Page1
