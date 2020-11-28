const modal = document.querySelector(".modalBox");

const downloadButton = document.querySelector(".button__download");
downloadButton.addEventListener('click', popModal);

function popModal() {
    modal.className = "modal__popped";
    setTimeout(() => {
        const elements = document.querySelectorAll(".modal__closer, .button__closeModal");
        elements.forEach(element => {
            element.addEventListener('click', closeModal);
        });
    }, 300)
}

function closeModal() {
   modal.className = "modal";
   const elements = document.querySelectorAll(".modal__closer, .button__closeModal");
   elements.forEach(element => {
       element.removeEventListener('click', closeModal);
   });
}
