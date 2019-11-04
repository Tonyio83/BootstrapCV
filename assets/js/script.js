var navActive = document.querySelectorAll('.nav-link');//déclare une variable pour récupérer les liens de la navbar
for (var i = 0; i < navActive.length; i++) {//crée un tableau avec les liens de la navbar
  navActive[i].addEventListener('mouseover', function(){//créé une fonction permettant que les liens deviennent active en mettant la souris dessus
  var current = document.getElementsByClassName('active')//récpère la classe active dans une variable
  current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  })
}
