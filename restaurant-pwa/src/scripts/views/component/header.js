class Header extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <header class="app-bar">
    <div class="menu">
      <button id="hamburgerButton">☰</button>
    </div>
    <div class="brand">
      <img src="./logo/icon.png" alt="Logo" class="logo">
      <h1 class="brand-title">EAT OUT</h1>
    </div>
    <nav id="navigationDrawer" class="navigation">
      <ul>
        <li><a class="page" href="#/">Home</a></li>
        <li><a class="page" href="#/favorites">Favorites</a></li>
        <li><a class="page" href="https://www.linkedin.com/in/muhammad-alghifari-6425a923b/" target="_blank">About Us</a></li>
      </ul>
    </nav>
  </header>`;
  }
}

customElements.define('header-section', Header);
