const blockContent = {
  title: 'Block Content',
  name: 'blockContent',
  type: 'array',
  of: [
    {
      type: 'block',
      styles: [
        {title: 'Normal', value: 'normal'},
        {title: 'H1', value: 'h1'},
        {title: 'H2', value: 'h2'},
        {title: 'H3', value: 'h3'},
        {title: 'H4', value: 'h4'},
        {title: 'H5', value: 'h5'},
        {title: 'H6', value: 'h6'},
        {title: 'Quote', value: 'blockquote'}
      ],
      lists: [
        {title: 'Bullet', value: 'bullet'},
        {title: 'Numbered', value: 'numbered'}
      ],
      marks; [
        {title: 'Strong', value: 'string'},
        {title: 'Emphasis', value: 'em'},
        {title: 'Code', value: 'code'}
      ]
    },
    {
      type: 'image',
      options: {hotspot: true},
    },
    {
      type: 'code',
    }
  ],
}

export default blockContent
