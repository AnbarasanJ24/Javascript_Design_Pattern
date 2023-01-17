import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

export const useDogImages = () => {
    const [dogs, setDogs] = useState([]);

    useEffect(() => {
        (async () => {
            const response  = await fetch('https://dog.ceo/api/breed/labrador/images/random/6');
            const {message:dogs} = await response.json();
            console.log(dogs)
            setDogs(dogs);
        }
        )()
    }, [])

    return dogs;
}