// Define the image categories
const category1 = [
  "image\\cooking\\1 (7).jpg",
  "image\\cooking\\1 (11).jpg",
  "image\\cooking\\1 (12).jpg"
];
const category2 = [
  "image\\cooking\\1 (13).jpg",
  "image\\cooking\\1 (14).jpg",
  "image\\cooking\\1 (16).jpg"
];
const category3 = [
  "image\\cooking\\1 (18).jpg",
  "image\\cooking\\1 (20).jpg",
  "image\\cooking\\1 (21).jpg"
];

// Generate a random number between 0 and 2 to select a random category
const categoryIndex = Math.floor(Math.random() * 3);

// Use the selected category index to access the corresponding array of image URLs
let imageUrls;
if (categoryIndex === 0) {
  imageUrls = category1;
} else if (categoryIndex === 1) {
  imageUrls = category2;
} else {
  imageUrls = category3;
}

// Generate a random number between 0 and the length of the selected category array
const imageIndex = Math.floor(Math.random() * imageUrls.length);

// Use the selected image index to access the corresponding image URL
const imageUrl = imageUrls[imageIndex];

console.log(imageUrl); // Output the randomly selected image URL
// create a new image element
const imageElement = document.createElement("img");

// set the src attribute to the selected image URL
imageElement.src = imageUrl;

// add the image element to the page
document.body.appendChild(imageElement);