# Desafio Galleria Website - Frontend-Mentor

Este é um desafio de um website destinado a obras de arte, proposto pelo site Frontend-Mentor.

## Tabela de Conteúdos

- [Visão Geral](#visão-geral)
    - [Imagens](#imagens)
    - [Link da página](#link)
- [Processo](#processo)
    - [Linguagens utilizadas](#linguagens-utilizadas)
    - [O que aprendi](#o-que-aprendi)
    - [Possíveis evoluções](#possíveis-evoluções)
- [Autor](#autor)

## Visão-geral

### Imagens

<br>

````
Versão de Desktop
````

   <img src="./src/design/desktop-design.gif" alt="desktop-design">

<br>

````
Versão Mobile
````

 <img src="./src/design/mobile-design.gif" alt="mobile-design">

<br>

````
Versão Tablet
````

 <img src="./src/design/tablet-design.gif" alt="tablet-design">

### Link

- Página no GitHub Pages: <a href="https://julio-mansan2.github.io/galleria-website/">Clique aqui!</a>

## Processo

### Linguagens utilizadas

<br>

- Marcações semânticas de HTML5
- Propriedades de customização do CSS3
- Estruturas de JavaScript

<br>

### O que aprendi

<br>

- Utilizar matrizes em JS:

````javascript

const names = [
    'Starry Night',
    'Girl With Pearl Earring',
    'Guernica',
    'Penitent Magdalene',
    'The Storm on the Sea of Galilee',
    'The Great Wave off Kanagawa',
    'Van Gogh Self-portrait',
    'The Sleeping Gypsy',
    'Lady with an Ermine',
    'The Night Café',
    'The Basket of Apples',
    'The Boy in the Red Vest',
    'Arnolfini Portrait',
    'Mona Lisa',
    'The Swing'
];

````

- Utilizar um método de slides:

````javascript

let currentSlide = 0;

nextBtn.addEventListener('click', function () {
    currentSlide++;
    if (currentSlide >= names.length) {
        currentSlide = 0;
    }
    toggleNamePaints(currentSlide)
    toggleImageHero(currentSlide)
    toggleAuthorNames(currentSlide)
    toggleAuthorImg(currentSlide)
    toggleDescriptions(currentSlide)
    toggleSources(currentSlide)
})

backBtn.addEventListener('click', function () {
    currentSlide--;
    if (currentSlide < 0) {
        currentSlide = 0;
    }
    toggleNamePaints(currentSlide)
    toggleImageHero(currentSlide)
    toggleAuthorNames(currentSlide)
    toggleAuthorImg(currentSlide)
    toggleDescriptions(currentSlide)
    toggleSources(currentSlide)
})


````
<br>

### Possíveis evoluções

<br>

- Códigos mais compactos;
- Otimizar o JS;

<br>

## Autor

GitHub - <a href="https://github.com/julio-mansan2">julio-mansan2</a> <br>
Front-end Mentor - <a href="https://www.frontendmentor.io/profile/julio-mansan2">julio-mansan2</a> <br>
LinkedIn - <a href="https://www.linkedin.com/in/j%C3%BAlio-a-mansan-3415a7249/">Júlio A.</a> <br>
