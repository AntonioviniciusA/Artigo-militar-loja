var docePizzaModal = document.getElementById("docePizzaModal");
var salgadaPizzaModal = document.getElementById("salgadaPizzaModal");
var bebidaModal = document.getElementById("bebidaModal");

var doce = document.getElementById("doce");
var salgadaPizzaBtn = document.getElementById("salgadaPizzaBtn");
var bebidaBtn = document.getElementById("bebidaBtn");

var fechardocePizza = document.getElementById("fechardocePizza");
var fecharsalgadaPizza = document.getElementById("fecharsalgadaPizza");
var fecharbebida = document.getElementById("fecharbebida");

doce.onclick = function() {
    docePizzaModal.style.display = "block";
}

salgadaPizzaBtn.onclick = function() {
    salgadaPizzaModal.style.display = "block";
}

bebidaBtn.onclick = function() {
    bebidaModal.style.display = "block";
}

fechardocePizza.onclick = function() {
    docePizzaModal.style.display = "none";
}

fecharsalgadaPizza.onclick = function() {
    salgadaPizzaModal.style.display = "none";
}

fecharbebida.onclick = function() {
    bebidaModal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == docePizzaModal) {
        docePizzaModal.style.display = "none";
    } else if (event.target == salgadaPizzaModal) {
        salgadaPizzaModal.style.display = "none";
    } else if (event.target == bebidaModal) {
        bebidaModal.style.display = "none";
    }
}

var Carrinhobtn = document.getElementById("Carrinhobtn");
var Carrinhoclose = document.getElementById("Carrinhofechar");
Carrinhobtn.onclick = function(){
    Carrinho.style.display = "block";
}
Carrinhofechar.onclick = function() {
        Carrinho.style.display = "none";
}


function addparacarrinho(formId, itemType) {
    var form = document.getElementById(formId);
    var items = form.querySelectorAll('input[type="checkbox"]:checked');
    var CarrinhoItems = document.getElementById("CarrinhoItems");

    items.forEach(function(item) {
        var listItem = document.createElement("li");
        listItem.textContent = itemType + " - " + item.value;
        var removeBtn = document.createElement("span");
        removeBtn.textContent = "x";
        removeBtn.classList.add("remove-item");
        removeBtn.onclick = function() {
            CarrinhoItems.removeChild(listItem);
        };
        listItem.appendChild(removeBtn);
        CarrinhoItems.appendChild(listItem);
    });

    form.reset();
    var modal = form.closest('.modal');
    modal.style.display = "none";
}




