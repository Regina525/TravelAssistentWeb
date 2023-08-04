const Button = (props) => {
    return (
      <div className="mt-10 cursor-pointer rounded-md bg-red px-4 py-2 text-center text-lg font-medium text-white shadow-xl hover:shadow-xl">
        <button>{props.nome}</button>
      </div>
    )
  }
  
  export default Button
  