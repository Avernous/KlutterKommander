import Item from '../models/item.js';

export const getItems = (req, res) => {
    Item.findAll().then( (items) => {
            res.json(items);
        })
        .catch((error) => console.log(error.message));
    
};

export const getItem = (req, res) => {
    const itemId = req.params.itemId
    Item.findOne({ where: { id: itemId}}).then( (item) => {
            res.json(item);
        })
        .catch((error) => console.log(error.message));
    
};

export const getContainer = (req, res) => {
    const itemId = req.params.itemId
    Item.findOne({ where: { id: itemId} }).then( (item) => {
        item.getContainer().then((container) => {
            res.json(container);
        });
        
        })
        .catch((error) => console.log(error.message));
};

export const moveItem = () => {
    //move item to a different container
};

export const createItem = () => {
    //create a new item
};