import './inputField.css'

function InputField({ name, type, placeholder, value, onChange }) {
  return (
    <div className='New-person-form__field'>
      <label htmlFor={name + 'Input'} className='New-person-form__label'>
        {name}
      </label>
      <input
        id={name + 'Input'}
        name={name}
        type={type}
        placeholder={placeholder}
        className='New-person-form__input'
        value={value}
        onChange={onChange}
        min={type === 'number' ? '1' : null}
      />
    </div>
  )
}

export default InputField
