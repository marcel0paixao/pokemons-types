import { MouseEventHandler, PropsWithChildren } from 'react'
import Button from './Button';

interface Props {
  title?: string,
  button?: string,
  subtitle?: string,
  image?: string,
  className?: string,
  buttonAction?: MouseEventHandler<HTMLButtonElement> 
}

export default function card({title, button, image, subtitle, className, buttonAction, children}: PropsWithChildren<Props>) {
  return (
    <div className={
      "w-72 m-4 border-4 border-purple-600 rounded-xl p-3 hover:shadow-xl hover:shadow-purple-400 text-purple-400 hover:text-purple-300 ease-ion-out duration-500 "
      + className ?? ''
      }>
      {image && <img src={image} className="w-full rounded-xl h-64 border-2 border-purple-400" alt={title ?? 'card-image'} />}

      <div>
        {title && <h2 className={`capitalize text-xl font-extrabold text-center mt-2 ${button ? 'mb-4' : ''}`}>{title}</h2>}
        {subtitle && <p>{subtitle}</p>}

        {button && buttonAction && <Button onclick={buttonAction} label={button} />}

        {children}
      </div>
    </div>
  );
}