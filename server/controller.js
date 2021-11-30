
const houses = require('./db.json')
let houseId = 4

module.exports = {
    getHouses: (req, res) => {
       res.status(200).send(houses) 
    },

    deleteHouse: (req, res) => {
        let {id} = req.params

        let index = houses.findIndex(elem => +elem.id === +id)
                houses.splice(index, 1)
                    res.status(200).send(houses)
    },

    createHouse: (req, res) => {
        const {address, price, imageURL} = req.body
        let newHouse = {
            address,
            price, 
            imageURL,
            id: houseId
        }
        houses.push(newHouse)
        res.status(200).send(houses)

        houseId = houseId++
    },

    updateHouse: (req, res) => {
        const {id} = req.params
        const {type} = req.body

        let index = houses.findIndex(elem => +elem.id === +id)

   
       if(type === 'plus'){
            houses[index].price+=10000
            res.status(200).send(houses)
        }
        else if(type === 'minus'){
            houses[index].price-=10000
            res.status(200).send(houses)
        }
    }
}

