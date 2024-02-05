

let continuar = true
while (continuar){
    let menu = parseInt(prompt("ingrese 1 - para ver jabon de carbon \n ingrese 2 - para ver jabon de almendra y jazmin \n  ingrese 3 -  para ver jabon de calendulas y lavanda \n ingrese 4 - para ver jabon de rosa msoqueta y sandalo"))

    switch(menu) {   
     case 1:
        console.log("Jabón de carbón activado y aloe vera Con esencia de naranja Contiene: aceite de oliva, agua, aceite de coco, carbón activo vegetal, aceite esencial de naranja")
        alert("este jabon esta dirigido a pieles acneicas")
        break

        case 2:
        console.log("ingredientes: olea europaea fruit oil, prunus amygdalus dulcis oil, aqua, cocos nucifera oil, sodium hydroxide, kaolin, jasminium officilnale oil, sodium lactate.")
        alert("este jabon esta dirigido a pieles secas gracias a su gran capacidad humectante")
        break
    case 3:
            console.log("Ingredientes: olea europaea fruit oil, aqua, cocos nucifera oil, aloe barbadensis juice, sodium hydroxide, chacoal powder, sodium lactate.")
            alert("este jabon esta dirigido a pieles sensibles o con peculiaridades patologicas")
            break
    
    case 4:
        console.log("olea europaea fruit oil, cocos nucifera oil, aqua, sodium hydroxide, rosa canina fruit oil, kaolin, sodium lactate.")    
        
        alert("este jabon esta dirigido a pieles maduras, siendo reafirmante y rejuvenecedor gracias a sus compuestos")
        break

        default:
            console.log("Gracias por su visita")
            break
    } 
    
    let confirmacion = prompt("desea hacer otra consulta? (si/no)").toLowerCase()
    if(confirmacion == "no") {
    continuar = false
    console.log("muchas gracias por su visita!")
    

}
}