const supermarketGoods = [
    {
        name: "Bananas",
        price: 2.99,
        imgLink: "/No_image_available.svg.png"
    },
    {
        name: "Milk",
        price: 1.49,
        imgLink: "/No_image_available.svg.png"
    },
    {
        name: "Bread",
        price: 2.25,
        imgLink: "/No_image_available.svg.png"
    },
    {
        name: "Eggs",
        price: 3.99,
        imgLink: "/No_image_available.svg.png"
    },
    {
        name: "Apples",
        price: 4.99,
        imgLink: "/No_image_available.svg.png"
    },
    {
        name: "Cheese",
        price: 3.79,
        imgLink: "/No_image_available.svg.png"
    },
    {
        name: "Cereal",
        price: 2.99,
        imgLink: "/No_image_available.svg.png"
    },
    {
        name: "Chicken",
        price: 6.49,
        imgLink: "/No_image_available.svg.png"
    },
    {
        name: "Butter",
        price: 2.29,
        imgLink: "/No_image_available.svg.png"
    },
    {
        name: "Oranges",
        price: 3.49,
        imgLink: "/No_image_available.svg.png"
    },
    {
        name: "Rice",
        price: 1.99,
        imgLink: "/No_image_available.svg.png"
    },
    {
        name: "Pasta",
        price: 1.79,
        imgLink: "/No_image_available.svg.png"
    },
    {
        name: "Yogurt",
        price: 0.99,
        imgLink: "/No_image_available.svg.png"
    },
    {
        name: "Spinach",
        price: 2.49,
        imgLink: "/No_image_available.svg.png"
    },
    {
        name: "Salmon",
        price: 8.99,
        imgLink: "/No_image_available.svg.png"
    },
    {
        name: "Coffee",
        price: 5.99,
        imgLink: "/No_image_available.svg.png"
    },
    {
        name: "Tea",
        price: 3.29,
        imgLink: "/No_image_available.svg.png"
    },
    {
        name: "Peanut Butter",
        price: 2.99,
        imgLink: "/No_image_available.svg.png"
    },
    {
        name: "Jam",
        price: 2.49,
        imgLink: "/No_image_available.svg.png"
    },
    {
        name: "Honey",
        price: 4.29,
        imgLink: "/No_image_available.svg.png"
    },
    {
        name: "Sugar",
        price: 1.69,
        imgLink: "/No_image_available.svg.png"
    },
    {
        name: "Flour",
        price: 2.19,
        imgLink: "/No_image_available.svg.png"
    },
    {
        name: "Salt",
        price: 0.99,
        imgLink: "/No_image_available.svg.png"
    },
    {
        name: "Pepper",
        price: 1.49,
        imgLink: "/No_image_available.svg.png"
    },
    {
        name: "Onions",
        price: 1.29,
        imgLink: "/No_image_available.svg.png"
    },
    {
        name: "Garlic",
        price: 0.79,
        imgLink: "/No_image_available.svg.png"
    },
    {
        name: "Carrots",
        price: 1.49,
        imgLink: "/No_image_available.svg.png"
    },
    {
        name: "Potatoes",
        price: 2.99,
        imgLink: "/No_image_available.svg.png"
    },
    {
        name: "Tomatoes",
        price: 2.79,
        imgLink: "/No_image_available.svg.png"
    },
    {
        name: "Lettuce",
        price: 1.99,
        imgLink: "/No_image_available.svg.png"
    },
    {
        name: "Broccoli",
        price: 2.49,
        imgLink: "/No_image_available.svg.png"
    },
    {
        name: "Cucumber",
        price: 0.99,
        imgLink: "/No_image_available.svg.png"
    },
    {
        name: "Bell Pepper",
        price: 1.29,
        imgLink: "/No_image_available.svg.png"
    },
    {
        name: "Avocado",
        price: 2.99,
        imgLink: "/No_image_available.svg.png"
    },
    {
        name: "Grapes",
        price: 3.99,
        imgLink: "/No_image_available.svg.png"
    },
    {
        name: "Strawberries",
        price: 4.49,
        imgLink: "/No_image_available.svg.png"
    },
    {
        name: "Blueberries",
        price: 5.99,
        imgLink: "/No_image_available.svg.png"
    },
    {
        name: "Raspberries",
        price: 6.49,
        imgLink: "/No_image_available.svg.png"
    },
    {
        name: "Blackberries",
        price: 4.99,
        imgLink: "/No_image_available.svg.png"
    },
    {
        name: "Pineapple",
        price: 3.99,
        imgLink: "/No_image_available.svg.png"
    },
    {
        name: "Watermelon",
        price: 6.99,
        imgLink: "/No_image_available.svg.png"
    },
    {
        name: "Cantaloupe",
        price: 2.99,
        imgLink: "/No_image_available.svg.png"
    },
    {
        name: "Hamburger",
        price: 5.99,
        imgLink: "/No_image_available.svg.png"
    },
    {
        name: "Hot Dog",
        price: 3.49,
        imgLink: "/No_image_available.svg.png"
    },
    {
        name: "Pizza",
        price: 7.99,
        imgLink: "/No_image_available.svg.png"
    },
    {
        name: "French Fries",
        price: 2.99,
        imgLink: "/No_image_available.svg.png"
    },
    {
        name: "Ice Cream",
        price: 4.99,
        imgLink: "/No_image_available.svg.png"
    }
]

