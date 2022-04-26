import Container from '../models/container.js';

export const seedContainers = () => {
    Container.bulkCreate([
        {id: 1, name: 'Home', description: 'Our House in the middle of our street'},// giving a static id here makes sure the dependants work
        {name: 'Bedroom', description: 'where the beast sleepeth', parentContainerId: 1},
        {name: 'Living Room', description: 'the place with the tv and couch', parentContainerId: 1},
        {name: 'Hallway Closet', description: 'the closet in the hallway to the bathroom', parentContainerId: 1},
        {name: 'Kitchen', description: 'food go brrrrrrr', parentContainerId: 1},
        {name: 'Bathroom', description: 'watch out for the pee-pee-poo-poo man', parentContainerId: 1}
    ])
}