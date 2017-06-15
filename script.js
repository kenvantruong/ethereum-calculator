
// Grabbing it from the DOM aka Document aka HTML. Yadidimean?
  const priceInput = document.querySelector('[name=price]');
  const quantityInput = document.querySelector('[name=quantity]');
  const total = document.querySelector('.total');
  const quantityLabel = document.querySelector('.quantity-label');


// Create the functions that we'll need   
  function calculatePieCost() {
    const price     = priceInput.value;
    const quantity  = quantityInput.value;
    const cost     = price * quantity;

    total.innerText = '$' + cost.toFixed(2);

  }
// updateQuantityLabel
  function updateQuantityLabel() {
    const quantity  = quantityInput.value;
    quantityLabel.innerText = quantity;
  }


// First Run on that Bitch.
  calculatePieCost();

// Add Event listeners to hear the User Inputs     
  priceInput.addEventListener('keyup', calculatePieCost);
  quantityInput.addEventListener('input', calculatePieCost);
  quantityInput.addEventListener('input', updateQuantityLabel);

