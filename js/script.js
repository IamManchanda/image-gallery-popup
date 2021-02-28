const fullImg = document.querySelector(".full-img");
const smallImg = document.querySelectorAll(".gallery img");
const modal = document.querySelector(".modal");

function handleModalOpen(img) {
  modal.classList.add("open");
  fullImg.classList.add("open");
  const originalQuality = img.getAttribute("data-img");
  fullImg.src = `./assets/images/full/${originalQuality}.jpg`;
}

function handleModalImages(img) {
  img.addEventListener("click", () => handleModalOpen(img));
}

function handleModalClose() {
  modal.classList.remove("open");
  fullImg.classList.remove("open");
}

function handleModalCloseByClick(event) {
  if (event.target.classList.contains("modal")) {
    handleModalClose();
  }
}

function handleModalCloseByEscape(event) {
  if (event.key === "Escape" || event.code === "Escape") {
    handleModalClose();
  }
}

smallImg.forEach(handleModalImages);
modal.addEventListener("click", handleModalCloseByClick);
document.addEventListener("keydown", handleModalCloseByEscape);
