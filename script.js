let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`,
];

window.onload =  function(event) {
  
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${
      quotes[Math.floor(Math.random() * quotes.length)]
    }"`;
  };
  randomQuote();

  // Do all of your work inside the window.onload function (in other words, here!)

  // Part 1
  function changeTitle() {
    newTitle = "Dom Toretto, danger junkie";
    document.querySelector('#main-title').textContent = newTitle
  }
  changeTitle()

  // Part 2
document.querySelector('body').style.backgroundColor = 'blue';

  // Part 3
  function removeLast() {
    var list=document.getElementById('favorite-things');
    var listItems = list.getElementsByTagName('li');
    var last=listItems [listItems.length-1];
    list.removeChild(last);
  }
  removeLast()

  // Part 4
document.getElementsByClassName('special-title')[0].style.fontSize = '2em';

  // Part 5
  let races = document.querySelector('#past-races')
  races.removeChild(races.children[3])
  
  // Part 6
  var node = document.createElement('li');
  node.appendChild(document.createTextNode('High Bridge'));
   
  document.querySelector('#past-races').appendChild(node);  
  // Part 7
  const blogPost = document.createElement('div')
  let newPost = document.querySelector('.main')
  blogPost.className = 'blog-post purple'
  blogPost.innerHTML = '<h1>High Bridge</h1> <p>I jumped over that dang ole bridge</p>'
  newPost.appendChild(blogPost)
}