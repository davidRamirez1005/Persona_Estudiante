class Navbar extends HTMLElement {
    constructor() {
      super();
  
      this.attachShadow({ mode: 'open' });
  
      this.shadowRoot.innerHTML = `
        <style>
     .navbar {
            background-color: #e1f4ff;
            padding: 5%;
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            border-radius: 15px
          }
          
         .navbar-brand {
            font-weight: bold;
            font-size: 24px;
            text-decoration: none;
            color: #333;
          }
          
         .navbar-nav {
            list-style-type: none;
            margin: 0;
            padding: 0;
            display: flex;
            flex-wrap: wrap;
            width: 100%;
          }
          
         .nav-item {
          }
          
         .nav-item a {
            text-decoration: none;
            color: #333;
            padding: 10px;
            transition: background-color 0.3s ease;
          }
          
         .nav-item a:hover {
            font-size: 20px;
            font-family: monospace;
            font-weight: 800;
            color: darkcyan;
          }
        </style>
  
        <div class="navbar">
          <ul class="navbar-nav">
            <li class="nav-item"><a href="././index.html">EJERCICIO 1</a></li>
            <li class="nav-item"><a href="././eje2/index.html</a></li>
            <li class="nav-item"><a href="././eje3/index.html</a></li>
            <li class="nav-item"><a href="././eje4/index.html">EJERCICIO 4</a></li>
            <li class="nav-item"><a href="././eje5/index.html"</a></li>
          </ul>
        </div>
      `;
    }
  }
customElements.define('custom-navbar', Navbar);
  