/**
 * Main logic module for what should happen on initial page load for Giffygram
 */

import { getUsers, getPosts } from "./data/DataManager.js";
import { PostList } from "./feed/PostList.js"
import { NavBar } from "./Nav/NavBar.js"
import { Footer } from "./Nav/Footer.js"

const applicationElement = document.querySelector(".giffygram");

applicationElement.addEventListener("click", (event) => {
    console.log('click edit');
    
    if (event.target.id.startWith("edit") ) {
        console.log("post clicked", event.target.id.split("--"))
        console.log("zero index value", event.target.id.split("--")[0])
        console.log("one index value, the id is", event.target.id.split("--")[1])
    }
})

applicationElement.addEventListener("change", event => {
    if (event.target.id === "yearSelection") {
      const yearAsNumber = parseInt(event.target.value)
  
      console.log(`User wants to see posts since ${yearAsNumber}`)
    }
  })

//Get a reference to the location on the DOM where the app will display
const showPostList = () => {
    const postElement = document.querySelector(".postList");
      getPosts().then((allPosts) => {
          postElement.innerHTML = PostList(allPosts);
      })
  }


  const showNavBar = () => {
    //Get a reference to the location on the DOM where the nav will display
    const navElement = document.querySelector("nav");
	navElement.innerHTML = NavBar();
}

const showFooter = () => {
    //Get a reference to the location on the DOM where the nav will display
    const footerElement = document.querySelector("footer");
	footerElement.innerHTML = Footer();
}
  
    //This function performs one, specific task.

    //1. Can you explain what that task is?
    //2. Are you defining the function here or invoking it?

const startGiffyGram = () => {
    showNavBar();
    showPostList();
    showFooter();
}
// Are you defining the function here or invoking it?
startGiffyGram();