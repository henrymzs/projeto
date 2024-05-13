function mostrarServicos() {
    var interfacesLoja = document.getElementsByClassName("sobre");
    var interfacesServicos = document.getElementsByClassName("interface-servicos");
    for (var i = 0; i < interfacesLoja.length; i++) {
        interfacesLoja[i].style.display = "none";
    }
    for (var i = 0; i < interfacesServicos.length; i++) {
        interfacesServicos[i].style.display = "block";
    }
  }