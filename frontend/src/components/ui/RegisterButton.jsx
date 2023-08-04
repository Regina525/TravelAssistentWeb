import { Link } from 'react-router-dom'

const RegisterButton = () => {
  return (
    <Link
      target="_blank"
      href="#"
    >
      <div className=" border-spacing-2 cursor-pointer rounded-full border-2 px-6 py-2 text-lg font-medium text-white shadow-xl hover:translate-y-[-5px] hover:shadow-xl">
        Registar/Login
      </div>
    </Link>
  )
}

export default RegisterButton
