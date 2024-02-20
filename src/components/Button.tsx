import { MouseEventHandler } from 'react'

interface Props {
  label: string,
  onclick: MouseEventHandler<HTMLButtonElement>
}

export default function button({label, onclick}: Props) {
  return (
    <button 
        onClick={onclick}
        className="mx-auto block border-purple-400 text-purple-400 border-2 font-bold rounded-xl mb-2 active:bg-purple-500 active:text-white acitve:outline-none acitve:border-none hover:text-purple-300 hover:border-purple-300 transition duration-300 ease-in-out active:outline-none active:border-none active:mb-3 active:mt-1">{label}
    </button>
  )
}