function pizzaOven(tipoCorteza, tipoSalsa, quesos, salsas) {
    var Pizza = {};
    Pizza.tipoCorteza = tipoCorteza;
    Pizza.tipoSalsa = tipoSalsa;
    Pizza.quesos = quesos;
    Pizza.salsas = salsas;
    return Pizza;
}
    
var pizza1 = pizzaOven("estilo Chicago", "tradicional", ["mozzarella"], ["pepperoni", "salchicha"]);
console.log(pizza1);
var pizza2 = pizzaOven( "lanzada a mano" , "marinara" , ["mozzarella", "feta"] , ["champiñones", "aceitunas", "cebollas"] );
console.log(pizza2);

var tipoCortezas = [
    "estilo Chicago",
    "lanzada a mano",
    "romana",
    "tradicional"
]
var tipoSalsas = [
    "Naranja",
    "marinara",
    "Tomate",
    "Tartara"
];
var quesos = [
    "mozzarella",
    "feta",
    "Cheddar",
    "Azul"
];
var salsas = [
    "pepperoni",
    "champiñones",
    "napolitana",
    "verde"
];
function crearPizza(tipoCortezas,tipoSalsas,quesos,salsas){
    var pizza = [];
    var numIngredientes = Math.floor(Math.random() * (3-1+1)) + 1; // Entre 1 y 3 ingredientes Math.floor(Math.random() * (myMax - myMin + 1) + myMin);
    var tipoCorteza = tipoCortezas[Math.floor(Math.random() * tipoCortezas.length)];
            pizza.push(tipoCorteza);
    var tipoSalsa = tipoSalsas[Math.floor(Math.random() * tipoSalsas.length)];
            pizza.push(tipoSalsa);
    for (var i = 0; i < numIngredientes; i++) {
        
        var queso = quesos[Math.floor(Math.random() * quesos.length)];
        pizza.push(queso);
        var Salsa = salsas[Math.floor(Math.random() * salsas.length)];
        pizza.push(Salsa);
      }
      return pizza;
}
var pizza3 = crearPizza(tipoCortezas,tipoSalsas,quesos,salsas);
var pizza4 = crearPizza(tipoCortezas,tipoSalsas,quesos,salsas);

console.log("Pizza 3:", pizza3);
console.log("Pizza 4:", pizza4);


