/**
 * @author assan zidan 
 * @description page to display list of Brewery
 */

import BreweryCard from "../../components/BreweryCard"
import React, {useEffect, useState} from 'react'
import axios from "axios"
import {Link} from 'react-router-dom'

function Brewery_page() {
  // declaration des donnes local
    const [datas, setdatas] = useState([])
    const [itemperPage, setItemperPage] = useState(6)
    
   // au montage du composant
    useEffect(() => {
      // requete qui recupere tous les brasseries
      axios 
         .get(`https://api.openbrewerydb.org/breweries`
         )
         .then((res) => {
            const info = res.data
            console.log(info)
            setdatas(info)
         })
         .catch((e) => {
            console.log(e)
         })
   }, [])


  //  fonction d'affichage des item par page
   const click = (e) => {
    setItemperPage(
      e.target.value,)
    }
    
  return (
    <>
        
        <div className="container my-5">
          {/* selection permettant de modifier le nombre d'item par page */}
              <p>
                <select onChange={click}>
                <option value={6}>6</option>
                <option value={12}>12</option>
                <option value={24}>24</option>
                </select>
              </p>
            <h1 className="text-center">list of brewery</h1>
            <div className="row row-cols-md-3 row-cols-lg-3 row-cols-sm-3 my-4 px-3">
              {/* map sur le composant Brewery avec le lien de redirection vers la page de detail de brewery ayant en parametre id d'un browery */}
                {datas.slice(0,itemperPage).map((datas) => (
                        <Link to={`brewery/${datas.id}`} style={{textDecoration: 'none'}} className='linker'>
                          <div className="col my-3 mx-2" key={datas.id}>
                            <BreweryCard name={datas.name}
                                type={datas.type}
                                phone={datas.phone}
                                city={datas.city}
                                state={datas.state}
                            />
                     </div>
                        </Link>
                    
                ))}
            </div>
        </div>
    </>
  )
}

export default Brewery_page