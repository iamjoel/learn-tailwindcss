const PREFIX = 'style'

const config = [
  {
    type: 'doc',
    label: '概览',
    id: `${PREFIX}/overview`,
  },
  {
    type: 'doc',
    label: '常用代码',
    id: `${PREFIX}/cheat-sheet`,
  },
  {
    type: 'category',
    label: '布局',
    items: [
      {
        type: 'doc',
        label: 'Flex 布局',
        id: `${PREFIX}/layout/flex`
      },
      {
        type: 'doc',
        label: '尺寸',
        id: `${PREFIX}/layout/size`
      },
    ]
  },
  {
    type: 'category',
    label: '颜色',
    items: [
      {
        type: 'doc',
        label: '支持的颜色',
        id: `${PREFIX}/color/support-list`
      },
    ]
  }
]

module.exports = config
