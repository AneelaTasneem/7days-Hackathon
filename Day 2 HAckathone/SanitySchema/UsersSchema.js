export default {
    name: 'user',
    title: 'User',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Full Name',
        type: 'string',
        validation: Rule => Rule.required().min(3).max(100)
      },
      {
        name: 'email',
        title: 'Email',
        type: 'string',
        validation: Rule => Rule.required().email()
      },
      {
        name: 'password',
        title: 'Password',
        type: 'string',
        validation: Rule => Rule.required().min(8)
      },
      {
        name: 'address',
        title: 'Address',
        type: 'text'
      },
      {
        name: 'phone',
        title: 'Phone',
        type: 'string',
        validation: Rule => Rule.required().regex(/^\+?\d{10,15}$/, { name: 'Phone Number' })
      },
      {
        name: 'createdAt',
        title: 'Created At',
        type: 'datetime',
        initialValue: new Date().toISOString()
      }
    ]
  };
  