module.exports = {
    getInventory: (req,res) =>{
        let db = req.app.get('db')
        db.get_all_inventory().then( inventory =>{
            res.status(200).send(inventory)
        })
    },
    addInventory: (req,res) =>{
        res.sendStatus(200)
    },
    sellInventory: (req,res) =>{
        res.sendStatus(200)
    }
}