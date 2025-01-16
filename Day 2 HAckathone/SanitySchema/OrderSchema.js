export default {
    name: 'order',
    title: 'Order',
    type: 'document',
    fields: [
      {
        name: 'user',
        title: 'User',
        type: 'reference',
        to: [{ type: 'user' }]
      },
      {
        name: 'orderDate',
        title: 'Order Date',
        type: 'datetime',
        initialValue: new Date().toISOString()
      },
      {
        name: 'totalAmount',
        title: 'Total Amount',
        type: 'number',
        validation: Rule => Rule.required().positive()
      },
      {
        name: 'status',
        title: 'Status',
        type: 'string',
        options: {
          list: ['Pending', 'Shipped', 'Delivered', 'Cancelled']
        }
      },
      {
        name: 'orderDetails',
        title: 'Order Details',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              { name: 'product', title: 'Product', type: 'reference', to: [{ type: 'product' }] },
              { name: 'quantity', title: 'Quantity', type: 'number', validation: Rule => Rule.required().min(1) },
              { name: 'price', title: 'Price', type: 'number', validation: Rule => Rule.required().positive() }
            ]
          }
        ]
      }
    ]
  };
  