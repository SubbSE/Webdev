$(document).ready(function () {
  let totalCost = 0;
  let itemCount = 0;

  // Add to Cart Button Click Event
  $('.add-to-cart').click(function () {
    const price = parseFloat($(this).siblings('.price').text().replace('Rs. ', ''));
    totalCost += price;
    itemCount++;
    updateCartTooltip();
  });

  // Update Cart Tooltip Text
  function updateCartTooltip() {
    $('#cart-link .badge').text(itemCount);
    $('#cart-link').attr('title', 'Total Cost: Rs. ' + totalCost.toFixed(2)).tooltip('_fixTitle').tooltip('show');
  }
});
