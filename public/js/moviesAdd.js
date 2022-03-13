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

    /* Variables form */
    let $rating = document.querySelector('#rating'),
    $awards = document.querySelector('#awards'),
    $release_date = document.querySelector('#release_date'),
    $duration = document.querySelector('#duration'),
    $genre = document.querySelector('#genre'),
    $form = document.querySelector('#form'),
    errors = ['El titulo es obligatorio',
    'El rating es obligatorio',
    'El premio es obligatorio',
    'La fecha es obligatoria',
    'La duracion es obligatoria',
    'El genero es obligatorio'];
    errorLength = 0;

    let $inputTitle = document.querySelector('#titulo');
    let secret = 0 ;
    $inputTitle.focus();
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
                alert("SECRETO MAGICO!")
                break;
                default:
                    secret=0;
        }
    })
    let $error = document.querySelectorAll('.error')
    let elements = document.querySelectorAll('#titulo, #rating, #awards, #duration, #release_date, #genre')
    //console.log(elements.length)
    //console.log(errors.length)
    for (let index = 0; index < elements.length; index++) {
        console.log(elements[index])
        elements[index].addEventListener('blur',()=>{
            if(elements[index].value == ''){
                $error[index].innerHTML = errors[index]
                $error[index].classList.add('is-invalid')
                errorLength++;
            }else{
                $error[index].classList.add('is-valid')
            }            
        })
    }
    let ulErrors = document.querySelector('.errors ul')
    $form.addEventListener('submit',(e)=>{
        if(errorLength>0){
            e.preventDefault()   
            if($rating.value>=0 || $rating.value <=10 || $rating.value!=''){
                console.log("Clasificaion")
                console.log($rating.value)
                ulErrors.innerHTML += '<li>La clasificaion debe estar entre cero (0) y diez (10)</li>'
                ulErrors.classList.add('alert-warning')
            }
            if($awards.value>=0 && $awards.value <=10 || $rating.value!=''){
                console.log("Premios")
                ulErrors.innerHTML += '<li>Los premios deben estar entre cero (0) y diez (10)</li>'
                ulErrors.classList.add('alert-warning')
            }
            if($duration.value <60 && $duration.value >360){
                console.log("Duracion")
                ulErrors.innerHTML += '<li>La duracion debe estar entre 60 y 360 minutos</li>'
                ulErrors.classList.add('alert-warning')
            }
        }else{
            alert("La película se guardó satisfactoriamente")
        }  
    })
}