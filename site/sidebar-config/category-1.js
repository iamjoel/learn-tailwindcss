const PREFIX = 'category-1'

const config = [
  {
    type: 'doc',
    label: '分类1',
    id: `${PREFIX}/nav`,
  },
  {
    type: 'category',
    label: '内容',
    items: [
      {
        type: 'doc',
        label: '按钮',
        id: `${PREFIX}/content/button`
      },
    ]
  }
]

module.exports = config
