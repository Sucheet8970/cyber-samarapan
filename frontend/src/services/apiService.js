// Define the base URL for your API
const API_URL = 'http://localhost:8082';

// Define individual endpoints
const SIGNUP_URL = `${API_URL}/signup/add`;
const LOGIN_URL = `${API_URL}/login`;
const FORUM_POST_URL = `${API_URL}/forum`;
const DELETE_POST_URL = `${API_URL}/forum`; // URL for deleting a post

// Function to sign up a user
export const signup = async (signupData) => {
  const response = await fetch(SIGNUP_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(signupData)
  });

  if (!response.ok) {
    const errorResponse = await response.json();
    throw new Error(errorResponse.message || 'Signup failed.');
  }

  return response.json();
};

// Function to log in a user
export const login = async (signinData) => {
  const response = await fetch(LOGIN_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(signinData)
  });

  if (!response.ok) {
    const errorResponse = await response.json();
    throw new Error(errorResponse.message || 'Login failed.');
  }

  return response.json();
};

// Function to create a new forum post
export const createForumPost = async (forumPostData) => {
  const response = await fetch(FORUM_POST_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(forumPostData)
  });

  if (!response.ok) {
    const errorResponse = await response.json();
    throw new Error(errorResponse.message || 'Failed to create forum post.');
  }

  return response.json();
};

// Function to fetch posts created by a specific user
export const fetchUserPosts = async (userId) => {
  const response = await fetch(`${FORUM_POST_URL}/user/${userId}`);
  if (!response.ok) {
    throw new Error('Failed to fetch user posts.');
  }
  return response.json();
};

export const fetchAllPosts = async () => {
  const response = await fetch(FORUM_POST_URL);
  if (!response.ok) {
    throw new Error('Failed to fetch forum posts.');
  }
  return response.json();
};


// Function to delete a forum post
export const deleteForumPost = async (postId) => {
  const response = await fetch(`${DELETE_POST_URL}/${postId}`, {
    method: 'DELETE'
  });

  if (!response.ok) {
    const errorResponse = await response.json().catch(() => ({})); // Handle empty or non-JSON response
    throw new Error(errorResponse.message || 'Failed to delete forum post.');
  }

  // Return some success message or response (if any)
  return response.text().then((text) => text ? JSON.parse(text) : {}); // Handle empty response
};
