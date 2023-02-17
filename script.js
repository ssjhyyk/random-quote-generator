var quotes = [
  { quote: "Life is like a camera, focus on the good times, develop from the negatives and if things don't work out, take another shot.", author: "Unknown" },
  { quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
  { quote: "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.", author: "Christian D. Larson" },
  { quote: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
  { quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.", author: "Nelson Mandela" },
  { quote: "Life is 10% what happens to you and 90% how you react to it.", author: "Charles R. Swindoll" },
  { quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.", author: "Nelson Mandela" },
  { quote: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" },
  { quote: "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do.", author: "Steve Jobs" },
  { quote: "I have not failed. I've just found 10,000 ways that won't work.", author: "Thomas Edison" },
  { quote: "The best way to predict the future is to create it.",author: "Abraham Lincoln"},
  { quote: "Believe you can and you're halfway there.", author: "Theodore Roosevelt"},
  { quote: "The only limit to our realization of tomorrow will be our doubts of today.", author: "Franklin D. Roosevelt"},
  { quote: "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.", author: "Albert Schweitzer"},
  { quote: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius"}
];

function newQuote() {
var randomNumber = Math.floor(Math.random() * quotes.length);
document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber].quote;
}