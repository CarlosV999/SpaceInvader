const grille = document.querySelector('.grille')
let emplacementJoueur = 202


for(let i = 0; i < 225; i++)
{
    const carre = document.createElement('div')
    grille.appendChild(carre)
}

const miniCarres = Array.from(document.querySelectorAll('.grille div'))

const envahisseur = [
    0,1,2,3,4,5,6,7,8,9,
    15,16,17,18,19,20,21,22,23,24,
    30,31,32,33,34,35,36,37,38,39
]

function dessiner() 
{
    for(let i = 0; i < envahisseur.length; i++)
    {

        miniCarres[envahisseur[i]].classList.add('envahisseur')

    }
}

dessiner()

miniCarres[emplacementJoueur].classList.add('joueur')