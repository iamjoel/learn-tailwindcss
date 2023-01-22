import React, { FC } from 'react'
import cn from 'clsx'

interface IItemProps {
  className?: string
  children?: JSX.Element
}

const Item: FC<IItemProps> = ({
  className,
  children,
}) => {
  return (
    <div className={cn(`
      flex justify-center items-center
      rounded-lg
      w-14 h-14
      bg-indigo-500 
      text-white
    `, className)}>{children}</div>
  )
}

export default Item
