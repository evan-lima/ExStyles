const divParagraphs = document.querySelector('.paragraphs');
const headSelect = document.head;
const paragraphs = divParagraphs.querySelectorAll('p');

const docStyle = getComputedStyle(document.body);
const parStyle = docStyle.backgroundColor;

let backgroundStyle = document.createElement('style');
backgroundStyle.innerHTML = `p {
                            background-color : ${parStyle};
                            color: white;}`;

headSelect.appendChild(backgroundStyle);