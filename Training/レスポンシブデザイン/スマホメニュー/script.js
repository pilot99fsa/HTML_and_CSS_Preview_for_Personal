class MobileMenu {
  constructor() {
    this.DOM = {};
    this.DOM.btn = document.querySelector('.mobile-menu__btn');
    this.DOM.container = document.querySelector('#global-container');
    this.eventType = this._getEventType()
    this._addEvent()
  }


  _getEventType() {
    return window.ontouchstart ? 'touchstart' : 'click' // ブラウザにontotchstart(というプロパティ)が存在したら'_addEventはスマホでのタッチに動作が最適化される'
    // 要修正 2024/2/21 16:00
  }

  _toggle() {
    this.DOM.container.classList.toggle('menu-open');
  }

  _addEvent() {
    this.DOM.btn.addEventListener('click', this._toggle.bind(this)) // bindメソッドでthisを束縛する
  }
}
new MobileMenu();