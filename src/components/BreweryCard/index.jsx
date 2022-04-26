/**
 * @author assan zidan 
 * @description component for display list of Brewery
 */


export default function BreweryCard(props) {
  // destructuration 
    const { name,phone,city,state,type } = props
  return (
    <div className="shadow border px-4 ">

      <h2> {name}</h2>
      <p>type: {type}
      <br />
        city:  {city}
      <br />
        phone:  {phone}
      <br />
        state: {state}
      </p> 
    </div>
   
  );
}