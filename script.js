// PART 1 Lesson 7

let cart = []

const authBtn = document.getElementById('authButton');
const addProductBtns = [];
const addLikeProductBtns = [];
const orderSum = document.getElementById('order__sum');
const orderPrices = document.querySelectorAll('.order__itemCost');
const productsLikeCount = document.getElementById('productsLikeCount');
let orderPrice = 0;
let likeCount = 0;

start();

for (let i = 1; i <= 4; i++) {
    addProductBtns.push(document.getElementById(`addNewProduct-${i}`));
    addLikeProductBtns.push(document.getElementById(`like__btn-${i}`));
}

authBtn.addEventListener('click', authFunction);
addLikeProductBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => addNewLikeProduct(index + 1));
});
addProductBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => addNewProduct(index + 1));
});

function authFunction() {
    // get data from form
    // send request
    // parse response
    // get authToken 9879845631sf3dfs6df54s6dfs6d5f4s6df

    sessionStorage.setItem('accessToken', '65sf465s4df6s5d4f8979w6r454fd');
    document.querySelector('.authForm').classList.add('d-none');

    document.querySelector('.page-content').classList.remove('d-none');
    document.querySelector('header').classList.remove('d-none');
}

function start() {
    if (sessionStorage.getItem('productsCount')) {
        orderPrice = parseInt(sessionStorage.getItem('productsCount'));
        orderSum.textContent = orderPrice;

    }

    if (sessionStorage.getItem('productsLikeCount')) {
        likeCount = parseInt(sessionStorage.getItem('productsLikeCount'));
        productsLikeCount.textContent = likeCount;
      
    }

    document.querySelector('.page-content').classList.remove('d-none');
    document.querySelector('header').classList.remove('d-none');

    if (!sessionStorage.getItem('cart')) {
        return;
    }

    cart = JSON.parse(sessionStorage.getItem('cart'))
    updateCartCounter(cart.length)
}

function addNewProduct(productId) {
    const productCost = parseInt(orderPrices[productId - 1].textContent);
    cart.push({
        name: 'Test',
        id: new Date().toString(),
    });
    sessionStorage.setItem('cart', JSON.stringify(cart));
    updateCartCounter(cart.length);
    addOrderItem(productCost);
}
function addNewLikeProduct(LikeProductId) {
    const heartButton = document.getElementById(`like__btn-${LikeProductId}`);
    const isFilled = heartButton.classList.contains("filled");

    if (isFilled) {
        heartButton.classList.remove("filled");
        likeCount -= 1;
    } else {
        heartButton.classList.add("filled");
        likeCount += 1;
    }

    productsLikeCount.textContent = likeCount;
    sessionStorage.setItem("productsLikeCount", likeCount);
    sessionStorage.setItem(`like__btn-${LikeProductId}`, isFilled ? "filled" : "");
}

function addOrderItem(productCost) {
    orderPrice += productCost;
    orderSum.textContent = orderPrice;
    sessionStorage.setItem('productsCount', orderPrice);
}

function updateCartCounter(counter) {
    document.querySelector('#productsCount').textContent = counter
}

window.addEventListener('storage', event => {
    // console.log(event);
    cart = JSON.parse(sessionStorage.getItem('cart'))
    updateCartCounter(cart.length)
})

sessionStorage.setItem('cart', JSON.stringify(cart))

// document.cookie = "token='544564132154f6s45dfs'; domain:localhost"

// document.cookie = "token='544564132154f6s45df987s'; max-age=10"

// function fillHeart() {
//     var heartButton = document.getElementById("heartButton");
//     heartButton.classList.toggle("filled");
// }





