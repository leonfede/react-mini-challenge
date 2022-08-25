import { Outlet } from 'react-router-dom'
import './mainView.css'

import { Header } from '../../components'

function MainView() {
  return (
    <>
      <Header />
      <main className='View-container'>
        <Outlet />
      </main>
    </>
  )
}

export default MainView
