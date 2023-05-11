import React from "react";


const List = ({people, setPeople}) =>{
 
 const removePerson = (id) =>{
  let newPeople = people.filter((person) => person.id !== id)
  console.log(newPeople)
 }
 return(
  <>
  {people.map((person)=>{
   const {id, name, age, image} = person
   return (
    <article key={id} className="person">
    <img src={image} alt={name} />
    <div>
    <h3>{name}</h3>
    <p>{age}</p>
    </div>
    <div>
     <button style={{backgroundColor:'#FF6D60', width: '80%',
   fontSize: '0.8rem'
   }} onClick={() => removePerson(id)}>remove</button>
    </div>
    </article>
   )
  })}
  </>
  )
}

export default List
