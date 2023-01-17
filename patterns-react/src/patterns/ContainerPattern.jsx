import React from 'react'
import {useDogImages} from './useDogImages'

const ContainerPattern = ()=>{
    let dogs = useDogImages();
    return dogs.map((dog, index) => <img src={dog} alt='Dog' />)
}

export default ContainerPattern