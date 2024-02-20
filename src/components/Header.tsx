import { MouseEventHandler } from "react"

interface Props {
    title: string,
    subtitle?: string,
    backAction?: MouseEventHandler<HTMLButtonElement> 
}

export default function Header({title, backAction, subtitle}: Props) {
  return (
    <div className="font-extrabold text-purple-400 flex mx-auto">
        {backAction && <span className="mt-5 mr-6 text-2xl cursor-pointer px-4 py-2 rounded-md border border-purple-500 h-max hover:bg-purple-500 hover:text-white transition duration-300" onClick={backAction}>&lt;</span>}
        <h1 className="w-full mt-4 mb-8">{title}</h1>
        <p>{subtitle}</p>
    </div>
  )
}