import { PeopleTable, ViewTitle } from '../../components'

function PeopleView() {
  return (
    <section className='People-view u-view-animation'>
      <ViewTitle>Lista de personas</ViewTitle>
      <PeopleTable />
    </section>
  )
}

export default PeopleView
