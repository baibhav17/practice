let modalElem =  document.getElementById("modal");
let overlayElem = document.getElementById("overlay");
function openModal() {
   modalElem.classList.remove("hidden");
   overlayElem.classList.remove("hidden");

    // document.getElementsById("body").classList.add("overlay");
    document.addEventListener("keydown", function(event) {
        if (event.keyCode == 27) {
            closeModal();
        }
      });
}
function closeModal() {
   modalElem.classList.add("hidden");
   overlayElem.classList.add("hidden");
}

overlayElem.addEventListener("click", function() {
    closeModal();
})