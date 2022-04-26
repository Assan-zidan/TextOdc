/**
 * @author assan zidan 
 * @description page qui affiche le detail d'un brewerry
 */

import Loading from '../../components/Loading'
import React, {useEffect, useState} from 'react'
import axios from "axios"
import { Link, useParams } from 'react-router-dom'

function DetailBrewery_page() {
  // recuperation des donnes passer en parametre lors du clic renvoyant sur cette page
  const { id_brewery } = useParams()

  const [datas, setdatas] = useState([])
  const [isloading, setisloading] = useState(false)

  // recuperation des informations de notre api au montage de la page
  useEffect(() => {
    setisloading(true)
    axios 
       .get(`https://api.openbrewerydb.org/breweries/${id_brewery}`
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

  return (
    <>
      <div className="container mt-5  border px-4 py-5">
        { isloading ? (<p className="text-center"><Loading/></p>)
         : (<div className="row">
         <div className="col">
           <p className='text-center'> <h2>{datas.name}</h2>
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
           <p className="text-start"> <Link to='/'><button className="btn btn-info">retour</button></Link> </p>

         </div>
         </div>)}
      
          
      </div> 
    </>
  )
}

export default DetailBrewery_page