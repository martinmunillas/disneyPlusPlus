const black = '#212121';

export const lightModeButtonCss = document.createElement('style');
lightModeButtonCss.innerText = `
.lightModeBtn {
  width: 100%;
  border: 1px solid gray;
  padding: 10px;
  cursor: pointer;
  border-radius: 20px;
  display: none;
}


ul[data-testid=account-dropdown-list][open] .lightModeBtn {
  display: block;
}
`;

export const lightModeCss = document.createElement('style');
lightModeCss.innerText = `

ul.slick-dots li button.dot::before {
  -webkit-font-smoothing: antialiased;
    color: rgb(150, 158, 171);
    content: "•";
    font-size: 24px;
    height: 20px;
    left: 0px;
    line-height: 20px;
    opacity: 1;
    position: absolute;
    text-align: center;
    top: 0px;
    width: 20px;
}
ul.slick-dots li button.dot:hover::before {
  color: rgb(180, 180, 180);
}

#app-background {
  background: #f6f6f6;
}

#app-background::after {
  background-image: none;
}

.image-container {
  background: #696969;
}

#app_navigation {
  background: transparent;
}

ul[data-testid=account-dropdown-list][open] {
  background: white;
  color: ${black};
}
ul[data-testid=account-dropdown-list] > div > li > a > span {
  color: ${black};
}

a[data-route=Profile], a[data-route=Profile] > span {
  color: ${black} !important
}

li[open] > a#active-profile > span {
  color: ${black} !important
}

footer {
  background: #e6e6e6
}

main h4 {
  color: ${black} !important;
}
`;
