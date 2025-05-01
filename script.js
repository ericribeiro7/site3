let quantity = 1;
const price = 10;

function updatePrice() {
  document.getElementById("quantity").innerText = quantity;
  document.getElementById("total-price").innerText = `R$ ${(quantity * price).toFixed(2)}`;
}

function increment() {
  quantity++;
  updatePrice();
}

function decrement() {
  if (quantity > 1) {
    quantity--;
    updatePrice();
  }
}

function handlePurchase() {
  const message = `Olá! Gostaria de comprar ${quantity} ingresso(s) para o Baile do Menino Rei x Hawaii do Marrento.`;
  const url = `https://wa.me/98981378687?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
}

function toggleModal() {
  const modal = document.getElementById("modal");
  modal.style.display = modal.style.display === "flex" ? "none" : "flex";
}
