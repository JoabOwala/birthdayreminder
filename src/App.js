import React, {useState} from 'react'
import data from './data'
import List from './list'

function App() {

  let [people, setPeople] = useState(data)

  return (
    <main className='main'>
      <section className='container'>
        <h3>{people.length} Birthdays Today
        </h3>
        <List people={people} setPeople={setPeople}/>
        <button className='button' onClick={() => setPeople([])}>Clear All</button>
      </section>
    </main>
  )

}

export default App;
