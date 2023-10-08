const btn = document.querySelectorAll('.btn')
const namePaint = document.querySelector('.name-paint')
const footerPaint = document.querySelector('.footer-paint')
const footerAuthor = document.querySelector('.footer-author')
const imagePaint = document.querySelector('.image-paint')
const authorName = document.querySelector('.author-name')
const authorImage = document.querySelector('.author-img')
const paintDescription = document.querySelector('.paint-description')
const goToSource = document.querySelector('.go-to-source')
const mainPage = document.querySelector('.main-page')
const slideShows = document.querySelector('.slideshows')
const btnStart = document.querySelector('.btn-slideshow')

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

const authors = [
    'Vincent Van Gogh',
    'Johannes Vermeer',
    'Pablo Picasso',
    'Artemisia Gentileschi',
    'Rembrandt',
    'Hokusai',
    'Vincent Van Gogh',
    'Henry Rousseau',
    'Leonardo da Vinci',
    'Vincent Van Gogh',
    'Paul Cézanne',
    'Paul Cézanne',
    'Jan van Eyck',
    'Leonardo da Vinci',
    'Jean-Honoré Fragonard'
];

const imagesPaint = [
    '<img src="./src/images/starry-night/hero-large.jpg" alt="Starry Night">',
    '<img src="./src/images/girl-with-pearl-earring/hero-large.jpg" alt="Girl With Pearl Earring">',
    '<img src="./src/images/guernica/hero-large.jpg" alt="Guernica">',
    '<img src="./src/images/penitent-magdalene/hero-large.jpg" alt="Penitent Magdalene">',
    '<img src="./src/images/the-storm-on-the-sea-of-galilee/hero-large.jpg" alt="The Storm on the Sea of Galilee">',
    '<img src="./src/images/the-great-wave-off-kanagawa/hero-large.jpg" alt="The Great Wave off Kanagawa">',
    '<img src="./src/images/van-gogh-self-portrait/hero-large.jpg" alt="Van Gogh Self-portrait">',
    '<img src="./src/images/the-sleeping-gypsy/hero-large.jpg" alt="The Sleeping Gypsy">',
    '<img src="./src/images/lady-with-an-ermine/hero-large.jpg" alt="Lady With an Ermine">',
    '<img src="./src/images/the-night-cafe/hero-large.jpg" alt="The Night Café">',
    '<img src="./src/images/the-basket-of-apples/hero-large.jpg" alt="The Basket of Apples">',
    '<img src="./src/images/the-boy-in-the-red-vest/hero-large.jpg" alt="The Boy in The Red Vest">',
    '<img src="./src/images/arnolfini-portrait/hero-large.jpg" alt="Arnolfini">',
    '<img src="./src/images/mona-lisa/hero-large.jpg" alt="Mona Lisa">',
    '<img src="./src/images/the-swing/hero-large.jpg" alt="The Swing">'
];

const authorImages = [
    '<img src="./src/images/starry-night/artist.jpg" alt="Van Gogh">',
    '<img src="./src/images/girl-with-pearl-earring/artist.jpg" alt="Vermeer">',
    '<img src="./src/images/guernica/artist.jpg" alt="Picasso">',
    '<img src="./src/images/penitent-magdalene/artist.jpg" alt="Artemisia">',
    '<img src="./src/images/the-storm-on-the-sea-of-galilee/artist.jpg" alt="Rembrandt">',
    '<img src="./src/images/the-great-wave-off-kanagawa/artist.jpg" alt="Hokusai">',
    '<img src="./src/images/van-gogh-self-portrait/artist.jpg" alt="Van Gogh">',
    '<img src="./src/images/the-sleeping-gypsy/artist.jpg" alt="Rousseau">',
    '<img src="./src/images/lady-with-an-ermine/artist.jpg" alt="da Vinci">',
    '<img src="./src/images/the-night-cafe/artist.jpg" alt="Van Gogh">',
    '<img src="./src/images/the-basket-of-apples/artist.jpg" alt="Paul Cézanne">',
    '<img src="./src/images/the-boy-in-the-red-vest/artist.jpg" alt="Paul Cézanne">',
    '<img src="./src/images/arnolfini-portrait/artist.jpg" alt="van Eyck">',
    '<img src="./src/images/mona-lisa/artist.jpg" alt="da Vinci">',
    '<img src="./src/images/the-swing/artist.jpg" alt="Frangonard">'
];

