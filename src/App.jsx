import { createContext, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'

import { FormView, MainView, PeopleView } from './views'

import sampleData from './data/sample'

const PeopleContext = createContext()

function App() {
  const [people, setPeople] = useState(sampleData)

  return (
    <div className='App'>
      <PeopleContext.Provider value={[people, setPeople]}>
        <Routes>
          <Route path='/' element={<MainView />}>
            <Route index element={<PeopleView />} />
            <Route path='/form' element={<FormView />} />
          </Route>
        </Routes>
      </PeopleContext.Provider>
    </div>
  )
}

export default App
export { PeopleContext }
