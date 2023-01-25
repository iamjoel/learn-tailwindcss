---
hide_table_of_contents: true
---

import SnippetGroup from '@site/src/components/code/snippet-group'

# 常用代码
<!-- https://devhints.io/react -->

<div className="columns-sm px-4 gap-4 bg-gray-200">
  <SnippetGroup
    title='Flex'
    list={[
      'flex flex-wrap',
      'flex-column flex-row',
      'gap-1',
      'grow-1',
      'shrink-0',
      'justify-center justify-between justify-around',
      'justify-items-center',
      'justify-self-center'
    ]}
  />

  <SnippetGroup
    title='尺寸'
    list={[
      'w-[px|1|1.5|2...12|14|20|24...96]',
      'w-[21px] w-[10rem]',
      'w-full w-1/2 w-[1/[1|2|3|4|5|6|12]]',
      'w-min w-max w-fit',
      'h-[px|1|1.5|2...12|14|20|24...96]',
    ]}
  />

  <SnippetGroup
    title='字体'
    list={[
      'text-xs text-sm text-base/*16px 默认值*/ text-lg text-xl',
      'font-light font-medium font-bold',
      'leading-[3-10] leading-tight leading-normal leading-relaxed',
      'text-center text-justify',
      'text-[color name]',
    ]}
  />

  <SnippetGroup
    title='背景 & 图片'
    list={[
      'bg-[color name]',
      'bg-center bg-left-center bg-right-bottom',
      'bg-no-repeat bg-repeat-x',
      'bg-cover bg-contain bg-auto',
      'bg-gradient-to-r from-cyan-500 to-blue-500',
    ]}
  />

  <SnippetGroup
    title='边框'
    list={[
      'border border-2 border-4',
      'border-solid border-dashed',
      'border-[颜色名]',
      'outline 类似'
    ]}
  />

  <SnippetGroup
    title='其他'
    list={[
      'rounded-sm rounded-md rounded-full',
      'shadow-sm shadow shadow-lg',
      'transition transition-all',
      'duration-[75|100|150...]/*毫秒*/'
    ]}
  />
</div>