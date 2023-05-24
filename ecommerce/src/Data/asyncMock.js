const products = [
    {
        id: '1',
        name: 'Cómoda americana:',
        price: 12000,
        category: 'Cómodas',
        img:'../src/assets/img/comoda.jpg',
        stock: 20,
        description: 'Medidas:1,40m de ancho,79cm de alto y 45cm de profundidad.',
     
    },
    { 
        id: '2',
        name: 'Cómoda francesa azul:',
        price: 11000,
        category: 'Cómodas',
        img:'../src/assets/img/comodaazul2-min.jpg',
        stock: 10,
        description: 'Medidas:1,05m de ancho,93cm de alto y 45cm de profundidad.'
    },
    { 
        id: '3',
        name: 'Cómoda degrade:',
        price: 11000,
        category: 'Cómodas',
        img:'../src/assets/img/comodadegrade-min.jpeg',
        stock: 15,
        description: 'Medidas:76cm de ancho,94cm de alto y 40cm de profundidad.'
    },
    {
        id: '4',
        name: 'Mesas de luz americanas:',
        price: 8500,
        category: 'MesasDeLuz',
        img:'../src/assets/img/mesitasazul.jpeg',
        stock: 10,
        description: 'Medidas:49cm de ancho,64cm de alto y 39cm de profundidad.'   
     },
     {
        id: '5',
        name: 'Mesas de luz nórdicas:',
        price: 8000,
        category: 'MesasDeLuz',
        img:'../src/assets/img/mesitasnegro.jpg',
        stock: 15,
        description: 'Medidas:47cm de ancho,63cm de alto y 40cm de profundidad.'   
     },
     {
        id: '6',
        name: 'Mesas de luz americanas:',
        price: 9000,
        category: 'MesasDeLuz',
        img:'../src/assets/img/mesitasverde.jpg',
        stock: 17,
        description: 'Medidas:50cm de ancho,60cm de alto y 42de profundidad.'   
     },
     {
        id: '7',
        name: 'Juego de comedor americano:',
        price: 30000,
        category: 'JuegosDeComedor',
        img:'../src/assets/img/juegoamericano.jpg',
        stock: 12,
        description: 'Medidas:1,30m de ancho, 90cm de alto.'   
     },
     {
        id: '8',
        name: 'Juego de comedor country:',
        price: 19000,
        category: 'JuegosDeComedor',
        img:'../src/assets/img/country.jpg',
        stock: 16,
        description: 'Medidas:2,00 m de ancho,95cm de alto.'   
     },
     {
        id: '9',
        name: 'Juego de 6 sillas:',
        price: 10000,
        category: 'JuegosDeComedor',
        img:'../src/assets/img/juegodesillas.jpg',
        stock: 17,
        description: 'Medidas:50cm de ancho,60cm de alto y 42de profundidad.'   
     },
     {
        id: '10',
        name: 'Velas aromáticas:',
        price: 500,
        category: 'Decoración',
        img:'../src/assets/img/velaaromatica.jpg',
        stock: 9,
        description: 'Aromas: Coco, Vainilla, Cítrica y Bamboo.'   
     },
     {
        id: '11',
        name: 'Colgante araña:',
        price: 3000,
        category: 'Decoración',
        img:'../src/assets/img/candelabro.jpg',
        stock: 11,
        description: 'Medidas: 50cm de ancho, 37cm de alto.'   
     },
     {
        id: '12',
        name: 'Espejo francés blanco:',
        price: 4000,
        category: 'Decoración',
        img:'../src/assets/img/espejo.jpg',
        stock: 17,
        description: 'Medidas:1,00m de ancho,70cm de alto.'   
     },
];

export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout (() =>{
            setTimeout(() => {
                resolve(products)
            },400)
        })
    })
}

export const getProductById = (productId) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 400)
    })
}

export const getProductsByCategory = (category) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const filteredProducts = products.filter(prod => prod.category === category)
            resolve(filteredProducts)
        }, 400)
    })
}

