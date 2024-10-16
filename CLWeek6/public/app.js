let button;

button = document.getElementById("button");

button.addEventListener("click", 
    function() {
       // document.getElementById("hidden"); hide text and image before button is clicked

        // console.log("Working");
        fetch("banned_books.json")
        .then(response => response.json())
        .then(data => {
        
            let hiddenText = document.getElementsByClassName('hidden');
            let hiddenArray = [...hiddenText]
            hiddenArray.forEach(element => { 
                element.classList.remove("hidden");
                // console.log(element);
            })
            // console.log(data.title);
            let booksArray = data;
            let randomNumber = Math.floor(Math.random()*booksArray.length);
    
            let bookElement = document.getElementById('book_name');
            let currentBookTitle = booksArray[randomNumber].title;
            bookElement.innerHTML = currentBookTitle;

            let authorElement = document.getElementById('author_name');
            authorElement.innerHTML = booksArray[randomNumber].author;

            let stateElement = document.getElementById('state_name');
            stateElement.innerHTML = booksArray[randomNumber].state;

            // let districtElement = document.getElementById('district_name');
            // districtElement.innerHTML = booksArray[randomNumber].district;

            let dateElement = document.getElementById('date');
            dateElement.innerHTML = booksArray[randomNumber].date_of_challenge_or_removal;

            getBookData(currentBookTitle);
        })
       
    })

// PULLING DATA FROM GOOGLE BOOKS MAYBE THE RIGHT WAY
function getBookData(bookName){

    let googleBooksURL = 'https://www.googleapis.com/books/v1/volumes?q=';
    let googleBooksRequest = googleBooksURL + bookName;

    fetch(googleBooksRequest)
        .then(response => response.json())
        .then(data => {
        // Access purchase links
            let items = data.items;
            let buyLink = items[0].saleInfo.buyLink; 
                console.log(buyLink); // This will log the link to buy the book
                if (buyLink == "undefined"){
                    console.log("undefined value");
                    buyLink = "https://www.powells.com/";
                    // let linkElement = document.getElementById("pane_padding");
                    //     linkElement.innerHTML = "";
                    // //delete everythng within the tag
                }
            let buyElement = document.getElementById('purchase');
            buyElement.href = buyLink;
            
            let bookDescription = items[0].volumeInfo.description;
                console.log(bookDescription);
            let descriptionElement = document.getElementById('description');
            descriptionElement.innerHTML = bookDescription;

            let bookCover = items[0].volumeInfo.imageLinks.thumbnail;
                console.log(bookCover); 
            let coverElement = document.getElementById('cover');
            coverElement.src = bookCover;
    });
}


// CHATGPT BS
// let button = document.getElementById("button");

// button.addEventListener("click", function() {
//     fetch("banned_books.json")
//     .then(response => response.json())
//     .then(data => {
//         let booksArray = data;
//         let randomNumber = Math.floor(Math.random() * booksArray.length);
        
//         // Call the function to update the book details
//         updateBookDetails(booksArray[randomNumber]);
//     });
// });

// // Global function to update book details
// function updateBookDetails(book) {
//     let bookElement = document.getElementById('book_name');
//     bookElement.innerHTML = book.title;

//     let authorElement = document.getElementById('author_name');
//     authorElement.innerHTML = book.author;

//     let stateElement = document.getElementById('state_name');
//     stateElement.innerHTML = book.state;

//     // Uncomment if you need to display the district name
//     // let districtElement = document.getElementById('district_name');
//     // districtElement.innerHTML = book.district;

//     let dateElement = document.getElementById('date');
//     dateElement.innerHTML = book.date_of_challenge_or_removal;
// }

// CORRECTING ORDER OF THE NAME STRING - WON'T NEED ANYMORE 
// let fullName = "Green, John"; // Original string

//     // Step 1: Remove the comma
//     let modifiedName = fullName.replace(",", " ");
    
//     // Step 2: Find the index of the empty white space
//     let spaceIndex = modifiedName.indexOf(" ");
    
//     // Step 3: Use slice() to separate the string
//     let lastName = modifiedName.slice(0, spaceIndex);
//     let firstName = modifiedName.slice(spaceIndex + 1);
    
//     // Step 4: Add the strings back together in correct order
//     let correctOrderName = firstName + " " + lastName;
    
//     console.log(correctOrderName); // Outputs: "John Doe"
    

// PULLING AUTHOR DATA FROM WIKIPEDIA - CRAIGS CODE
// function getAuthorData(authorName){

//     let wikiURL = 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&titles=';
//     let wikiRequest = wikiURL + authorName;

//     $.ajax({
//         url: wikiRequest,
//         dataType: 'jsonp',
//         success: function (data) {
//             // do stuff with json (in this case an array)
//             console.log(data);

//             //do things....add the text to the page
//             let authorData = data.query.pages;
//             console.log(authorData);

//             let keyName = Object.keys(authorData)[0];
//             console.log(keyName);
//             let authorText = authorData[keyName].extract;
//             console.log(authorText);

//             // let authorElement = document.getElementById('author_name');
//             // authorElement.innerHTML = booksArray[randomNumber].author;
            
//             //add author Text to the

//         },
//         error: function () {
//             alert("Error");
//         }
//     });
// }
// let author = "Juno Dawson";
// getAuthorData(author);

// PULLING DATA FROM GOOGLE BOOKS API THE WRONG WAY AKA FRANKENSTEINING CRAIGS CODE
// function getBookData(bookName){

//     let googleBooksURL = 'https://www.googleapis.com/books/v1/volumes?q=';
//     let googleBooksRequest = googleBooksURLURL + bookName;

//     $.ajax({
//         url: googleBooksRequestRequest,
//         dataType: 'jsonp',
//         success: function (data) {
//             // do stuff with json (in this case an array)
//             console.log(data);

//             //do things....add the text to the page
//             let bookData = data.query.pages;
//             console.log(bookData);

//             let keyName = Object.keys(bookData)[0];
//             console.log(keyName);
//             let authorText = authorData[keyName].extract;
//             console.log(authorText);
            
//             //add author Text to the

//         },
//         error: function () {
//             alert("Error");
//         }
//     });