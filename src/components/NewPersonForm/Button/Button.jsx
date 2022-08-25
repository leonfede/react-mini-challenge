import './button.css'

function Button({ label, type }) {
  return (
    <button className='New-person-form__submit-btn' type={type}>
      {label}
    </button>
  )
}

export default Button
