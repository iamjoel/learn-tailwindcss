import React, { FC } from 'react'
import {depthArr, colorConfig} from './color-config'

export interface IColorItemProps {
  name: string
  value: string[]
}
// 响应式写的真晚上：https://tailwindcss.com/docs/customizing-colors
const ColorItem: FC<IColorItemProps> = ({
  name,
  value
}) => {
  return (
    <div className='flex flex-col space-y-3 sm:flex-row text-xs sm:space-y-0 sm:space-x-4'>
      <div className="w-16 shrink-0">
        <div className="h-10 flex flex-col justify-center">
          <div className="text-sm font-semibold text-slate-900">{name}</div>
        </div>
      </div>

      {/* value list */}
      <div className='min-w-0 flex-1 grid grid-cols-5 2xl:grid-cols-10 gap-x-4 gap-y-3 2xl:gap-x-2'>
      {value.map((color, index) => (
        <div className='relative flex' key={color}>
          <div className='space-y-1.5 cursor-pointer'>
            <div 
              className='h-10 w-full rounded'
              style={{
                backgroundColor: color
              }}
            ></div>
            <div
              className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block"
            >
              <div className="w-6 font-medium text-slate-900 2xl:w-full">{depthArr[index]}</div>
              <div className="text-slate-500 font-mono lowercase">{color}</div>
            </div>
          </div>
        </div>
      ))}
      </div>
    </div>
  )
}

const SupportList: FC = () => {
  return (
    <div className='grid grid-cols-1 gap-8'>
      {colorConfig.map(item => (
        <ColorItem
          key={item.name}
          name={item.name}
          value={item.value}
        />
      ))}
    </div>
  )
}
export default React.memo(SupportList)
