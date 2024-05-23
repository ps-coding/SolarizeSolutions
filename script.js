
let randomFacts = [ 'The clean energy sector employs approximately 6.5 million people worldwide.', 
                    'More capacity for renewable power is being added globally than for fossil fuels.',
                    'Solar and wind power systems are less likely to fail due to severe weather, as they’re spread out over a larger area and made up of multiple pieces of equipment.',
                    'Global investments in green energy solutions have surpassed those in fossil fuels since 2011.',
                    'A report published by the U.S. Energy Information Administration (EIA) suggests that renewable energy sources could account for almost 50% of the world’s power generation by 2050.',
                    'The sun produces an incredible amount of energy—about 173,000 terawatts—more than 10,000 times the world’s total energy use.',
                    'The renewable energy industry is expected to be valued at about $1,512.3 billion by 2025.'

];

let factImgs = [ "media/fact1.jpg", "media/fact2.jpg", "media/fact3.jpg", "media/fact4.jpg", "media/fact5.jpg", "media/fact6.jpg", "media/fact7.jpg" ]
let wordDiv = document.getElementById( 'fact' );
let wordImg = document.getElementById("factImage")
let lastNum = 0;
function randomFact() {
    
    var randomNum = Math.floor(  Math.random() * randomFacts.length );
    if (randomNum == lastNum)
        randomFact()
    wordDiv.innerHTML = randomFacts[ randomNum ];
    wordImg.src= factImgs[ randomNum ];
    lastNum = randomNum;
}