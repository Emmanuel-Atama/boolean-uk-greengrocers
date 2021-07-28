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

//Bridge
// const storeEl = document.querySelector("#store");
// console.log("Store: ", storeEl);
const storeItemListEl = document.querySelector(".store--item-list");
console.log("storeItemListEl: ", storeItemListEl);

function renderStoreItemList(items) {
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    // console.log("Item: ", item)
    const listItemEl = document.createElement("li");
    // console.log("Inside li: ", listItemEl);
    storeItemListEl.append(listItemEl);

    const containerEl = document.createElement("div");
    // console.log("Inside containerEl: ", containerEl);
    containerEl.className = "store--item-icon";
    listItemEl.append(containerEl);

    const imageEl = document.createElement("img");
    const imageSrcEl = item.image_src;
    // console.log("Image Source: ", imageSrc);
    imageEl.setAttribute("src", imageSrcEl);
    imageEl.setAttribute("alt", item.name);
    containerEl.append(imageEl);

    const buttonEl = document.createElement("button");
    buttonEl.innerText = "Add To Cart";
    listItemEl.append(buttonEl);
    // console.log("ButtonEl: ", buttonEl);

    buttonEl.addEventListener("click", (event) => {
      console.log("click");
    });
  }
}
renderStoreItemList(storeData);

const cartItemListEl = document.querySelector(".cart--item-list");
console.log("cartItemListEl: ", cartItemListEl);

// function renderCartItems(items) {
//   for (let i = 0; i < items.length; i++) {
//     const cart = items[i];
//     // console.log("Inside RenderCart: ", cart)

//     const listItemEl = document.createElement("li");
//     cartItemListEl.append(listItemEl);
//     // console.log("listItemEl: ", listItemEl)

//     const imageEl = document.createElement("img");
//     const imageSrcEl = cart.item.image_src;
//     // console.log("Image Source: ", imageSrc);
//     imageEl.setAttribute("src", imageSrcEl);
//     imageEl.setAttribute("alt", cart.item.name);
//     listItemEl.append(imageEl);

//     const paragraphEl = document.createElement("p");
//     paragraphEl.innerText = cart.item.name;
//     listItemEl.append(paragraphEl);

//     const removeButtonEl = document.createElement("button");
//     // console.log("Button: ", removeButtonEl)
//     removeButtonEl.className = "quantity-btn remove-btn center";
//     removeButtonEl.innerText = "-";
//     listItemEl.append(removeButtonEl);

//     const spanEl = document.createElement("span");
//     spanEl.innerText = 1;
//     spanEl.className = "quantity-text center";
//     listItemEl.append(spanEl);

//     const addButtonEl = document.createElement("button");
//     // console.log("Button: ", addButtonEl)
//     addButtonEl.className = "quantity-btn add-btn center";
//     addButtonEl.innerText = "+";
//     listItemEl.append(addButtonEl);
//   }
// }
// renderCartItems(cartData);

function addToCart(storeItem, cartData) {
  let foundItem = false;

  for (let i = 0; i < cartData.length; i++) {
    const cartItem = cartData[i];
    console.log("Inside Cart: ", cartItem);

    const cartItemId = cartItem.item.id;
    const storeItemId = storeItem.id;
    console.log("Inside the loop: ", cartItemId, storeItemId);
  }
  const newCartItem = {
    item: storeItem,
    quantity: 1
  };
  cartData.push(newCartItem);

  console.log(newCartItem);

  // console.log("Inside addToCart: ", addToCart);

  // let foundItem = false;
  // console.log(foundItem)

  //   const cartId = cartItem.item.id;

  //   const storeDataId = storeData.id;
}
addToCart(storeData[0], cartData);
// addToCart(storeData[0], cartData);
// addToCart(storeData[0], cartData);
