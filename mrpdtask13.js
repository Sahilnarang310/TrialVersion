// using promises

const groceries = {
    butter: false,
  };
  
  const getColdDrinks = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Cold drinks');
      }, 5000);
    });
  };
  
  const buyGroceries = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        groceries.butter = true;
        resolve('Groceries bought');
      }, 2000);
    });
  };
  
  buyGroceries()
    .then(() => getColdDrinks())
    .then((drink) => console.log(`Husband bought butter and ${drink}`))
    .catch((err) => console.log(err));
//   using assing await
const groceries = {
    butter: false,
  };
  
  const getColdDrinks = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Cold drinks');
      }, 5000);
    });
  };
  
  const buyGroceries = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        groceries.butter = true;
        resolve('Groceries bought');
      }, 2000);
    });
  };
  
  const husbandBuysGroceries = async () => {
    try {
      await buyGroceries();
      const drink = await getColdDrinks();
      console.log(`Husband bought butter and ${drink}`);
    } catch (err) {
      console.log(err);
    }
  };
  
  husbandBuysGroceries();

//   create post and delete post function as asyn/await
  
  const posts = [];

const createPost = async (post) => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(post)
    });
    const data = await response.json();
    posts.push(data);
    console.log('Post created:', data);
  } catch (err) {
    console.log(err);
  }
};

const deletePost = async (postId) => {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
      method: 'DELETE'
    });
    const data = await response.json();
    const index = posts.findIndex((post) => post.id === postId);
    if (index !== -1) {
      posts.splice(index, 1);
      console.log('Post deleted:', data);
    } else {
      console.log('Post not found');
    }
  } catch (err) {
    console.log(err);
  }
};

createPost({ title: 'My first post', body: 'This is my first post.' });
deletePost(1);
