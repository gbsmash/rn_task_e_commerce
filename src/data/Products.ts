import Product from '../types/Product';

const products: Product[] = [
    {
        id: '1',
        title: 'Vado Odelle Dress',
        brand: 'Roller Rabbit',
        price: 198.00,
        imgPaths: [require('../assets/images/product_1.png'),require('../assets/images/product_1.png'),require('../assets/images/product_1.png')],
        description: 'Some description here',
        category: 'Dresses',
        rating: 5,
        isInStock: true,
        size: ['S','M','L','XL','XXL'],
        colors: ['#fff', '#000', '#CADCA7', '#F0C14B'],
        reviewsNumber: 200,
    },
    {
        id: '2',
        title: 'Bubble Elastic T-Shirt',
        brand: 'endless rose',
        price: 50.00,
        imgPaths: [require('../assets/images/product_2.jpg'),require('../assets/images/product_2.jpg'),require('../assets/images/product_2.jpg')],
        description: 'Some description here',
        category: 'Dresses',
        rating: 4,
        isInStock: true,
        size: ['S','M','L','XL','XXL'],
        colors: ['#fff', '#000', '#CADCA7', '#F0C14B'],
        reviewsNumber: 200,
    },
    {
        id: '3',
        title: 'Irregular Rib Skirt',
        brand: 'Theory',
        price: 345.00,
        imgPaths: [require('../assets/images/product_3.jpg'),require('../assets/images/product_3.jpg'),require('../assets/images/product_3.jpg')],
        description: 'Some description here',
        category: 'Bag',
        rating: 5,
        isInStock: true,
        size: ['S','M','L','XL','XXL'],
        colors: ['#fff', '#000', '#CADCA7', '#F0C14B'],
        reviewsNumber: 200,
    },
    {
        id: '4',
        title: 'Giselle Top in White Linen',
        brand: 'Madewell',
        price: 69.50,
        imgPaths: [require('../assets/images/product_4.jpg'),require('../assets/images/product_4.jpg'),require('../assets/images/product_4.jpg')],
        description: 'Some description here',
        category: 'Dresses',
        rating: 3,
        isInStock: true,
        size: ['S','M','L','XL','XXL'],
        colors: ['#fff', '#000', '#CADCA7', '#F0C14B'],
        reviewsNumber: 200,
    },
    {
        id: '5',
        title: 'Vado Odelle Dress',
        brand: 'Roller Rabbit',
        price: 198.00,
        imgPaths: [require('../assets/images/product_1.png'),require('../assets/images/product_1.png'),require('../assets/images/product_1.png')],
        description: 'Some description here',
        category: 'Dresses',
        rating: 2,
        isInStock: true,
        size: ['S','M','L','XL','XXL'],
        colors: ['#fff', '#000', '#CADCA7', '#F0C14B'],
        reviewsNumber: 200,
    },
    {
        id: '6',
        title: 'Bubble Elastic T-Shirt',
        brand: 'endless rose',
        price: 50.00,
        imgPaths: [require('../assets/images/product_2.jpg'),require('../assets/images/product_2.jpg'),require('../assets/images/product_2.jpg')],
        description: 'Some description here',
        category: 'Dresses',
        rating: 5,
        isInStock: true,
        size: ['S','M','L','XL','XXL'],
        colors: ['#fff', '#000', '#CADCA7', '#F0C14B'],
        reviewsNumber: 200,
    },
    {
        id: '7',
        title: 'Irregular Rib Skirt',
        brand: 'Theory',
        price: 345.00,
        imgPaths: [require('../assets/images/product_3.jpg'),require('../assets/images/product_3.jpg'),require('../assets/images/product_3.jpg')],
        description: 'Some description here',
        category: 'Bag',
        rating: 5,
        isInStock: true,
        size: ['S','M','L','XL','XXL'],
        colors: ['#fff', '#000', '#CADCA7', '#F0C14B'],
        reviewsNumber: 200,
    },
    {
        id: '8',
        title: 'Giselle Top in White Linen',
        brand: 'Madewell',
        price: 69.50,
        imgPaths: [require('../assets/images/product_4.jpg'),require('../assets/images/product_4.jpg'),require('../assets/images/product_4.jpg')],
        description: 'Some description here',
        category: 'Dresses',
        rating: 5,
        isInStock: true,
        size: ['S','M','L','XL','XXL'],
        colors: ['#fff', '#000', '#CADCA7', '#F0C14B'],
        reviewsNumber: 200,
    },
];

export default products;
