# Trading-Card-Collection-Organizer
ReactJS application that uses the Scryfall API to search for Magic the Gathering cards, allowing the user to add them to a collection database, organize them by color, and check the approximate price of individual cards as well as the whole collection

<h2>Live Deploy:</h2>
https://kind-bohr-2682d0.netlify.com/
<br>
<br>
<p/>
You may use the following credentials to login:
<br>
Username: test
<br>
Password: test

This ReactJS application stores user and card information in a PostgreSQL database. Login to view the user's current card collection. You will see the total approximate value of the collection in the top left corner. You can click on one of the five mana symbols above the card collection to sort the cards by that color. Click "Reset Colors" to remove the filter. 

<img src="gifs/loginfilter.gif"/>

Click "Search for Cards" and enter the name of a card into the input box in order to search the API for that card. Click "Save to Collection" under a card in the search results to add that card to the user's collection. The card can be deleted from the collection by going back to "View Collection" and clicking "Delete Card". 

<img src="gifs/searchdelete.gif"/>

You can logout with the button on the header, and once logged out you will find that the collection and search routes are protected:

<img src="gifs/logout.gif"/>

<h2>Known Issues as of 07/17/2019:</h2>
1. When logging in, the site is not properly redirecting the user to the collection page. You may need to hit login, then manually go to the collection page
<br>
2. Site is not currently mobile responsive
<br>
3. Clicking delete or save buttons too fast can crash the server
<br>
4. The API is often changing the image links they are returning. Images in the collections page may become broken

Card information is gathered from the Scryfall API, whose documentation can be found here: https://scryfall.com/docs/api

Magic the Gathering, card images, and mana symbol art are all copyright Wizards of the Coast. I am not affiliated with Wizards of the Coast.
