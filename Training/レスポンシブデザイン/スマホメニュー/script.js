class MobileMenu {
  constructor() {
    this.DOM = {};
    this.DOM.btn = document.querySelector('.mobile-menu__btn');
    this.DOM.container = document.querySelector('#global-container');
    this.eventType = this._getEventType()
    this._addEvent()
  }


  _getEventType() {
    const isTouchCapable = "ontouchstart" in window ||
      (window.DocumentTouch && document instanceof DocumentTouch);

    return isTouchCapable ? "touchstart" : "click"; // ブラウザにontotchstart(というプロパティ)が存在したら'_addEventはスマホでのタッチに動作が最適化される'

  }

  _toggle() {
    this.DOM.container.classList.toggle('menu-open');
  }

  _addEvent() {
    this.DOM.btn.addEventListener('click', this._toggle.bind(this)) // bindメソッドでthisを束縛する
  }
}
new MobileMenu();