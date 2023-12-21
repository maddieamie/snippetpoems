# Vision
The problem: the need for inspiration!

Many creatives feel stunted when looking to generate ideas about a theme or body of work. 

*Why bother*
It's a place to feel relaxed and unbothered by the world and hone in on your creative process. This gives you a minimalist environment in which to do so, while still feeling more interactive than a bullet point list or drawing things from a hat. 

*Problems addressed*

- the challenge of idea generation in a clutter-free environment
- the need for an interactive and enjoyable method of organizing thoughts
- the desire for a customizable creative outlet 

# Scope

 ### In Scope

 + A digital magnet poetry board that saves the positions and data of each square on the grid.
 + Users can save, update, and delete poems from the database.
 + Logged-in users can use provided themes.
 + Logged-in users can generate their own themes & access them via title from their database profile. 
 + Users' profile page will have a gallery of their saved poems. 


### Out of Scope

+ This application will not have a drag & drop feature.
+ This application will not allow users to change the appearance of the site itself. 

# Functional Requirements 

1. A user can use the magnet poetry board without errors. 
2. A user can save the poem to the database when logged in. 
3. A user can view their saved poems on their profile page. 
4. A user can use the update button on each poem of the Profile page to shift back to the Board page with the tiles used in place, update accordingly, and update it using the same functionality as saving it.
5. A user can delete a poem shown on the profile page from the database by clicking the delete button. 
6. A user can use the provided theme tiles if logged in. 
7. A user can use the buttons provided to navigate the magnet poetry board.
8. A user can generate their own theme using an API AI request. 
9. A user can find the themes they previously generated in the database by title, keyed to their email. 

# MVP

A user can log into the application, the page will render a generated amount of things from an API request, or from a cache that I have made after generating them on the back end: a home page with the poem board. There would be a second profile page with the user’s collection of poems where they can update, delete, or just view them. There will also be a minimalist about page that gives a description of the application and the dev in a minimalist sense. 


# Stretch Goals
-Make it accessible for screen readers. I have a professional contact that is willing to advise me on this.

-Allow the user to save a generated theme and access the same one again. 

# Non-functional Requirements

### Usability

This application heavily relies on communication with a server and its background database. For the user, this requires leveraging the types of requests and balancing what should be loaded and how. To make the magnet poetry board more useable, the basic theme is loaded without the user logging in at all as a hard array on the page, as is the basic UI & grid. This gives the user soemthing to interact with before requests occur. Secondly, the user needs to log in to start making many asynchronous requests to the server & database. For example, the other pre-loaded themes come from JSONs on the server & not the MongoDB database. 

### Security

This application in its most basic form can be used without logging in. If people just want to play around with generic words, they can. However, using the data that I provide on the server or their own data in the database requires logging in through Auth0. The main user CRUD functions involve interacting with the MongoDB database, and need authorization headers to go through properly before they work. 

# Data Flow Diagram 


