const scrollWrappers = document.querySelectorAll('.scroll-wrapper');

scrollWrappers.forEach(scroll => {
  const leftArrow = scroll.querySelector('.left-arrow');
  const rightArrow = scroll.querySelector('.right-arrow');
  const productRow = scroll.querySelector('.productRow');

  if (rightArrow && productRow) {
    rightArrow.addEventListener('click', (e) => {
      productRow.scrollLeft +=1100;
      e.preventDefault();
    });
  }

  if (leftArrow && productRow) {
    leftArrow.addEventListener('click', (e) => {
      productRow.scrollLeft -= 1100;
      e.preventDefault();
    });
  }
});



  let cartCount = 0;
  let cartTotal = 0;

  const cartCountEl = document.getElementsByClassName('fa-solid fa-cart-shopping');

  document.querySelectorAll('.productItem').forEach(item => {
    const btnContainer = item.querySelector('.btn');
    const priceText = btnContainer.querySelector('b');
    const price = parseInt(priceText.innerText.replace('₹', ''));

    const addBtn = btnContainer.querySelector('button');

    addBtn.addEventListener('click', () => {
      // Create counter UI
      const counterDiv = document.createElement('div');
      counterDiv.classList.add('counter');

      const minusBtn = document.createElement('button');
      minusBtn.textContent = '−';
      minusBtn.classList.add('counter-btn');

      const countSpan = document.createElement('span');
      countSpan.textContent = '1';

      const plusBtn = document.createElement('button');
      plusBtn.textContent = '+';
      plusBtn.classList.add('counter-btn');

      counterDiv.appendChild(minusBtn);
      counterDiv.appendChild(countSpan);
      counterDiv.appendChild(plusBtn);

      btnContainer.replaceChild(counterDiv, addBtn);

      // Update cart
      cartCount += 1;
      cartTotal += price;
      cartCountEl.textContent = cartCount;
      cartTotalEl.textContent = cartTotal;

      plusBtn.addEventListener('click', () => {
        let count = parseInt(countSpan.textContent);
        count++;
        countSpan.textContent = count;

        cartCount++;
        cartTotal += price;
        cartCountEl.textContent = cartCount;
        cartTotalEl.textContent = cartTotal;
      });

      minusBtn.addEventListener('click', () => {
        let count = parseInt(countSpan.textContent);
        if (count > 1) {
          count--;
          countSpan.textContent = count;

          cartCount--;
          cartTotal -= price;
        } else {
          btnContainer.replaceChild(addBtn, counterDiv);

          cartCount--;
          cartTotal -= price;
        }

        cartCountEl.textContent = cartCount;
        cartTotalEl.textContent = cartTotal;
      });
    });
  });

