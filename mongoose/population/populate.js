const mongoose = require( 'mongoose' )
const Schema = mongoose.Schema

const bookSchema = new Schema({ 
    title: String,
    author: String,
    reviews: [reviewSchema]
  })
  
  const reviewSchema = new Schema({ 
    book: bookSchema,
    reviewText: String,
    critic: criticSchema
  })
  
  const criticSchema = new Schema({ 
    name: String,
    reviews: [reviewSchema],
  })




  const Book = mongoose.model("Book", bookSchema)
const Review = mongoose.model("Review", reviewSchema)
const Critic = mongoose.model("Critic", criticSchema)


module.exports = Expense