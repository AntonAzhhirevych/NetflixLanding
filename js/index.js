'use strict';

const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

function selectItem(e) {
  removeBorder();
  removeShow();
  this.classList.add('tab-color');
  const tabContantItem = document.getElementById(`${this.id}-content`);
  tabContantItem.classList.add('show');
}

function removeBorder() {
  tabItems.forEach(item => item.classList.remove('tab-color'));
}

function removeShow() {
  tabContentItems.forEach(item => item.classList.remove('show'));
}

tabItems.forEach(item => item.addEventListener('click', selectItem));
