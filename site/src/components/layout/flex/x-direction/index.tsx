import React, { FC } from 'react'
import List from '@site/src/components/demo/list'

export const Center: FC = ({
}) => {
  return (
    <List className='
      flex justify-center
      bg-stripes-indigo rounded-lg
      space-x-4
    ' />
  )
}

export const Justify: FC = ({
}) => {
  return (
    <List className='flex justify-between bg-stripes-indigo rounded-lg' />
  )
}

export const Evenly: FC = ({
}) => {
  return (
    <List className='flex justify-evenly bg-stripes-indigo rounded-lg' />
  )
}

