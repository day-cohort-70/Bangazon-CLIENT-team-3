const API_URL = 'http://localhost:8000';

const checkErrorJson = async (response) => {
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Something went wrong');
  }
  return response.json(); // Ensure to return the parsed JSON
};

const catchError = (err) => {
  if (err.message === '401') {
    window.location.href = "/login";
  } else if (err.message === '404') {
    throw Error(err.message);
  } else {
    throw err; // Re-throw other errors so they can be handled by the caller
  }
};

export const fetchWithResponse = async (resource, options) => {
  try {
    const response = await fetch(`${API_URL}/${resource}`, options);
    return await checkErrorJson(response);
  } catch (error) {
    catchError(error);
    throw error; // Ensure the error is thrown so it can be caught by the caller
  }
};

export const fetchWithoutResponse = async (resource, options) => {
  try {
    const response = await fetch(`${API_URL}/${resource}`, options);
    return checkError(response);
  } catch (error) {
    catchError(error);
    throw error; // Ensure the error is thrown so it can be caught by the caller
  }
};
