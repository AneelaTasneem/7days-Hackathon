export default {
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Product Name',
        type: 'string',
        validation: Rule => Rule.required().min(3).max(100)
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text'
      },
      {
        name: 'price',
        title: 'Price',
        type: 'number',
        validation: Rule => Rule.required().positive()
      },
      {
        name: 'category',
        title: 'Category',
        type: 'reference',
        to: [{ type: 'category' }]
      },
      {
        name: 'stock',
        title: 'Stock',
        type: 'number',
        validation: Rule => Rule.required().min(0)
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image',
        options: { hotspot: true }
      },
      {
        name: 'createdAt',
        title: 'Created At',
        type: 'datetime',
        initialValue: new Date().toISOString()
      }
    ]
  };
  