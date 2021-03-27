export const data = {
    name: "Oxydation of aldoses",
    title: "Aldonic acid formation",
    description: "Alditols are organic compounds, typically derived from sugars, containing one hydroxyle group attached to each carbon atom.",
    image: "<img src='/static/module/reaction6/icon.png' style='width: 50%;position: relative; top:120px; left:40px'>",
    infoImage: "<img src='/static/module/reaction6/infoImage.png'>",
    
    /*
    For the reagents, products and experimental condition,
    please indicate a .obj file, a .mtl file and a preset marker.
    */
   
    type: {
        // list of reagents
        reagents: {
            reagent1: ["Dgluc.obj", "Dgluc.mtl", "OSE"],
            reagent2: ["NitricAcid.obj", "NitricAcid.mtl", "AH"],
        },

        // list of products
        products: {
            product1: ["DglucAcid.obj", "DglucAcid.mtl", "OSE"],
            product2: ["NitricAcid.obj", "NitricAcid.mtl", "AH"]
        },
    },
    // list of condition
    conditions: {
    },
    legend : {
        atoms : ['carbon', 'oxygen', 'hydrogen', 'nitrogen'],
        markers : {
            "OSE" : "D-glucose",
            "AH" : "Nitric Acid"
        }
    }
};