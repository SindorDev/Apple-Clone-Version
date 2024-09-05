const productId = window.location.search.slice(length -1);
const details = document.querySelector("#details") as HTMLElement;

class cardDetails {
     async cardData() {
          try {
               const response = await fetch(`https://dummyjson.com/products/${productId}`);
               const data = await response.json();
               return data;
          }
          catch (error) {
               console.log(error);
          }
     }

     renderDetails() {
          this.cardData().then((data) => {
               console.log(data);
               details.innerHTML = `

                <div class="w-full"> <img src=${data.images} alt=${data.title} width="80%" /> </div>
               
     <div className="flex flex-col gap-10">
     <h2 className="text-[40px] font-bold text-gray-900">
       ${data?.title}
     </h2>
     <p className="text-sm text-gray-600">${data?.description}</p>
     <div className="text-sm flex flex-col gap-2">
       <span className="text-lg font-semibold text-gray-900">
        Price:  $${data?.price}
       </span>
       <span className="ml-2 text-sm text-gray-500 line-through">
         Rating: ${data?.rating}
       </span>
     </div>
     <div className="text-sm">
       <p className="text-sm text-gray-600">
         Category: ${data?.category}
       </p>
       <p className="text-sm text-gray-600">
         Brand: ${data?.brand}
       </p>
       <p className="text-sm text-gray-600">
         In Stock: ${data?.stock}
       </p>
     </div>
   </div>
                `
})
     }
               
}


const Product = new cardDetails();
Product.cardData()
Product.renderDetails()