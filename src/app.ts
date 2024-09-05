const cards = document.querySelectorAll('#cards');


const state = 4

console.log(cards);
class cardData {


     async getData() {
          try {
               const response = await fetch('https://dummyjson.com/products');
               const data = await response.json()
               return data
          }
          catch (error) {
               console.log(error);
          }
     }

     renderCard() {
          
          this.getData().then((data) => {
               data.products.slice(0, state).forEach((info: any) => {
                    const div = document.createElement('div');
                    div.classList.add("w-full", "shadow-xl", "p-4", "h-full", "flex", "flex-col", "gap-4");
                    div.innerHTML = `
                        <div class="relative bg-gray-100 rounded-md w-full p-4">
                        <img src=${info.images} alt="Product Image" class="block mx-auto w-48 h-44">
                        <div class="absolute z-1 top-3 right-3 flex flex-col gap-2">
                            <img src="../assets/heart-small-4.svg" alt="Heart Icon" class="w-8 cursor-pointer h-8">
                            <img src="../assets/quick-view-4.svg" alt="Eye Icon" class="w-8 cursor-pointer h-8">
                        </div>
                        <div class="mt-4 flex flex-col gap-5">
                            <h3 class="text-[18px] font-medium text-black">${info.title}</h3>
                            <div class="flex items-center justify-between">
                                <span class="text-red-500 text-base font-medium">$${info.price}</span>
                                <div class="flex items-center text-sm font-semibold opacity-50">
                                    <img src="../assets/four-star-2.svg" alt="Rating">
                                    <span>(${info.rating})</span>
                                </div>
                            </div>
                        </div>
                        </div>
                        <button data-id=${info.id} class="bg-black w-full py-4 text-[18px] leading-[24px] text-[#FAFAFA]">View Details</button>
                    `
                    cards[0].appendChild(div);
               });
          })
     }
     
     cardClick() {
          cards[0].addEventListener('click', (event) => {
               if (event.target instanceof HTMLElement && event.target.dataset.id) {
                    window.location.replace(`../page/details.html?id=${event.target.dataset.id}`)
               }
          })
     }
}

let card = new cardData()
card.renderCard()
card.cardClick()