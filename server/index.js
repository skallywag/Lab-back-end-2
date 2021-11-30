const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())
const ctrl = require('./controller')

app.get('/api/houses', ctrl.getHouses)
app.post('/api/houses', ctrl.createHouse)
app.put('/api/houses/:id', ctrl.updateHouse)
app.delete('/api/houses/:id', ctrl.deleteHouse)





app.listen(4004, () => {
    console.log('Server wapred to 4004');
})