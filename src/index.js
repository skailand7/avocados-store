/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

console.log("Happy hacking :) ---");
//Web API
const baseUrl = "https://platzi-avo.vercel.app/";
//Conectarnos al Server
const items = [];
const appNode = document.querySelector("#app");

//API PARA CAMBIOS EN MONEDA
const formatPrice = (price) => {
  const newPrice = new window.Intl.NumberFormat("en-EN", {
    style: "currency",
    currency: "USD",
  }).format(price);
  return newPrice;
};
window
  .fetch(`${baseUrl}api/avo`)
  //Procesar la respuesta y convertirla en JSON
  .then((respuesta) => respuesta.json())
  //JSON-> Data -> Renderizar info browser
  .then((responseJson) => {
    responseJson.data.forEach((element) => {
      const image = document.createElement("img");
      image.src = `${baseUrl}${element.image}`;

      const name = document.createElement("h2");
      name.textContent = element.name;
      name.className = "text-2xl ";

      const price = document.createElement("div");
      price.textContent = formatPrice(element.price);
      price.className =
        "inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-indigo-100 bg-indigo-700 rounded";

      const container = document.createElement("div");
      container.append(image, name, price);
      container.className =
        "container max-w-sm rounded overflow-hidden shadow-lg";
      items.push(container);
    });
    appNode.append(...items);
  });

console.log(...items);

//const url2 = "https://platzi-avo.vercel.app/api/avo";

// //web api
// async function fetchData() {
//   const response = await fetch(url),
//     data = await response.json(),
//     allItems = [];

//   data.data.forEach((item) => {
//     // create image
//     const image = document.createElement("img");
//     // create title
//     const title = document.createElement("h2");
//     // create price
//     const price = document.createElement("div");

//     const container = document.createElement("div");
//     container.append(image, title, price);

//     allItems.push(container);
//   });

//   document.body.append(...allItems);
// }

// fetchData();
