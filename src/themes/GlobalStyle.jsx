import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`


  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    scroll-behavior: smooth;
  }
  body {
    font-family: 'SF Pro Display', sans-serif;
    font-size: 16px;
    line-height: 20px;
    color: #4B565F;
    background-color: #fff;
    
  }
  ul li {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }
  a {
    text-decoration: none;
  }



header {
  background-color: #2C2C32;
  padding: 2rem 0;
  text-align: center;
  margin-bottom: 60px;
}
header > a {
  color: white;
  text-decoration: none;
  padding: 0 1rem;
}
header > a:hover {
  text-decoration: underline;
}

h1, h2, h3 {
  text-align: center;
  margin-top: 0;
}

.container {
  max-width: 900px;
  padding-left: 2rem;
  padding-right: 2rem;
  margin: 0 auto;
}


main a {
  text-decoration: none;
  color: #fff;
}
main a:hover {
  text-decoration: underline;
}

.active {
  color: #095797c7;
  cursor: default;
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

label {
  display: flex;
  gap: 1rem;
}


`;