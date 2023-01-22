import Demo from '@site/src/components/demo'
import Code from '@site/src/components/code'
import {
  Center as XCenter,
  Justify as XJustify,
  Evenly as XEvenly,
} from '@site/src/components/layout/flex/x-direction'

# Flex 布局
## 水平方向
### 水平居中
<Demo>
  <XCenter />
</Demo>

<Code content={
`<div className='
  flex justify-center
  space-x-4
'><!-- items --></div>
`}
/>

### 两端对齐
<Demo>
  <XJustify />
</Demo>

<Code content={
`<div className='flex justify-between'><!-- items --></div>
`}
/>

### 均匀分布
<Demo>
  <XEvenly />
</Demo>

<Code content={
`<div className='flex justify-evenly'><!-- items --></div>
`}
/>


## 垂直方向

