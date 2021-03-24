export const data = {
    name: "Reduction of aldoses to alditols",
    title: "Alditol formation",
    description: "Alditols are organic compounds, typically derived from sugars, containing one hydroxyle group attached to each carbon atom.",
    image: "<img src='/static/module/reaction5/icon.png' style='width: 43%;position: relative; top:140px; left:30px'>",
    infoImage: "<img src='/static/module/reaction5/infoImage.png'>",//max weight : 500px
    
    /*
    For the reagents, products and experimental condition,
    please indicate a .obj file, a .mtl file and a preset marker.
    */
   
    type: {
        // list of reagents
        reagents: {
            reagent1: ["Glyceraldheyde.obj", "Glyceraldheyde.mtl", "letterA"],
            reagent2: ["NaBH4.obj", "NaBH4.mtl", "kanji"],
        },

        // list of products
        products: {
            product1: ["Glyceritol.obj", "Glyceritol.mtl", "letterA"],
            product2: ["NaBH4.obj", "NaBH4.mtl", "kanji"]
        },
    },
    // list of condition
    conditions: {
    },
};