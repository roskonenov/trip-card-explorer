import React from 'react'
import { FaStar } from "react-icons/fa";


const Rating = ({ rating }) => {

    const stars = Array(5).fill(0);

    const colors = {
        yellow: "#ffb400",
        grey: "#797979ff"
    }

    return (
        <p className='rating'>
            {stars.map((_, index) => (
                <FaStar className='icon'
                    key={index}
                    color={rating > index ? colors.yellow : colors.grey} />
            ))}</p>
    )
}

export default Rating