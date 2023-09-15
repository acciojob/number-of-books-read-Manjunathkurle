const library = [
  {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true,
  },
  {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true,
  },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false,
  },
];

const numberOfBooksRead = () => {
  // write your code here
	 let count = 0;

  // Loop through the books in the library
  for (const book of library) {
    // Check if the readingStatus is true (indicating the book has been read)
    if (book.readingStatus === true) {
      // If true, increment the count
      count++;
    }
  }

  // Return the count of read books
  return count;
};

// Do not change the code below

alert(numberOfBooksRead());
