class Footer extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <footer>
      <p class="copyright">Copyright © 2023 - EAT OUT</p>
    </footer>
    `;
  }
}

customElements.define('footer-section', Footer);
