//setting event handler & calling function

const memory1 = document.getElementById("8gb");
memory1.addEventListener("click", function () {
  specification("8gb");
  updatePrice();
});
const memory2 = document.getElementById("16gb");
memory2.addEventListener("click", function () {
  specification("16gb");
  updatePrice();
});
const storage1 = document.getElementById("256gb");
storage1.addEventListener("click", function () {
  specification("256gb");
  updatePrice();
});
const storage2 = document.getElementById("512gb");
storage2.addEventListener("click", function () {
  specification("512gb");
  updatePrice();
});
const storage3 = document.getElementById("1tb");
storage3.addEventListener("click", function () {
  specification("1tb");
  updatePrice();
});
const delivery1 = document.getElementById("free-delivery");
delivery1.addEventListener("click", function () {
  specification("free");
  updatePrice();
});
const delivery2 = document.getElementById("paid-delivery");
delivery2.addEventListener("click", function () {
  specification("paid");
  updatePrice();
});
const memoryCost = document.getElementById("extra-memory");
const storageCost = document.getElementById("extra-storage");
const deliveryCharge = document.getElementById("delivery-charge");
const totalPrice = document.getElementById("total-price");
const finalPrice = document.getElementById("final-price");

// specification
function specification(type) {
  if (type == "8gb") {
    memoryCost.innerText = 0;
  } else if (type == "16gb") {
    memoryCost.innerText = 180;
  } else if (type == "256gb") {
    storageCost.innerText = 0;
  } else if (type == "512gb") {
    storageCost.innerText = 100;
  } else if (type == "1tb") {
    storageCost.innerText = 180;
  } else if (type == "free") {
    deliveryCharge.innerText = 0;
  } else if (type == "paid") {
    deliveryCharge.innerText = 20;
  }
};

//calculating total price
function updatePrice() {
  const minimumPrice = document.getElementById("best-price");
  const bestPrice = Number(minimumPrice.innerText);

  const extraMemoryCost = Number(memoryCost.innerText);
  const extraStorageCost = Number(storageCost.innerText);
  const totalDeliveryCharge = Number(deliveryCharge.innerText);

  const totalPriceNumber =
    bestPrice + extraMemoryCost + extraStorageCost + totalDeliveryCharge;
  totalPrice.innerText = totalPriceNumber;

  finalPrice.innerText = totalPriceNumber;
};

const promoText = document.getElementById("promo-text");
const promoBtn = document.getElementById("promo-btn");

//setting promo code

function isEmpty() {
  const promoCode = promoText.value;
  if (promoCode == "stevekaku") {
    promoBtn.removeAttribute("disabled");
  } else {
    document.getElementById("promo-btn").disabled = true;
  }
};
//discount calculation

promoBtn.addEventListener("click", function () {
  const discount = Number(finalPrice.innerText) * 0.2;
  finalPrice.innerText = finalPrice.innerText - discount;
  promoText.value = "";
  document.getElementById("promo-btn").disabled = true;
  document.getElementById("promo-text").disabled = true;
});
