let cardscontainer = document.getElementById('cardscontainer')

let productimage = document.getElementById('productimage')
let producttitle = document.getElementById('producttitle')
let productdescription = document.getElementById('productdescription')
let productprice = document.getElementById('productprice')
let productcategory = document.getElementById('productcategory')




function addtocards(){
    const imageValue = productimage.value
    const titleValue = producttitle.value
    const descValue = productdescription.value
    const priceValue = productprice.value
    const categoryValue = productcategory.value

    const productData = {
        "title" : titleValue ,
        "description" :  descValue ,
        "price" : priceValue,
        "category" : categoryValue ,
        "image" : imageValue
    }

    fetch("https://69bfc34f72ca04f3bcb92a0d.mockapi.io/proDuct" ,{
    method : "POST" ,
    body : JSON.stringify(productData) ,
    headers :{
        "Content-type" : "application/json; charset=UTF-8"
    }
    
})
productimage.value = ""
    producttitle.value = ""
    productprice.value = ""
    productcategory.value = ""
    productdescription.value = ""
        
 getData()
}

function getData(){
    fetch('https://69bfc34f72ca04f3bcb92a0d.mockapi.io/proDuct')
    .then(res => res.json())
    .then(data => {
        cardscontainer.innerHTML = ""
        data.map(item =>{
            cardscontainer.innerHTML += `
        <section class=" w-full max-w-[300px] shadow-[0_0_7px_#00bcff] rounded-[10px]">
            <img class="w-full rounded-[10px]" src="${item.image}" alt="">
            <div class="text-white pl-3 pb-8 pt-6">
                <p>${item.title}</p>
                <p>${item.description}</p>
                <p>${item.price} $</p>
                <p>${item.category}</p>
                <div class="flex justify-end mr-3"><button class="bg-[#00bcff] text-[#030712] w-[100px] h-[30px] rounded-[10px]" >More</button></div>
            </div>
        </section>
            `
        })
    })
}
getData()