import React from 'react';
import card from '../Assets/images/images.png';
import Ribon from '../Assets/images/bow-tie.png';
import smallcard from '../Assets/images/download.png';
import Giftcard from './Giftcards';

const Giftcards = () => {
    const cardData = [
        {
            id : 1,
            name : 'Gift Card',
            description : 'price:200',
            icon : card ,
            bgClass : 'bg-gradient-to-r from-purple-500 to-pink-500'
        },
        {
            id : 2,
            name : 'Ribon',
            description : 'Price-200',
            icon : Ribon ,
            bgClass : 'bg-gradient-to-r from-purple-500 to-pink-500'
        },
        {
            id : 3,
            name : 'Small card',
            description : 'Price-200',
            icon :smallcard ,
            bgClass : 'bg-gradient-to-r from-purple-500 to-pink-500'
        },
    ]
    return(
        <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                cardData.map(card => <Giftcards 
                    key={card.id}
                    card ={card}>
                </Giftcards>)
            }

        </div>
    );
};

export default Giftcards;