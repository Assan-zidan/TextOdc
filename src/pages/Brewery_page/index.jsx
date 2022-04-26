/**
 * @author assan zidan 
 * @description page affichant la liste des breweries
 */

import BreweryCard from "../../components/BreweryCard" 

import React, {useEffect, useState} from 'react'
import axios from "axios"
import {Link} from 'react-router-dom'
import Loading from "../../components/Loading"

function Brewery_page() {
    const [datas, setdatas] = useState([])
    const [itemperPage, setItemperPage] = useState(6)
    const [isloading, setisloading] = useState(false)
    
   // recuperation des informations de notre api au montage de la page 
    useEffect(() => {
      setisloading(true)
      axios 
         .get(`https://api.openbrewerydb.org/breweries`
         )
         .then((res) => {
            const info = res.data
            console.log(info)
            setdatas(info)
            setisloading(false)
         })
         .catch((e) => {
            console.log(e)
         })
   }, [])


  //  fonction d'affichage des items par page
   const click = (e) => {
    setItemperPage(
      e.target.value,)
    }
    
  return (
    <>
        
        <div className="container my-5">
              
            <h1 className="text-center">list of brewery</h1>
          
              <p className="text-end">
                <select onChange={click}>
                <option value={6}>6</option>
                <option value={12}>12</option>
                <option value={24}>24</option>
                </select>
              </p>
              {isloading ? <Loading/> : 
            <div className="row row-cols-md-3 row-cols-lg-3 row-cols-sm-2 my-4 ">
                {datas.slice(0,itemperPage).map((datas) => (
                        <Link to={`brewery/${datas.id}`} style={{textDecoration: 'none'}} className='linker'>
                          <div className="col my-3" key={datas.id}>
                            <BreweryCard name={datas.name}
                                type={datas.type}
                                phone={datas.phone}
                                city={datas.city}
                                state={datas.state}
                            />
                          </div>
                        </Link>    
                ))}
            </div>}
        </div>
    </>
  )
}

export default Brewery_page