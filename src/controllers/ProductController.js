const mongosse = require('mongoose');

const Product = mongosse.model('Product');

module.exports = {
    async index(req, res) {
        const { page = 1 }  = req.query;
        const products = await Product.paginate({},{page: page, limit:10});

        return res.json(products)
    },

    async store(req, res){
        //criacao
        const product = await Product.create(req.body);

        return res.json(product);
    },

    async show(req, res){
        const product = await Product.findById(req.params.id);

        return res.json(product);
    },

    async update(req, res){
        //{new: true} faz retornar o produto atualizado para dentro do product
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, {new: true});

        return res.json(product);
    },

    async destroy(req, res){
        console.log(req.params.id)
        await Product.findByIdAndRemove(req.params.id);

        res.send();
    }
};