const descriptions = [
    'Although The Starry Night was painted during the day in Van Gogh ground-floor studio, it would be inaccurate to state that the picture was painted from memory. The view has been identified as the one from his bedroom window, facing east, a view which Van Gogh painted variations of no fewer than twenty-one times, including The Starry Night. "Through the iron-barred window," he wrote to his brother, Theo, around 23 May 1889, "I can see an enclosed square of wheat ... above which, in the morning, I watch the sun rise in all its glory.',
    "The painting is a tronie, the Dutch 17th-century description of a 'head' that was not meant to be a portrait. It depicts a European girl wearing an exotic dress, an oriental turban, and what was thought to be a very large pearl as an earring. In 2014, Dutch astrophysicist Vincent Icke raised doubts about the material of the earring and argued that it looks more like polished tin than pearl on the grounds of the specular reflection, the pear shape and the large size of the earring.",
    'The scene occurs within a room where, on the left, a wide-eyed bull stands over a grieving woman holding a dead child in her arms. In the center of the room a horse falls in agony with a large gaping hole in its side, as if it had just been run through by a spear or javelin. The horse appears to be wearing chain mail armor, decorated with vertical tally marks arranged in rows. A dead and dismembered soldier lies under the horse. The hand of his severed right arm grasps a shattered sword, from which a flower grows.',
    "Penitent Magdalene is a painting by the Italian artist Artemisia Gentileschi. It hangs in Seville Cathedral. It has probably been in the cathedral since the late 17th century. The painting's first home was the collection of Fernando Enriquez Afan de Ribera, from 1626 to 1637. She returned to the subject later in the 1620s in Mary Magdalene as Melancholy.",
    "The painting, in vertical format, shows a close-up view of Christ's disciples struggling frantically against the heavy storm to regain control of their fishing boat. A huge wave beats the bow and rips the sail. One of the disciples is seen vomiting over the side. Another one, looking directly out at the viewer, is a self-portrait of the artist. Only Christ, depicted on the right, remains calm.",
    'The Great Wave off Kanagawa (Japanese: 神奈川沖浪裏, Hepburn: Kanagawa-oki Nami Ura, lit. "Under the Wave off Kanagawa"), also known as The Great Wave or simply The Wave, is a woodblock print by the Japanese ukiyo-e artist Hokusai. It was published sometime between 1829 and 1833 in the late Edo period as the first print in Hokusais series Thirty-six Views of Mount Fuji. The image depicts an enormous wave threatening three boats off the coast in the Sagami Bay (Kanagawa Prefecture) while Mount Fuji rises in the background.',
    'This self-portrait was one of about 32 produced over a 10-year period, and these were an important part of his work as a painter; he painted himself because he often lacked the money to pay for models. He took the painting with him to Auvers-sur-Oise, near Paris, where he showed it to Dr. Paul Gachet, who thought it was "absolutely fanatical". Art historians are divided as to whether this painting or Self-portrait without beard is Van Gogh final self-portrait. The art historians Ingo F. Walther and Jan Hulsker consider this to be the last.',
    'The Sleeping Gypsy (French: La Bohémienne endormie) is an 1897 oil painting by French Naïve artist Henri Rousseau (1844–1910). It is a fantastical depiction of a lion musing over a sleeping woman on a moonlit night. Rousseau first exhibited the painting at the 13th Salon des Indépendants, and tried unsuccessfully to sell it to the mayor of his hometown, Laval. Instead, it entered the private collection of a Parisian charcoal merchant where it remained until 1924, when it was discovered by the art critic Louis Vauxcelles.',
    `The Lady with an Ermine (Italian: Dama con l' ermino [ˈdaːma kon lermelˈliːno]; Polish: Dama z gronostajem) is a portrait painting widely attributed to the Italian Renaissance artist Leonardo da Vinci. Dated to c. 1489–1491, the work is painted in oils on a panel of walnut wood. Its subject is Cecilia Gallerani, a mistress of Ludovico Sforza ("Il Moro"), Duke of Milan; Leonardo was painter to the Sforza court at the time of its execution. It is one of only four surviving portraits of women painted by Leonardo, the others being Ginevra de Benci, La Belle Ferronnière and the Mona Lisa`,
    `The Night Café (French: Le Café de nuit) is an oil painting created by Dutch artist Vincent van Gogh in September 1888 in Arles. Its title is inscribed lower right beneath the signature. The painting is owned by Yale University and is currently held at the Yale University Art Gallery in New Haven, Connecticut. The interior depicted is the Café de la Gare, 30 Place Lamartine, run by Joseph-Michel Ginoux and his wife Marie, who in November 1888 posed for Van Gogh's and Gauguin's Arlésienne; a bit later, Joseph Ginoux evidently posed for both artists, too.`,
    `The Basket of Apples (French: Le panier de pommes) is a still life oil painting by French artist Paul Cézanne, which he created c. 1893. The painting is particularly remarkable for its creative composition, which rejected realistic representation in favour of distorting objects to create multiple perspectives. This approach eventually influenced other art movements, including Fauvism and Cubism. It belongs to the Helen Birch Bartlett Memorial Collection of the Art Institute of Chicago.`,
    `Cézanne painted four oil portraits of this Italian boy in the red vest, all in different poses, which allowed him to study the relationship between the figure and space. The most famous of the four, and the one commonly referred to by this title, is the one which depicts the boy in a melancholic seated pose with his elbow on a table and his head cradled in his hand. It is currently held in Zürich, Switzerland. The other three portraits, of different poses, are in museums in the US`,
    `It is considered one of the most original and complex paintings in Western art, because of its beauty, complex iconography, geometric orthogonal perspective, and expansion of the picture space with the use of a mirror. According to Ernst Gombrich "in its own way it was as new and revolutionary as Donatello's or Masaccio's work in Italy. A simple corner of the real world had suddenly been fixed on to a panel as if by magic ... For the first time in history the artist became the perfect eye-witness in the truest sense of the term".`,
    `The Mona Lisa (/ˌmoʊnə ˈliːsə/; italian: La Gioconda [la dʒoˈkonda] or Monna Lisa [ˈmɔnna ˈliːza]) is a half-length portrait painting by Italian artist Leonardo da Vinci. Considered an archetypal masterpiece of the Italian Renaissance, it has been described as "the best known, the most visited, the most written about, the most sung about, the most parodied work of art in the world". The painting's novel qualities include the subject's enigmatic expression, the monumentality of the composition, the subtle modelling of forms, and the atmospheric illusionism.`,
    `The painting depicts an elegant young woman on a swing. A smiling young man, hiding in the bushes on the left, watches her from a vantage point that allows him to see up into her billowing dress, where his arm is pointed with hat in hand. A smiling older man, who is nearly hidden in the shadows on the right, propels the swing with a pair of ropes. The older man appears to be unaware of the young man. As the young lady swings high, she throws her left leg up, allowing her dainty shoe to fly through the air.`
]

