import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ReactComponent as ArrowRightIcon } from '../assets/svg/keyboardArrowRightIcon.svg'
import visibilityIcon from '../assets/svg/visibilityIcon.svg'

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  })
  const { name, email, password } = formData

  const navigate = useNavigate()

  const onChange = (event) => {
    setFormData((prevState) => ({
      ...prevState,
      [event.target.id]: event.target.value,
    }))
  }

  return (
    <>
      <div className='pageContainer'>
        <header>
          <p className='pageHeader'>Welcome!</p>
        </header>

        <form>
          <input
            type='text'
            className='nameInput'
            placeholder='Name'
            id='name'
            value={name}
            onChange={onChange}
          />
          <input
            type='email'
            className='emailInput'
            placeholder='Email'
            id='email'
            value={email}
            onChange={onChange}
          />
          <div className='passwordInputDiv'>
            <input
              type={showPassword ? 'text' : 'password'}
              className='passwordInput'
              placeholder='password'
              id='password'
              value={password}
              onChange={onChange}
            />

            <img
              src={visibilityIcon}
              alt='showPassword'
              className='showPassword'
              onClick={() => setShowPassword((prevState) => !prevState)}
            />
          </div>

          <div className='signInBar'>
            <p className='signInText'>Sign Up</p>
            <button className='signInButton'>
              <ArrowRightIcon fill='#ffffff' width='34px' height='34px' />
            </button>
          </div>
        </form>
        {/* Google OAuth */}

        <Link to='/sign-in' className='registerLink'>
          Sign In Instead
        </Link>
      </div>
    </>
  )
}

export default SignUp
