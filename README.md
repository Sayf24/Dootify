Trying to learn Material UI and expand on knowledge about API usage and Asynchronous calls. 

WHAT DOOTIFY DOES NOW:
Takes in a search and auto-completes the search using an API from HERE: https://developer.here.com/documentation/geocoding-search-api/dev_guide/topics/why-use.html

WHAT DOOTIFY WILL DO:
   DATA COLLECTION:
      Once search is complete, will ask user about their interests (EX. Bowling, biking, Movies) and then call the API once again to retrieve any locations related to the categories.
   CALCULATE SCORE:
      After it is all collected and saved, it will calculate the proximity and distance between each other and compare that to the users mode of transporation (EX. Car, bike, walk)
   RETURN TO USER:
      Then itll return a list of components that would be displayed on the screen along with a score from 1-10 and whether or not the trip would be worth it.