import React from 'react'

const Button = ({text}) => {
  return (
    <button
    type="submit"
    className="rounded-full bg-sky-500 hover:bg-sky-700 py-1 px-3  m-2 text-slate-100 hover:scale-110 transition ease-in-out delay-150"
  >
   {text}
  </button>
  )
}

export default Button