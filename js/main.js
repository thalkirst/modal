const modal = document.getElementById("modal");
const downloadButton = document.getElementById("button__download");

function popModal() {
    modal.className = "modal__popped";
}

function closeModal() {
    modal.className = "modal";
}

window.onclick = function (event) {
    if (event.target !== modal) {
        if (event.target !== downloadButton) {
            modal.className = "modal";
        }
    }
}
