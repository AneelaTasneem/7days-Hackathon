
// Catagory Schema://

export default {
    name: 'category',
    title: 'Category',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Category Name',
        type: 'string',
        validation: Rule => Rule.required().min(2).max(50)
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text'
      },
      {
        name: 'createdAt',
        title: 'Created At',
        type: 'datetime',
        initialValue: new Date().toISOString()
      }
    ]
  };




  