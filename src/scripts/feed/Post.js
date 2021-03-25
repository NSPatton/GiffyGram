import { getLoggedInUser, getLikes } from "../data/DataManager.js"


const getNumberOfLikes = (postId) => {
  getLikes(postId)
  .then(response => {
    document.querySelector(`#likes__${postId}`).innerHTML = `👍 ${response.length}`;
  })
}


export const Post = (postObject) => {
  return `
    <section class="post">
      <header>
          <h2 class="post__title">${postObject.title}</h2>
      </header>
      <p> posted by: ${postObject.user.name}</p>
      <img class="post__image" src="${postObject.imageURL}" />
      <p>${postObject.description}</p>
      <button id="like__${postObject.id}">Like</button>
      <p id="likes__${postObject.id}">👍 ${getNumberOfLikes(postObject.id)}</p>
      ${postObject.user.id === getLoggedInUser().id
        ?`<button id="edit__${postObject.id}">Edit</button>
        <button id="delete__${postObject.id}">Delete</button>`

      :""
}
    </section>
  `
}