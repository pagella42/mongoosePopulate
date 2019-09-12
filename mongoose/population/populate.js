const mongoose = require( 'mongoose' )
const Schema = mongoose.Schema

const bookSchema = new Schema({ 
    title: String,
    author: String,
    reviews: [{type: Schema.Types.ObjectId, ref: 'Review'}] //reference to an array of Review documents
  })
  
  const reviewSchema = new Schema({ 
    book: {type: Schema.Types.ObjectId, ref: 'Book'}, //reference to a Book document
    reviewText: String,
    critic: {type: Schema.Types.ObjectId, ref: 'Critic'} //reference to a Critic document
  })
  
  const criticSchema = new Schema({ 
    name: String,
    reviews: [{type: Schema.Types.ObjectId, ref: 'Review'}], //reference to an array of Review documents
  })


  const Book = mongoose.model("Book", bookSchema)
const Review = mongoose.model("Review", reviewSchema)
const Critic = mongoose.model("Critic", criticSchema)

b1.reviews.push(r1)
c1.reviews.push(r1)

b1.save()
c1.save()
r1.save()

Book.find({}, function(err, books){
    console.log(books)
})

module.exports = Expense