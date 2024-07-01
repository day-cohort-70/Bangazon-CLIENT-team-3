const API_URL = 'http://localhost:8000';

const checkError = (res) => {
  if (!res.ok) {
    throw Error(res.status);
  }
  return res
}

const checkErrorJson = (res) => {
  if (!res.ok) {
    throw Error(res.status);
  } else {
    return res.json()
  }
}

const catchError = (err) => {
  if (err.status === 401) {
    window.location.href = "/login"
  }
  if (err.status === 404) {
    throw Error(err.message);
  }
}

export const fetchWithResponse = (resource, options) => fetch(${API_URL}/${resource}, options)
  .then(checkErrorJson)
  .catch(catchError)

export const fetchWithoutResponse = (resource, options) => fetch(${API_URL}/${resource}, options)
  .then(checkError)
  .catch(catchError)