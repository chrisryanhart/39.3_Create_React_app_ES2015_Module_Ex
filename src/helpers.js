// import React from 'react';

const choice = (items) => {
    const randNum = Math.floor(Math.random()*items.length);
    return items[randNum];

}
    
const remove = (items,item) => {
    const index = items.indexOf(item);

    index === -1 ? undefined : items.splice(index,1);
    
    return items;
}

export { choice, remove };