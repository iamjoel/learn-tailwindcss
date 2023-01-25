---
hide_table_of_contents: true
---

import NavList from '@site/src/components/nav-list'

# 概览
<div style={{overflowX: 'auto'}}>
  <div class='
    flex justify-center 
    rounded-lg p-4 bg-stripes-indigo 
    space-x-4
  '
    style={{width: 980}}
  >
    <div class='space-y-3'>
      <NavList
        title="布局"
        list={[
          'Flex 布局',
          'Grid 布局',
          'Position 布局',
          '盒模型',
          '表格布局',
          '列布局',
        ]}
      />
      <NavList
        title="尺寸"
        list={[
          '宽',
          '高',
        ]}
      />
      <NavList
        title="间距"
        list={[
          'Margin',
          'Padding',
        ]}
      />
    </div>
    <div class='space-y-3'>
      <NavList
        title="图片 & 背景"
        list={[
          '常规：位置等',
          'background-size；object-fit',
          '背景色渐变',
          '滤镜',
        ]}
      />
    </div>
    <div class='space-y-3'>
      <NavList
        title="文字"
        list={[
          '常规： 字体，大小，颜色',
          '行高',
          '超出隐藏',
          '英文转大小写',
        ]}
      />
      <NavList
        title="边框"
        list={[
          'border',
          '圆角',
          '盒阴影',
          'outline'
        ]}
      />
    </div>
    <div class='space-y-3'>
      <NavList
        title="效果"
        list={[
          '渐变',
          '动画',
          '变形'
        ]}
      />
      <NavList
        title="杂项"
        list={[
          '鼠标',
          '滚动条',
          '选中(User Select)',
        ]}
      />
    </div>
  </div>
</div>


## 进行中
- [ ] Flex
- [ ] 其他布局

## 已完成
- [x] Flex
