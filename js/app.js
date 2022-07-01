'use strict'



const menuIcon  = document.querySelector('#menu');
const menuNav   = document.querySelector('.banner-nav');
const navli1    = document.querySelector('.nav-li1');
const navli2    = document.querySelector('.nav-li2');
const navli3    = document.querySelector('.nav-li3');
const navli4    = document.querySelector('.nav-li4');
const bloque    = document.querySelectorAll('.bloque');
const h2        = document.querySelectorAll('.h2');

    

//OurWork Const
const divContainer = document.querySelectorAll('.OurWork-img');
const divImg = document.querySelectorAll('.Img');
const divContainerShow = document.querySelector('.OurWork-ImgShow')
const closeModal = document.querySelector('.fa-solid.fa-xmark')
//OurWork Const


menuNav.addEventListener('click',()=>{
    menuNav.classList.toggle('active')
})
menuIcon.addEventListener('click',()=>{
    menuNav.classList.toggle('active')
})
// Esto es una prueba


window.addEventListener('click' , e=>{
    console.log(e.target)
    if(menuNav.classList.contains('active')){
        if(e.target != navli1 && e.target != navli2 && e.target != navli3 && e.target != navli4  && e.target != menuIcon){
            menuNav.classList.toggle('active');
            console.log("Dentro");
        }
    }

})


divImg.forEach(divImg=>{
    divImg.addEventListener('click',()=>{
     let varID=parseInt(divImg.getAttribute('id'));

      for (var i = 0 ; i <= 4; i++ ) {
         if (varID == i){
            let varRuta       = divContainer[i].children[0].getAttribute('src');
            let varTitulo     = divContainer[i].children[1].innerHTML;
            let varDesc       = divContainer[i].children[2].innerHTML;
            let varMateriales  = divContainer[i].children[3].innerHTML;

            divContainerShow.children[1].children[1].setAttribute('src',varRuta);
            divContainerShow.children[1].children[0].innerHTML=varTitulo       
            // divContainerShow.children[2].children[0].children[0].innerHTML = varDesc;
            // divContainerShow.children[2].children[1].children[0].innerHTML = varMateriales;

            divContainerShow.classList.toggle('moves'); 
         }
      }
    })
})


closeModal.addEventListener('click',()=>{
    divContainerShow.classList.toggle('moves'); 
})


//OurWork 

//StaffVideo




//StaffVideo

//Materials

h2.forEach( ( cadaH2 , i )=>{
    h2[i].addEventListener('click', ()=>{      
        if(bloque[i].classList.contains('activo')){
            bloque[i].classList.remove('activo')
        }else{
            bloque[i].classList.add('activo')
        }
    })
})

//Materials
//COMENTARIO DE PRUEBA

// Sweet Alert

    function ShowAlert(){
        swal.fire({
            title: 'Want to see it in person?',
            text: "If you would like to view a slab in person please send us an email and we will arrange a meeting.",
            icon: 'success',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            confirmButtonText: "Great, let's have a meeting!"
          }).then((result) => {
            if (result.isConfirmed) {
              location = "index.html#Contact"
            }
          })
    }

// sweet Alert.


// File button

let file = document.querySelector('#archivo');
file.addEventListener('change',() => {
    document.querySelector('#nombre').innerHTML=file.files[0].name;
})

// File button

