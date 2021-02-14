const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
     name: {
         type: String,
         required: [true, 'Please enter product name'],
         trim: true,
         maxLength: [100, 'Product name cannot exceed 100 characters']
     },
     price: {
         type: Number,
         required: [true, 'Please enter Product price'],
         maxLength: [5, 'Product name cannot exceed 5 characters'],
         default: 0.0
     },
     description: {
        type: String,
        required: [true, 'Please enter product description'],
    },
    description: {
        type: Number,
        default: 0
    },
    images: [
        {
            public_id: {
                type: String,
                required: true
            },
            url: {
                type: String,
                required: true
            },
        }
    ],
    category: {
        type: String,
        required: [true, 'Please select category for this product'],
        enum: {
            values: [
                'Clothes/Shoes',
                'Accessories',
                'Watches',
                'Beauty/Health',
                'Sports'
            ],
            message: 'Please select correct category for this product'
        }
    },
    seller: {
        type: String,
        required: [true, 'Please enter product seller']
    },
    stock: {
        type: Number,
        required: [true, 'Please enter product in stock'],
        maxLength: [5, 'Product name cannot exceed 5 characters'],
        default: 0
    },
    numOfReviews: {
        type: Number,
        default: 0
    },
    reviews: [
        {
            name: {
                type: String,
                required: true
            },
            rating: {
                type: Number,
                required: true
            },
            comment: {
                type: String,
                required: true
            }

        }
    ],
    CreatedAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Product', productSchema);