let sorted = [...supermarketGoods]
const cards = document.getElementById('cards')
const cartBtn = document.getElementById('cart')
const cartSize = document.getElementById('cartSize')
const cartUI = document.getElementById('cartUI')
const search = document.getElementById('search')
const searchBtn = document.getElementById('searchBtn')
const dropdown = document.getElementById('dropdown')
const minPrice = document.getElementById('minPrice')
const maxPrice = document.getElementById('maxPrice')
const filterBtn = document.getElementById('filterBtn')
const paginationContainer = document.getElementById('paginationControls')


resetPagination()

let items = JSON.parse(localStorage.getItem('cart')) || [];
cartSize.innerText = items.length;

function createCard(obj) {
    const {name, price, imgLink} = obj;
    const nameE = document.createElement('h3')
    nameE.innerHTML = `${name}`
    const priceE = document.createElement('p') 
    priceE.innerHTML = `${price}$`
    const image = document.createElement('img');
    image.src = imgLink && imgLink.startsWith("http") 
        ? imgLink 
        : "/No_image_available.svg.png"; 
    image.className = 'cardImg';
    const addBtn = document.createElement('button')
    addBtn.className = "cardBtn"
    addBtn.innerHTML = `Add to cart`
    const card = document.createElement('div')
    card.className = 'card'
    
    card.appendChild(nameE)
    card.appendChild(priceE)
    card.appendChild(image)
    card.appendChild(addBtn)
    cards.appendChild(card)
}

let initialIndex = 0
let finalIndex = 8

function pagination(id) {
    let itemsPerPage = []
    const cleanID = id.replace("page", "")
    finalIndex = cleanID * 8
    initialIndex = finalIndex - 8
    console.log(`Initial: ${initialIndex} Final: ${finalIndex}`)
    for (initialIndex; initialIndex < finalIndex; initialIndex++) {
        itemsPerPage.push(sorted[initialIndex])
    }
    itemsPerPage.forEach((item) => createCard(item)); 
}
pagination("page1")

function resetPagination() {
    paginationContainer.innerHTML = ``
    let pages = Math.ceil(sorted.length / 8)
    for (let i=0;  i<pages; i++) {
        const button =  document.createElement('button')
        button.className = "paginationBtn"
        button.innerHTML = `${i + 1}`
        button.id = `page${i + 1}`
        paginationContainer.appendChild(button)
    }
}


function displayCartInfo() {
    const countOccurrences = (arr, item) => {
        let count = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].name === item.name && arr[i].price === item.price) {
                count++;
            }
        }
        return count;
    };
    let cartContent = ""; 

    if (items.length == 0) {
        cartContent = `
            <h4>Cart:</h4>
            <p>Cart is empty</p>`;
    } else {
        cartContent = `
            
        <h4>Cart:</h4>
        <button id="clearBtn">Clear Cart</button>`;
    }

    let cartPrice = 0;

    for (let item of items) {
        const priceWithoutSymbol = item.price.replace(/\$/g, ''); // Remove dollar sign ('$')
        if (countOccurrences(items, item) > 1 && cartContent.includes(item.name)) {
            console.log("Already added");
        } else { 
            const totalPrice = (Number(priceWithoutSymbol) * countOccurrences(items, item)).toFixed(2);
            cartContent += `<p>${countOccurrences(items, item)}x ${item.name}, ${totalPrice}</p>`;
            cartPrice += Number(totalPrice);
        }
    }

    
    cartUI.innerHTML = cartContent; // Set the cart content to the cart UI

    cartUI.innerHTML +=  
    `<p>Total: ${items.length} item${items.length != 1? 's': ""}, ${cartPrice.toFixed(2)}$</p>`;
    localStorage.setItem('cart', JSON.stringify(items));
}


