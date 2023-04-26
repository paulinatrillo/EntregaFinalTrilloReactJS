const products = [
    {
       id: '1',
       name: 'Cómoda estilo americano',
       price: 12000,
       category: 'Cómodas',
       img:'src/assets/img/comoda.jpg',
       stock: 20,
       description: 'Medidas:1,40m de ancho,79cm de alto y 45cm de profundidad.',
     
    },
    { id: '2',name: 'Cómoda francesa azul',price: 11000,category: 'Cómodas',img:'src/assets/img/comodaazul2-min.jpg',stock: 10, description: 'Medidas:1,05m de ancho,93cm de alto y 45cm de profundidad.'},
    { id: '3',name: 'Cómoda degrade',price: 11000,category: 'Cómodas',img:'src/assets/img/comodadegrade-min.jpeg',stock: 15, description: 'Medidas:76cm de ancho,94cm de alto y 40cm de profundidad.'},
    
]

export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout (() =>{
            setTimeout(() => {
                resolve(products)
            },400)
        })
    
    }
)}

export const getProductByIdn = (productId) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod = prod.id === productId))
        }, 400)
    })
}