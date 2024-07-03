import { fetchWithResponse, fetchWithoutResponse } from "./fetcher";

export function likeProduct(productId) {
    return fetchWithoutResponse(`products/${productId}/like`, {
      method: 'POST',
      headers: {
        Authorization: `Token ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
      },
    })
  }

  export function unLikeProduct(productId) {
    return fetchWithoutResponse(`products/${productId}/unlike`, {
      method: 'DELETE',
      headers: {
        Authorization: `Token ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
      },
    })
  }

    export function getLikedProducts() {
        return fetchWithResponse('products/liked', {
            headers: { Authorization: `Token ${localStorage.getItem('token')}` }
        })
    }