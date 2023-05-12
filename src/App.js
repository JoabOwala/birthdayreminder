import React, {useState} from 'react'
import data from './data'
// import List from './list'

function App() {

  let [people, setPeople] = useState(data)

  const removeItem = (id) =>{
    let newPeople = people.filter((person) => person.id !== id)
    console.log(newPeople)
    setPeople(newPeople)
  }

  let render = people.map((person) =>{
    const {id, name, age, image} = person
    return (
      <article key={id} className='person'>
      <img src={image} alt={name} />
      <div>
      <h4>{name}</h4>
      <p>{age}</p>
      <button onClick={() => removeItem(id)} className='deleteBtn'>Remove</button>
      </div>
      </article> 
    )
  })
  return (
    <main className='main'>
      <section className='container'>
        <h3>{people.length} Birthdays Today
        </h3>
        <div>
        {render}  
        </div>
        <button className='btn' onClick={() => setPeople([])}>Clear All</button>
      </section>
    </main>
  )

}

export default App;
