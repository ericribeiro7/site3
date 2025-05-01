let quantity = 1;
const ticketPrice = 10;

function updateDisplay() {
  document.getElementById("quantity").innerText = quantity;
  document.getElementById("ticket-price").innerText = `R$ ${(ticketPrice * quantity).toFixed(2)}`;
}

function increment() {
  quantity++;
  updateDisplay();
}

function decrement() {
  if (quantity > 1) {
    quantity--;
    updateDisplay();
  }
}

function handlePurchase() {
  const message = `Olá! Gostaria de comprar ${quantity} ingresso(s) para a 3° edição do Baile do Menino Rei x Hawaii do Marrento em Peri Mirim - MA`;
  const url = `https://wa.me/98981378687?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}

function toggleSideMenu() {
  document.getElementById("side-menu").classList.toggle("open");
}

function abrirModal() {
  document.getElementById("modalAtrações").style.display = "flex";
}

function fecharModal() {
  document.getElementById("modalAtrações").style.display = "none";
}
