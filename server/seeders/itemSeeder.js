import Item from '../models/item.js';

export const seedItems = () => {
    Item.bulkCreate([
        {name: 'Aqua-Grey 4k Resin', description: 'Grey phrozen 4k resin', brand: 'Phrozen', color: 'Grey', containerId: 3},
        {name: 'Grey Resin', description: 'Elegoo Grey Resin', brand: 'Elegoo', color: 'Grey', containerId: 3},
        {name: 'Red Resin', description: 'Elegoo Red Resin', brand: 'Elegoo', color: 'Red', containerId: 3} 
    ])
}