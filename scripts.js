//Functions for Menu Items
const myMenu = document.getElementById('Menu-Section');
// console.log(myMenu)



function loadAllContent() {

    fetch("http://localhost:3000/menuItems")
        .then(response => response.json())
        .then(data => {
            data.forEach(menuitem => {
                const div = document.createElement("div")
                div.innerHTML = `
            <h3>${menuitem.name}</h3>
            <h3>${menuitem.price}</h3>
            `
                myMenu.append(div);
            })
        })
        
// let veggieItem = (element) => {
//     veganIngredient.innerHTML = '';
//     veganIngredient.insertAdjacentHTML('afterbegin', `
//    <section class="vegan-item">
//    <h4>Vegan Burger</h4>
//    <button onclick="showIngredients()">Show Ingredients</button>
//  </section>
//             `)
//  };
}
const menuSection = document.getElementById("Menu-Section");

menuSection.innerHTML = `
  <article id="Menu-Section">
    <h2>MENU</h2>
    <h3>Vegan/Veggie Menu</h3>

    <section class="vegan-item">
      <h4>Vegan Burger</h4>
    </section>

    <section class="menu-item">
      <h4>Veggie Pizza</h4>
    </section>

    <section class="menu-item">
      <h4>Quinoa Salad</h4>
    </section>
  </article>
`;


