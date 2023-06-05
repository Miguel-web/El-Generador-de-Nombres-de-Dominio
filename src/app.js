/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

// window.onload = function() {
//   //write your code here
//   document.querySelector("#domains").innerHTML = domainGenerator();
// };

// const pronouns = ["the", "our"];
// const adjs = ["great", "big"];
// const nouns = ["jogger", "racoon"];
// const extens = [".com", ".es", ".io", ".us"];

// const domainGenerator = () => {
//   for (let pronoun of pronouns) {
//     for (let adj of adjs) {
//       for (let noun of nouns) {
//         for (let exten of extens) {
//           console.log(pronoun, adj, noun, exten);
//         }
//       }
//     }
//   }
// };
// domainGenerator();

window.onload = function() {
  //write your code here
  document.querySelector("#domains").innerHTML = domainGenerator();
};

const pronouns = ["the", "our"];
const adjs = ["great", "big"];
const nouns = ["jogger", "racoon"];
const extens = [".com", ".es", ".io", ".us"];

const domainGenerator = () => {
  let dominio = "";

  for (let pronoun of pronouns) {
    for (let adj of adjs) {
      for (let noun of nouns) {
        for (let exten of extens) {
          dominio += `<p>${pronoun} ${adj} ${noun} ${exten}</p>`;
        }
      }
    }
  }
  return dominio;
};
