// Using HTML modules, we'll import this project:
// https://github.com/octokit/graphql.js/
import { graphql } from "https://cdn.skypack.dev/@octokit/graphql";

// get the value of the input
var getSubmitButton = document.querySelector('#submit');
var getInputValue;

//gets input of the value and appends it to the query variable
getSubmitButton.onclick = function(event){      
  event.preventDefault(); 
  getInputValue = document.querySelector('#input').value;
  console.log(getInputValue)

  const query = `
  {
    user(login: "${getInputValue}") {
      login
      avatarUrl
      name
      bio
      repositories(first: 20, isFork: false) {
        nodes {
          name
          url
          updatedAt
          primaryLanguage {
            color
            name
          }
        }
      }
    }
  }  
  `

    // the github tokem
  const token = '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'
  const auth = {
      headers: {
          authorization: 'token ' + token
      }
  }
  // read the the api response with graphql and set local storage to the item
  async function makeRequest(query, auth) {
    var mystring  = await graphql(query, auth);
    var use =  JSON.stringify(mystring) 
    var js =  JSON.parse(use)
    localStorage.setItem('user',JSON.stringify(js.user))
    window.location.href = 'profile.html'
    return js.user
  
  
  
  }
  
  console.log(makeRequest(query, auth))
}



