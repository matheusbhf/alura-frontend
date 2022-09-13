
function tocar(id) {
    document.querySelector(id).play();
}

const keyLists = document.querySelectorAll(".tecla");


for (let i = 0; i < keyLists.length; i++) {
   
    const instrument = keyLists[i].classList[1];

    keyLists[i].onclick = function () {
        tocar(`#som_${instrument}`);    
    };
    
}
