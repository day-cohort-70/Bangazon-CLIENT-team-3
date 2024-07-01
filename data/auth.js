import { fetchWithResponse } from "./fetcher"

export function login(user) {
  return fetchWithResponse('login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  })
}

export async function register(user) {
  return await fetchWithResponse('register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  });
}

export function getUserProfile() {
  return fetchWithResponse('profile', {
    headers: {
      Authorization: `Token ${localStorage.getItem('token')}`,
    }
  })
}
