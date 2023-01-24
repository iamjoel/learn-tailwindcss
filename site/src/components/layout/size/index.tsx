import React, { FC } from 'react'
import Item from '@site/src/components/demo/item'

const widthList = ['w-1', 'w-2', 'w-24']
export const WidthFixed: FC = ({
}) => {
  return (
    <div className='space-y-4 font-mono font-bold text-xs text-center text-white'>
      {widthList.map(cls => (
        <Item
          key={cls}
          widthClassName={cls}
          heightClassName='h-4'
        >
          {cls}
        </Item>
      ))}
    </div>
  )
}