const sources = [
    '<a href="https://en.wikipedia.org/wiki/The_Starry_Night" target="_blank">Go to source</a>',
    '<a href="https://en.wikipedia.org/wiki/Girl_with_a_Pearl_Earring" target="_blank">Go to source</a>',
    '<a href="https://en.wikipedia.org/wiki/Guernica_(Picasso)" target="_blank">Go to source</a>',
    '<a href="https://en.wikipedia.org/wiki/Penitent_Magdalene_(Artemisia_Gentileschi)" target="_blank">Go to source</a>',
    '<a href="https://en.wikipedia.org/wiki/The_Storm_on_the_Sea_of_Galilee" target="_blank">Go to source</a>',
    '<a href="https://en.wikipedia.org/wiki/The_Great_Wave_off_Kanagawa" target="_blank">Go to source</a>',
    '<a href="https://en.wikipedia.org/wiki/Van_Gogh_self-portrait_(1889)" target="_blank">Go to source</a>',
    '<a href="https://en.wikipedia.org/wiki/The_Sleeping_Gypsy" target="_blank">Go to source</a>',
    '<a href="https://en.wikipedia.org/wiki/Lady_with_an_Ermine" target="_blank">Go to source</a>',
    '<a href="https://en.wikipedia.org/wiki/The_Night_Caf%C3%A9" target="_blank">Go to source</a>',
    '<a href="https://en.wikipedia.org/wiki/The_Basket_of_Apples" target="_blank">Go to source</a>',
    '<a href="https://en.wikipedia.org/wiki/The_Boy_in_the_Red_Vest" target="_blank">Go to source</a>',
    '<a href="https://en.wikipedia.org/wiki/Arnolfini_Portrait" target="_blank">Go to source</a>',
    '<a href="https://en.wikipedia.org/wiki/Mona_Lisa" target="_blank">Go to source</a>',
    '<a href="https://en.wikipedia.org/wiki/The_Swing_(Fragonard)" target="_blank">Go to source</a>'
]

