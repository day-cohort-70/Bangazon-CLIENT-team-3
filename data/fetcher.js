const API_URL = 'http://localhost:8000';

const checkErrorJson = async (response) => {
  if (!response.ok) {
    if (response.status === 401) {
      window.location.href = "/login";
    }
    const errorData = await response.json();
    throw new Error(errorData.message || 'Something went wrong');
  }
  return response.json();
};

const handleError = (err) => {
 
if (err.status === 404) {
    console.error('Resource not found:', err.message);
  }
  throw err; // Re-throw the error for further handling
};

export const fetchWithResponse = async (resource, options) => {
  try {
    const response = await fetch(`${API_URL}/${resource}`, options);
    return await checkErrorJson(response);
  } catch (error) {
    handleError(error);
  }
};

export const fetchWithoutResponse = async (resource, options) => {
  try {
    const response = await fetch(`${API_URL}/${resource}`, options);
    await checkErrorJson(response); // Check for errors but don't return the response
    return true; // Or any other indicator of success
  } catch (error) {
    handleError(error);
  }
};