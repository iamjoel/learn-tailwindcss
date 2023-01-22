const PREFIX = 'config'

const config = [
  {
    type: 'doc',
    label: '分类2',
    id: `${PREFIX}/nav`,
  },
  {
    type: 'category',
    label: '内容',
    items: [
      {
        type: 'doc',
        label: '页面1',
        id: `${PREFIX}/content/p-1`
      },
    ]
  }
]

module.exports = config
