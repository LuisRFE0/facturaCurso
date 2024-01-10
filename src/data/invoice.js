export const invoice = {
    id: 10,
    name: 'Componentes Pc',
    client: {
        name: 'Pepe',
        lastName: 'Doe',
        address: {
            country: 'USA',
            city: 'Los Angeles',
            street: 'One Street',
            number: 12
        }
    },
    company: {
        name: 'New Egg',
        fiscalNumber: 123456,
    },
    items: [
        {
            id: 1,
            product: 'Monitor Asus',
            price: 300,
            quatity: 1,
        },
        {
            id: 2,
            product: 'Cpu Intel i7',
            price: 499,
            quatity: 1,
        },
        {
            id: 3,
            product: 'Corsair keyboard Mecanico',
            price: 150,
            quatity: 2,
        }



    ]


}