function updateLastUserActivityTime() {
    return new Promise((resolve) => {
      setTimeout(() => {
        const lastActivityTime = new Date().toISOString();
        console.log(`User's last activity time: ${lastActivityTime}`);
        resolve();
      }, 1000);
    });
  }
  
  function createPost(post) {
    return new Promise((resolve) => {
      setTimeout(() => {
        post
        console.log('Post created:', post);
        resolve();
      }, 2000);
    });
  }
  
  function deleteLastPost() {
    return new Promise((resolve, reject) => {
      if (posts.length > 0) {
        const lastPost = posts.pop();
        console.log('Last post deleted:', lastPost);
        resolve();
      } else {
        reject('no posts to delete ');
      }
    });
  }
  
  const posts = [];
  
  const createPostPromise = createPost({ title: 'Post Five', body: 'This is Post Five' });
  const updateLastUserActivityTimePromise = updateLastUserActivityTime();
  
  Promise.all([createPostPromise, updateLastUserActivityTimePromise])
    .then(() => {
      console.log('Both promises resolved ');
      console.log('All posts:', posts);
      return deleteLastPost();
    })
    .then(() => {
      console.log('Post deletion resolved successfully');
      console.log('New set of posts:', posts);
    })
    .catch((error) => {
      console.log('Error occurred:', error);
    });
  