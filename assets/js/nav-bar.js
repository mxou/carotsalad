class NavBar extends HTMLElement{
    connectedCallback(){
      this.render();
    }

    render(){
        this.innerHTML = `<header>
        <div id="logo_container">
          <img src="./assets/img/fornite.png" alt="Logo fortnite swag" />
          <span>Shifty Shaft</span>
        </div>
        <button id="menu_button" popovertarget="sidebar"><img src="./assets/icons/menuicon.svg" alt="" /></button>
        <div id="sidebar" popover>
          <a href="">abracadabra</a>
          <a href="">abracadabra</a>
          <a href="">abracadabra</a>
          <a href="">abracadabra</a>
          <a href="">abracadabra</a>
        </div>
      </header>`
    }
}

customElements.define("nav-bar", NavBar);