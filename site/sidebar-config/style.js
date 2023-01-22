const PREFIX = 'style'

const config = [
  {
    type: 'doc',
    label: '样式',
    id: `${PREFIX}/nav`,
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
    ]
  }
]

module.exports = config
