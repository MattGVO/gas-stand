module.exports = {
    getInventory: (req,res) =>{
        let db = req.app.get('db')
        db.get_all_inventory().then( inventory =>{
            res.status(200).send(inventory)
        })
    },
    addInventory: async (req,res) =>{
        const { itemName, category, quantity, price } = req.body
        let db = req.app.get('db')
        let items = await db.add_item([itemName,category,quantity,price])
        res.status(201).send(items)
    },
    sellInventory: async (req,res) =>{
        const { id } = req.params
        let db = req.app.get('db')
        let inventory = await db.sell_inventory([id])
        res.status(200).send(inventory)
    }
}