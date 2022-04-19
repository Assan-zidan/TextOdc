/**
 * @author assan zidan 
 * @description page to display detail of Brewery
 */
import React, {useEffect, useState} from 'react'
import axios from "axios"
import { useParams } from 'react-router-dom'
function DetailBrewery_page() {
  // recuperation des donnes passer en parametre lors du clic renvoyant sur ce composant
  const { id_brewery } = useParams()

  const [datas, setdatas] = useState([])

  // au montage du composant
  useEffect(() => {
    // requete qui recupere les donnes sur  une brasseries
    axios 
       .get(`https://api.openbrewerydb.org/breweries/${id_brewery}`
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
  return (
    <>
      <div className="container mt-5 text-center border px-4 py-5">
        <div className="row">
          <div className="col">
            <p>name: {datas.name}
              <br />
              phone: {datas.phone}
              <br />
              state: {datas.state}
              <br />
              type: {datas.type}
              <br />
              country: {datas.country}
              <br />
              longitude: {datas.longitude}
              <br />
              latitude: {datas.latitude}
              <br />
              postal_code: {datas.postal_code}
            </p>

          </div>
          </div>  
      </div> 
    </>
  )
}

export default DetailBrewery_page