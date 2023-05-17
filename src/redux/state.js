

let state = {
  profilePage: {
    posts: [
      { id: 1, message: 'Hi, how are you?', likesCount: '15' },
      { id: 2, message: "It's my first post", likesCount: '20' },
      { id: 3, message: 'Hi, how are you?', likesCount: '15' },
      { id: 4, message: 'Hi, how are you?', likesCount: '15' },
    ],

  },
  dialogsPage: {
    messages: [
      { id: 1, message: 'Hi' },
      { id: 2, message: 'How is your React?' },
      { id: 3, message: 'Well' },
      { id: 4, message: 'Yo' },
      { id: 5, message: 'Yo' }
    ],
    dialogs: [
      { id: 1, name: 'Rustem', picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuq9ktuJfrCQGVovXo1ZBYu8n-ktMCJSxFIg&usqp=CAU' },
      { id: 2, name: 'Alsu' },
      { id: 3, name: 'Mama' },
      { id: 4, name: 'Gulnaz' },
      { id: 5, name: 'Papa' }
    ],

  },
  sidebarPage: {
    friends: [
      { id: 1, name: 'Rustem', picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuq9ktuJfrCQGVovXo1ZBYu8n-ktMCJSxFIg&usqp=CAU' },
      { id: 2, name: 'Alsu', picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuq9ktuJfrCQGVovXo1ZBYu8n-ktMCJSxFIg&usqp=CAU' },
      { id: 3, name: 'Mama', picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuq9ktuJfrCQGVovXo1ZBYu8n-ktMCJSxFIg&usqp=CAU' },
      { id: 4, name: 'Gulnaz', picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuq9ktuJfrCQGVovXo1ZBYu8n-ktMCJSxFIg&usqp=CAU' },
      { id: 5, name: 'Papa', picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuq9ktuJfrCQGVovXo1ZBYu8n-ktMCJSxFIg&usqp=CAU' },
    ],
  }
}

export let addPost = (postMessage) => {
  debugger;
  let newPost = {
    id: 5,
    message: postMessage,
    likesCount: 0,
  };
  state.profilePage.posts.push(newPost);

}

export default state;