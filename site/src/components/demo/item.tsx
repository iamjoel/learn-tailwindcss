import React, { FC } from 'react'
import cn from 'clsx'

interface IItemProps {
  widthClassName?: string,
  heightClassName?: string,
  className?: string
  children?: JSX.Element
}

const Item: FC<IItemProps> = ({
  widthClassName = 'w-14',
  heightClassName = 'h-14',
  className,
  children,
}) => {
  return (
    <div className={cn(`
      flex justify-center items-center
      rounded-lg
      ${widthClassName} ${heightClassName}
      bg-indigo-500 
      text-white
    `, className)}>{children}</div>
  )
}

export default Item
