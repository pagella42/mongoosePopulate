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