import React, { FC } from 'react'
import Item from './item'

export interface IListProps {
  itemNum?: number
  className?: string
  itemClassName?: string
}
const List: FC<IListProps> = ({
  num = 3,
  className,
  itemClassName
}) => {
  const list: number[] = (() => {
    const res = []
    for(let i = 1; i < num + 1; i++) {
      res.push(i)
    }
    return res
  })()
  return (
    <div className={className}>
      {list.map(item => (
        <Item className={itemClassName}>{item}</Item>
      ))}
    </div>
  )
}

export default React.memo(List)
