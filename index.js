const storeData = [
  {
    id: "001-beetroot",
    name: "Beetroot",
    price: 1.4,
    image_src: "assets/icons/001-beetroot.svg"
  },
  {
    id: "002-carrot",
    name: "Carrot",
    price: 1.5,
    image_src: "assets/icons/002-carrot.svg"
  },
  {
    id: "003-apple",
    name: "Apple",
    price: 1.65,
    image_src: "assets/icons/003-apple.svg"
  },
  {
    id: "004-apricot",
    name: "Apricot",
    price: 1.75,
    image_src: "assets/icons/004-apricot.svg"
  },
  {
    id: "005-avocado",
    name: "Avocado",
    price: 1.8,
    image_src: "assets/icons/005-avocado.svg"
  },
  {
    id: "006-bananas",
    name: "Bananas",
    price: 1.45,
    image_src: "assets/icons/006-bananas.svg"
  },
  {
    id: "007-bell-pepper",
    name: "Bell-pepper",
    price: 1.7,
    image_src: "assets/icons/007-bell-pepper.svg"
  },
  {
    id: "008-berry",
    name: "Berry",
    price: 1.6,
    image_src: "assets/icons/008-berry.svg"
  },
  {
    id: "009-blueberry",
    name: "Blueberry",
    price: 1.95,
    image_src: "assets/icons/009-blueberry.svg"
  },
  {
    id: "010-eggplant",
    name: "Eggplant",
    price: 1.35,
    image_src: "assets/icons/010-eggplant.svg"
  }
];

// console.log(data);
const cartData = [
  // {
  //   item: {
  //     id: "001-beetroot",
  //     name: "Beetroot",
  //     price: 1.4,
  //     image_src: "assets/icons/001-beetroot.svg"
  //   },
  //   quantity: 4
  // },
  // {
  //   item: {
  //     id: "002-carrot",
  //     name: "Carrot",
  //     price: 1.5,
  //     image_src: "assets/icons/002-carrot.svg"
  //   },
  //   quantity: 5
  // },
  // {
  //   item: {
  //     id: "003-apple",
  //     name: "Apple",
  //     price: 1.65,
  //     image_src: "assets/icons/003-apple.svg"
  //   },
  //   quantity: 6
  // },
  // {
  //   item: {
  //     id: "004-apricot",
  //     name: "Apricot",
  //     price: 1.75,
  //     image_src: "assets/icons/004-apricot.svg"
  //   },
  //   quantity: 7
  // },
  // {
  //   item: {
  //     id: "005-avocado",
  //     name: "Avocado",
  //     price: 1.8,
  //     image_src: "assets/icons/005-avocado.svg"
  //   },
  //   quantity: 8
  // },
  // {
  //   item: {
  //     id: "006-bananas",
  //     name: "Bananas",
  //     price: 1.45,
  //     image_src: "assets/icons/006-bananas.svg"
  //   },
  //   quantity: 4
  // },

  // {
  //   item: {
  //     id: "007-bell-pepper",
  //     name: "Bell Pepper",
  //     price: 1.7,
  //     image_src: "assets/icons/007-bell-pepper.svg"
  //   },
  //   quantity: 7
  // },

  // {
  //   item: {
  //     id: "008-berry",
  //     name: "Berry",
  //     price: 1.6,
  //     image_src: "assets/icons/008-berry.svg"
  //   },
  //   quantity: 6
  // },

  // {
  //   item: {
  //     id: "009-blueberry",
  //     name: "Blueberry",
  //     price: 1.95,
  //     image_src: "assets/icons/009-blueberry.svg"
  //   },
  //   quantity: 9
  // },

  // {
  //   item: {
  //     id: "010-eggplant",
  //     name: "Eggplant",
  //     price: 1.35,
  //     image_src: "assets/icons/010-eggplant.svg"
  //   },
  //   quantity: 3
  // }
];

function addToCart(storeItem, cartData) {
  let foundItem = false

  for (let i = 0; i < cartData.length; i++) {
    const cartItem = cartData[i]
    // console.log("Inside Cart: ", cartItem);

    const cartItemId = cartItem.item.id;
    const storeItemId = storeItem.id;
    // console.log("Inside the loop: ", cartItemId);

    if (cartItemId === storeItemId) {
      
      cartItem.quantity += 1

      foundItem = true
    }
  }
  if (!foundItem) {
    const newCartItem = {
      item: storeItem,
      quantity: 1
    }
    cartData.push(newCartItem)
  }
}

function removeFromCart(storeItem, cartData) {
  // console.log("inside remove from cart: ", removeFromCart)

  for (let i = 0; i < cartData.length; i++) {
    const cartItem = cartData[i];

    const cartItemId = cartItem.item.id;
    const storeItemId = storeItem.id;
    // console.log("Inside the loop: ", cartItemId);
    if (storeItemId === cartItemId) {
      if (cartItem.quantity === 1) {
        // removve from cart
        cartData.splice(i, 1);
      } else {
        cartItem.quantity = cartItem.quantity - 1;
      }
    }
  }
}

//Bridges
const storeItemListEl = document.querySelector(".store--item-list");
// console.log("storeItemListEl: ", storeItemListEl);
const cartItemListEl = document.querySelector(".cart--item-list");
// console.log("cartItemListEl: ", cartItemListEl)

function renderStoreItemList(items) {
  for (let i = 0; i < items.length; i++) {
    const item = items[i]

    const listItemEl = document.createElement("li")
   
    const containerEl = document.createElement("div")
    containerEl.className = "store--item-icon"

    const imageEl = document.createElement("img")
    const imageSrcEl = item.image_src
    imageEl.src = imageSrcEl
    imageEl.alt = item.name

    containerEl.append(imageEl)

    listItemEl.append(containerEl)

    const addCartButtonEl = document.createElement("button")
    addCartButtonEl.innerText = "Add To Cart"

    addCartButtonEl.addEventListener("click", () => {
      addToCart(item, cartData)
      renderCartItems(cartData)
    })

    listItemEl.append(addCartButtonEl);

    storeItemListEl.append(listItemEl);
  }
}
renderStoreItemList(storeData);

function renderCartItems(items) {

  cartItemListEl.innerHTML = "";

  for (let i = 0; i < items.length; i++) {
    const cartItem = items[i]
    const item = cartItem.item
  
    const listItemEl = document.createElement("li")
   
    const imageEl = document.createElement("img")
    const imageSrcEl = cartItem.item.image_src
    imageEl.src = imageSrcEl
    imageEl.alt = cartItem.item.name

    listItemEl.append(imageEl)

    const paragraphEl = document.createElement("p")
    paragraphEl.innerText = cartItem.item.name

    listItemEl.append(paragraphEl)

    const removeButtonEl = document.createElement("button")
    removeButtonEl.className = "quantity-btn remove-btn center"
    removeButtonEl.innerText = "-"
   
    removeButtonEl.addEventListener("click", () => {
      removeFromCart(item, cartData)
      renderCartItems(cartData)
    })
    
    listItemEl.append(removeButtonEl)

    const spanEl = document.createElement("span")
    spanEl.innerText = 1
    spanEl.className = "quantity-text center";
    listItemEl.append(spanEl); 

    const addButtonEl = document.createElement("button")
    addButtonEl.className = "quantity-btn add-btn center"
    addButtonEl.innerText = "+"
   

    addButtonEl.addEventListener("click", () => {
      console.log("click Item: ", item)
      addToCart(item, cartData)
      renderCartItems(cartData)
    })

    listItemEl.append(addButtonEl)

    cartItemListEl.append(listItemEl)
  }
}