const backBtn = document.querySelector('.back')
const nextBtn = document.querySelector('.next')

btn.forEach((button, index) => {
    button.addEventListener('click', () => {
        mainPage.classList.remove('selecionado')
        slideShows.classList.add('selecionado')
        btnStart.innerHTML = 'Stop Slideshow'
        currentSlide = index;
        toggleNamePaints(index)
        toggleImageHero(index)
        toggleAuthorNames(index)
        toggleAuthorImg(index)
        toggleDescriptions(index)
        toggleSources(index)
    })
});

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

function toggleNamePaints(index) {
    namePaint.innerHTML = names[index]
    footerPaint.innerHTML = names[index]
}

function toggleImageHero(index) {
    imagePaint.innerHTML = imagesPaint[index]
}

function toggleAuthorNames(index) {
    authorName.innerHTML = authors[index]
    footerAuthor.innerHTML = authors[index]
}

function toggleAuthorImg(index) {
    authorImage.innerHTML = authorImages[index]
}

function toggleDescriptions(index) {
    paintDescription.innerHTML = descriptions[index]
}

function toggleSources(index) {
    goToSource.innerHTML = sources[index]
}

btnStart.addEventListener('click', function () {
    mainPage.classList.toggle('selecionado')
    slideShows.classList.toggle('selecionado')
    btnStart.innerHTML = 'Stop Slideshow'
    if (mainPage.classList.contains('selecionado')) {
        btnStart.innerHTML = 'Start Slideshow'
    }
    toggleNamePaints(0)
    toggleImageHero(0)
    toggleAuthorNames(0)
    toggleAuthorImg(0)
    toggleDescriptions(0)
})

const btnShowImage = document.querySelector('.view-image')
const showImgPage = document.querySelector('.show-image')
const closeBtn = document.querySelector('.close')
const imgExpanded = document.querySelector('.img-expanded')

const galleryImg = [
    '<img src="./src/images/starry-night/gallery.jpg" alt="Starry Night">',
    '<img src="./src/images/girl-with-pearl-earring/gallery.jpg" alt="Girl With Pearl Earring">',
    '<img src="./src/images/guernica/gallery.jpg" alt="Guernica">',
    '<img src="./src/images/penitent-magdalene/gallery.jpg" alt="Penitent Magdalene">',
    '<img src="./src/images/the-storm-on-the-sea-of-galilee/gallery.jpg" alt="The Storm on the Sea of Galilee">',
    '<img src="./src/images/the-great-wave-off-kanagawa/gallery.jpg" alt="The Great Wave off Kanagawa">',
    '<img src="./src/images/van-gogh-self-portrait/gallery.jpg" alt="Van Gogh Self-portrait">',
    '<img src="./src/images/the-sleeping-gypsy/gallery.jpg" alt="The Sleeping Gypsy">',
    '<img src="./src/images/lady-with-an-ermine/gallery.jpg" alt="Lady With an Ermine">',
    '<img src="./src/images/the-night-cafe/gallery.jpg" alt="The Night Café">',
    '<img src="./src/images/the-basket-of-apples/gallery.jpg" alt="The Basket of Apples">',
    '<img src="./src/images/the-boy-in-the-red-vest/gallery.jpg" alt="The Boy in The Red Vest">',
    '<img src="./src/images/arnolfini-portrait/gallery.jpg" alt="Arnolfini">',
    '<img src="./src/images/mona-lisa/gallery.jpg" alt="Mona Lisa">',
    '<img src="./src/images/the-swing/gallery.jpg" alt="The Swing">'
];

btnShowImage.addEventListener('click', function () {
    showImgPage.classList.add('selecionado')
    imgExpanded.style.boxShadow = '10px 10px 0px 3000px rgba(0,0,0,0.75)';
    if (showImgPage.classList.contains('selecionado')) {
        nextBtn.disabled = true
        backBtn.disabled = true
        btnStart.disabled = true
        btnShowImage.disabled = true
    }

    imgExpanded.innerHTML = galleryImg[currentSlide]
})

closeBtn.addEventListener('click', function () {
    showImgPage.classList.remove('selecionado')
    nextBtn.disabled = false
    backBtn.disabled = false
    btnStart.disabled = false
    btnShowImage.disabled = false
})