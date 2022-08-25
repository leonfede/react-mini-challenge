import { useContext } from 'react'
import './peopleTable.css'

import { PeopleContext } from '../../App'

function PeopleTable() {
  const [people] = useContext(PeopleContext)

  return (
    <table className='People-table'>
      <thead className='People-table__head'>
        <tr>
          <th>Nombre</th>
          <th>Edad</th>
          <th>Carrera</th>
          <th>Hobbie</th>
        </tr>
      </thead>
      <tbody>
        {people.map((item, index) => (
          <tr
            key={index}
            className={'People-table__row ' + (index % 2 !== 0 ? 'People-table__row--even' : null)}
          >
            <td className='People-table__col'>{item.nombre}</td>
            <td className='People-table__col'>{item.edad}</td>
            <td className='People-table__col'>{item.carrera}</td>
            <td className='People-table__col'>{item.hobbie}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default PeopleTable
