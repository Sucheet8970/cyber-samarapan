import React, { useState, useEffect } from 'react';
import { createForumPost, fetchAllPosts, deleteForumPost } from '../services/apiService';
import { FaThumbsUp, FaThumbsDown, FaTrashAlt } from 'react-icons/fa';
import './ForumPage.css';

function ForumPage() {
  const [forumPostData, setForumPostData] = useState({ title: '', content: '' });
  const [posts, setPosts] = useState([]);
  const [showPosts, setShowPosts] = useState(false);
  const [likes, setLikes] = useState({});
  const [dislikes, setDislikes] = useState({});

  const fetchPosts = async () => {
    try {
      const postsData = await fetchAllPosts();
      setPosts(postsData);
      initializeCounters(postsData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []); // Fetch posts when the component mounts

  const initializeCounters = (postsData) => {
    const likesObj = {};
    const dislikesObj = {};
    postsData.forEach(post => {
      likesObj[post.id] = 0;
      dislikesObj[post.id] = 0;
    });
    setLikes(likesObj);
    setDislikes(dislikesObj);
  };

  const handleChange = (e) => {
    setForumPostData({ ...forumPostData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createForumPost(forumPostData);
      alert('Forum post created successfully.');
      setForumPostData({ title: '', content: '' });
      fetchPosts(); // Fetch updated posts after creating a new post
    } catch (error) {
      alert(error.message);
    }
  };

  const handleDelete = async (postId) => {
    try {
      await deleteForumPost(postId);
      alert('Forum post deleted successfully.');
      fetchPosts(); // Fetch updated posts after deleting a post
    } catch (error) {
      alert(error.message);
    }
  };

  const handleLike = async (postId) => {
    setLikes({ ...likes, [postId]: likes[postId] + 1 });
    // Call your API to update likes on the server
  };

  const handleDislike = async (postId) => {
    setDislikes({ ...dislikes, [postId]: dislikes[postId] + 1 });
    // Call your API to update dislikes on the server
  };

  const togglePostsVisibility = () => {
    setShowPosts(!showPosts);
  };

  return (
    <div className="forum-page"> 
    <div className="forum-container">
      <h1>Create a Forum Post</h1>
      <form onSubmit={handleSubmit} className="forum-form">
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={forumPostData.title}
          onChange={handleChange}
          className="input-title"
        />
        <textarea
          name="content"
          placeholder="Content"
          value={forumPostData.content}
          onChange={handleChange}
          className="input-content"
        />
        <button type="submit" className="btn-submit">Create Post</button>
      </form>
      <button onClick={togglePostsVisibility} className="btn-toggle-posts">
        {showPosts ? 'Hide Posts' : 'Show All Posts'}
      </button>
      {showPosts && (
        <div className="posts-container">
          <h2>All Posts</h2>
          {posts.map(post => (
            <div key={post.id} className="post-card">
              <h3>{post.title}</h3>
              <p>{post.content}</p>
              <div className="post-actions">
                <button onClick={() => handleLike(post.id)} className="btn-like">
                  <FaThumbsUp /> : {likes[post.id]}
                </button>
                <button onClick={() => handleDislike(post.id)} className="btn-dislike">
                  <FaThumbsDown /> : {dislikes[post.id]}
                </button>
                <button onClick={() => handleDelete(post.id)} className="btn-delete"><FaTrashAlt /></button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
    </div>
  );
}

export default ForumPage;
