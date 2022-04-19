/**
 * @author assan zidan 
 * @description component for display list of Brewery
 */


export default function BreweryCard(props) {
  // destructuration 
    const { name,phone,city,state,type } = props
  return (
    <div className="sahadow border ">
      <h1>name: {name}</h1>
      <h2>type: {type}
      <br />
        city:  {city}
      <br />
        phone:  {phone}
      <br />
        state : {state}
      </h2> 
    </div>
   
  );
}
