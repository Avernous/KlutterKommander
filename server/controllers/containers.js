import Container from '../models/container.js';
import Item from '../models/item.js';

export const getContainers = (req, res) => {
        Container.findAll().then( (result) => {
            res.json(result);
        })
        .catch((error) => console.log(error.message));
};

export const getContainer = (req, res) => {
    const containerId = req.params.containerId
    Container.findOne({ where: { id: containerId}}).then( (result) => {
            res.json(result);
        })
        .catch((error) => console.log(error.message));
    
};

export const getParentContainer = (req, res) => {
    // TODO - have this method use an recursive association from sequelize
    const containerId = req.params.containerId
    Container.findOne({ where: { id: containerId} }).then( (childContainer) => {
        Container.findOne({ where: { id: childContainer.parentContainerId}}).then((parentContainer) => {
            res.json(parentContainer);
        });
        
        })
        .catch((error) => console.log(error.message));
};

export const getchildContainers = (req, res) => {
    // TODO - have this method use an recursive associations from sequelize
    const containerId = req.params.containerId
    Container.findAll({ where: { parentContainerId: containerId} }).then( (childContainers) => {
            res.json(childContainers);
        })
        .catch((error) => console.log(error.message));
};

export const getItemsByContainer = (req, res) => {
    const containerId = req.params.containerId
    Item.findAll({ where: { containerId: containerId} })
    .then( (items) => {
        res.json(items);
    })
    .catch((error) => console.log(error.message));
};

export const createContainer = (req, res) => {
    
    //create Container
    
};

export const moveContainer = (req, res) => {
    //post that contains two container id's the first it the container to 
    //be moved the second is the container its being moved too.
};

export const deleteContainer = (req, res) => {
    //delete container
};