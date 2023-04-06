const blockContent = {
  title: 'Block Content',
  name: 'blockContent',
  type: 'array',
  of: [
    {
      title: 'Block',
      type: 'block',
    },
    {
      type: 'image',
      options: {hotspot: true},
    },
  ],
}

export default blockContent
