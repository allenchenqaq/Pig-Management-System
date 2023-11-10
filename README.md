# Pig-Management-System
### Overview:
Develop a TypeScript application to assist Farmer Hoggett in managing his diverse collection of pigs. The application will categorize pigs based on unique attributes and abilities, providing features to add, delete, and view detailed information about each pig.


### Description:
Farmer Hoggett's farm is home to various pig breeds, and he has noticed that every Fall, there is a sudden influx of new piglets on his farm due to overbreeding. The application you develop will help him keep track of this burgeoning pig population. It will allow Farmer Hoggett to add, delete, and view all the pigs on his farm.

Pig Categories and Attributes:

Pigs are classified into four categories: Grey, Chestnut, White, and Black. Each category has unique attributes:

Grey pigs: Known for water rescues, possessing a swimming ability score (integer, 0-100).
Chestnut pigs: Linguistically gifted, each speaks a language (string representation, e.g., "English").
White pigs: Swift and used for racing, featuring a running ability score (integer, 0-100).
Black pigs: Strong and suited for heavy labour, with a strength ability score (integer, 1-10).
Each pig also has a name, breed, height, weight, and distinct personality.

For example, there could be a Black pig called Pork Chop, a Pot-bellied breed with a height of 10, weight of 20, and strength ability of 9 (the last attribute is due to it being a Black pig).


### User Requirements:
The application's main page should list all pigs, displaying only their names and categories. It must include functionality (buttons or links) to delete a pig or view more information about it.
All pigs of a particular category should be grouped and sorted by name.
When the user clicks on the More info button, more information will be revealed. This could be on a separate page or displayed directly on the main page (latter recommended).
When the user clicks the Delete button, an alert window should be displayed asking the user to confirm the deletion of the pig.
The main page should also have an Add button that allows the user to add new pigs into the system. The button could redirect you to a new window or reveal a form on the main page (latter recommended).
The addition form should dynamically present attributes based on the selected pig category.  For example, if the category Black pig is chosen, there could be a drop-down menu for the breed that includes Potbelly and a text box for strength.   
