console.log("Hello World!"); //Aula1
/* ======================
          JS Basics
==========================*/

// const HeadingOne = document.querySelector(".heading-primary");
// const myName = "Igor Dantas";
// console.log(myName);

// HeadingOne.addEventListener("click", () => {
//   HeadingOne.style.color = "purple";
//   HeadingOne.style.backgroundColor = "red";
//   HeadingOne.style.padding = "1.6rem";
//   HeadingOne.style.borderRadius = "2rem";
//   HeadingOne.innerText = myName;
// });

/*======================= 
  Footer DateYear Updated
  ======================= 
*/
const YearNowEl = document.querySelector("#YearNowDate");
const YearUpdated = new Date().getFullYear();
console.log(YearUpdated);
YearNowEl.textContent = YearUpdated;

/*======================= 
  Make mobile navigation Work
  ======================= 
*/
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerNavEl = document.querySelector(".header");
btnNavEl.addEventListener("click", () => {
  headerNavEl.classList.toggle("nav-open");
});
