import { useContext, useState } from 'react'
import { PeopleContext } from '../../App'
import Button from './Button/Button'
import InputField from './InputField/InputField'
import './newPersonForm.css'

const initialState = {
  nombre: '',
  edad: '',
  carrera: '',
  hobbie: '',
}

function NewPersonForm() {
  const [people, setPeople] = useContext(PeopleContext)
  const [formValues, setFormValues] = useState(initialState)

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
    console.log(formValues)
  }

  const handleReset = (e) => {
    e.preventDefault()
    setFormValues(initialState)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setPeople([...people, { ...formValues }])
    console.log(formValues)
    alert(
      `Persona añadida!\n\
      Nombre: ${formValues.nombre}\n\
      Edad: ${formValues.edad}\n\
      Carrera: ${formValues.carrera}\n\
      Hobbie: ${formValues.hobbie}`
    )
    setFormValues(initialState)
  }

  return (
    <form className='New-person-form' onReset={handleReset} onSubmit={handleSubmit}>
      <div className='New-person-form__name-age-section'>
        <InputField
          name='nombre'
          type='text'
          placeholder='Federico'
          value={formValues.nombre}
          onChange={handleChange}
        />
        <InputField
          name='edad'
          type='number'
          placeholder='21'
          value={formValues.edad}
          onChange={handleChange}
        />
      </div>
      <InputField
        name='carrera'
        type='text'
        placeholder='Ingeniería en sistemas'
        onChange={handleChange}
      />
      <InputField name='hobbie' type='text' placeholder='Basquet' onChange={handleChange} />
      <div className='New-person-form__buttons-container'>
        <Button type='reset' label='Reiniciar' />
        <Button type='submit' label='Enviar' />
      </div>
    </form>
  )
}

export default NewPersonForm
