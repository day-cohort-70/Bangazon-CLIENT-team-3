import { fetchWithResponse, fetchWithoutResponse } from './fetcher'

export function getCart() {
  return fetchWithResponse('profile/cart', {
    headers: {
      Authorization: `Token ${localStorage.getItem('token')}`
    }
  })
}

export function getOrders() {
  return fetchWithResponse('orders', {
    headers: {
      Authorization: `Token ${localStorage.getItem('token')}`
    }
  })
}

export function completeCurrentOrder(orderId, paymentTypeId) {
  return fetchWithResponse(`orders/${orderId}`, {
    method: 'PUT',
    headers: {
      Authorization: `Token ${localStorage.getItem('token')}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ payment_type: parseInt(paymentTypeId) })
  })
}

export function updateProductQuantityInCart(productId, newQuantity) {
  return fetchWithResponse('profile/cart', {
    method: 'PUT',
    headers: {
      Authorization: `Token ${localStorage.getItem('token')}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ id: productId, cart_quantity: newQuantity })
  })
}

export function removeProductFromOrder(id) {
  return fetchWithoutResponse(`lineitems/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Token ${localStorage.getItem('token')}`
    }
  })
}
