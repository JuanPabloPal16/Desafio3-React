let productos = [{
    id: '1',
    Nombre:'Jean 1',
    //Img:'',
    Descripcion:'Short negro',
    Precio:'$1500',
},
{
    id: '2',
    Nombre:'Jean 2',
    Descripcion:'Short azul',
    Precio:'$2500',

},
{
    id: '3',
    Nombre:'Jean 3',
    Descripcion:'jean nisse',
    Precio:'$1500',
},
{
    id: '4',
    Nombre:'Jean 4',
    Descripcion:'Jean locas',
    Precio:'$2500',
},
{
    id: '5',
    Nombre:'Jean 5',
    Descripcion:'short las locas',
    Precio:'$1500',
}
];

export const getFetch =() =>{
    return new Promise((resolver,reject)=>{
        setTimeout(()=>{
            resolver(productos)
        },2000)
    })
}