cartBtn.addEventListener("click", (e)=>{
    e.stopPropagation();
    cartUI.style.display = (cartUI.style.display === "block") ? "none" : "block";
    displayCartInfo()
    
})


searchBtn.addEventListener("click", () => {
    cards.innerHTML = ""; 
    sorted = []
    sorted = supermarketGoods.filter(item => 
        item.name.toLowerCase().includes(search.value.toLowerCase())
    );
    resetPagination();
    pagination("page1"); // Update pagination after filtering
     // Reset pagination controls
});

// sorting
dropdown.addEventListener("change", () => {
    const selectedOption = dropdown.value;
    console.log("Selected option:", selectedOption);
    switch (selectedOption) {
        case "Alphabetically":
            cards.innerHTML = ""; 
            sorted.sort((a, b) => {
                const nameA = a.name.toLowerCase();
                const nameB = b.name.toLowerCase();
                if (nameA < nameB) {
                    return -1;
                }
                if (nameA > nameB) {
                    return 1;
                }
                return 0;
            });
            resetPagination();
            pagination("page1"); 
            break;
        case "Reverse Alphabetically":
            cards.innerHTML = "";  
            sorted.sort((a, b) => {
                const nameA = a.name.toLowerCase();
                const nameB = b.name.toLowerCase();
                if (nameA < nameB) {
                    return -1;
                }
                if (nameA > nameB) {
                    return 1;
                }
                return 0;
            }).reverse();
            resetPagination();
            pagination("page1"); 
            break;
        case "Price: Lowest to Highest":
            cards.innerHTML = ""; 
            sorted.sort((a, b) => {
                const priceA = a.price;
                const priceB = b.price;
                if (priceA < priceB) {
                    return -1;
                }
                if (priceA > priceB) {
                    return 1;
                }
                return 0;
            })
            resetPagination();
            pagination("page1");
            break;
        case "Price: Highest to Lowest":
            cards.innerHTML = "";  
            sorted.sort((a, b) => {
                const priceA = a.price;
                const priceB = b.price;
                if (priceA < priceB) {
                    return -1;
                }
                if (priceA > priceB) {
                    return 1;
                }
                return 0;
            }).reverse()
            resetPagination();
            pagination("page1");
            break;
    }
});
// filter
filterBtn.addEventListener("click", () => {
    sorted = [...supermarketGoods]
    search.textContent = ""
    let minPriceValue = Number(minPrice.value);
    let maxPriceValue = Number(maxPrice.value);
    if (minPriceValue == "") {
        minPriceValue = 0
    } 
    if (maxPriceValue == "") {
        maxPriceValue = 100
    } 
    cards.innerHTML = "";
    sorted = sorted.filter(item => item.price >= minPriceValue && item.price <= maxPriceValue);
    resetPagination();
    pagination("page1");
});
// allows opening cart
document.addEventListener("click", (e)=> {
    const clickedElement = e.target
    if (clickedElement !== cartBtn && !cartUI.contains(clickedElement)) {
        cartUI.style.display = "none"
    }
    if (clickedElement.className == "cardBtn") {
        const card = clickedElement.parentElement;
        console.log(card.getElementsByTagName("h3")[0].textContent)
        items.push({
            name: card.getElementsByTagName("h3")[0].textContent,
            price: card.getElementsByTagName('p')[0].textContent
        })
        localStorage.setItem('cart', JSON.stringify(items));
    }
    cartSize.innerText = items.length

    //pagination
    if (clickedElement.className == "paginationBtn")  {
        cards.innerHTML = "";
        pagination(clickedElement.id)
    }

    if (clickedElement.id == "clearBtn") {
        items = []
        displayCartInfo()
        cartSize.innerHTML = `0`
    }
})

