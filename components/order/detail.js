import Table from "../table"


export default function CartDetail({ cart, updateProductQuantity }) {
  const headers = ['Product', 'Description', 'Price', 'Quantity', '']
  const footers = ['Total', '', cart.total, '', '']

  return (
    <Table headers={headers} footers={footers}>
      {
        cart.line_items?.map(item => {
          const { product, cart_quantity } = item;
          return (
            <tr key={item.id}>
              <td>{product.name}</td>
              <td>{product.description}</td>
              <td>{product.price}</td>
              <td>
                <div className="quantity-control">
                  <button 
                    className="button is-small is-danger mx-2" 
                    onClick={() => updateProductQuantity(item.id, cart_quantity - 1)} 
                    disabled={cart_quantity <= 1}
                  >
                    -
                  </button>
                  <span className="mx-2">{cart_quantity}</span>
                  <button 
                    className="button is-small is-success mx-2" 
                    onClick={() => updateProductQuantity(item.id, cart_quantity + 1)}
                  >
                    +
                  </button>
                </div>
              </td>
              <td></td>
            </tr>
          )
        })
      }
    </Table>
  )
}
