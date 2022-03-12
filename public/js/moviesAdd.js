window.onload = function(){
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    let $changeColor = document.querySelector('.moviesAddTitulo')
    let $addColor = document.querySelector('.botonAgregar')
    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');

    function colorRandom(...colores){
        let random = Math.floor((Math.random() * (5-0))+0);
        let colorRandom = colores[random]
        return colorRandom
    }
    $changeColor.addEventListener('mouseover',() =>{
        $changeColor.style.color = colorRandom('red','blue','orange','yellow','brown');
    })

    let $inputTitle = document.querySelector('#titulo');
    let secret = 0 ;
    $inputTitle.addEventListener('keydown',(event)=>{
        switch( true){
            case event.key == "s" && secret == 0:
                secret = 1;
                break;
            case event.key == "e" && secret == 1:
                secret = 2;
                break;
            case event.key == "c" && secret == 2:
                secret = 3;
                break;
            case event.key == "r" && secret == 3:
                secret = 4;
                break;
            case event.key == "e" && secret == 4:
                secret = 5;
                break;
            case event.key == "t" && secret == 5:
                secret = 6;
                break;
            case event.key == "o" && secret == 6:
                secret = 0;
                alert("SECRETO MAGIQUEE!")
                break;
                default:
                    secret=0;
        }
    })


}