class MobileMenu {
  constructor() {
    this.DOM = {};
    this.DOM.btn = document.querySelector('.mobile-menu__btn');
    this.DOM.container = document.querySelector('#global-container');
    this.DOM.btn.addEventListener('click', this._toggle.bind(this))
    // this.eventType = this._getEventType();
    // this._addEvent();
  }


  _toggle() {
    this.DOM.container.classList.toggle('menu-open');
  }
  // _addEvent() {
  //   this.DOM.btn.addEventListener('click', this._toggle.bind(this))
  // }
}
new MobileMenu();