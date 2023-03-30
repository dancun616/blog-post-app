import React from 'react';

class PostsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(posts => this.setState({ posts }));
  }

  handleDelete = postId => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
      method: 'DELETE'
    })
      .then(response => response.json())
      .then(() => {
        const posts = this.state.posts.filter(post => post.id !== postId);
        this.setState({ posts });
      });
  };

  handleEdit = post => {
    // Your edit logic here
  };

  render() {
    return (
      <div>
        <h1>Posts</h1>
        <ul>
          {this.state.posts.map(post => (
            <li key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
              <button onClick={() => this.handleEdit(post)}>Edit</button>
              <button onClick={() => this.handleDelete(post.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default PostsPage;
