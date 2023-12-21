# Snippet Poems
A digital magnet poetry board for creative idea generation. 

# Deployed Link

[Deployed Snippet Poems link](https://snippetpoems.netlify.app)

# Project Trello Board & User Stories

[Trello Project Board](https://trello.com/b/bibHc4z5/snippets-project)

# App Vision
It is a place for creative associations with a generated theme. Users could use this as a poetry app or a place to organize associated thoughts. It should be a place to have fun with little distraction. Users should be able to save, update, and delete their own poems. They should also be able to use custom themes generated on the spot with Open AI. 

# App Objectives Addressed

- the challenge of idea generation in a clutter-free environment
- the need for an interactive and enjoyable method of organizing thoughts
- the desire for a customizable creative outlet 

# Versions & Updates

### Version 3 (current)
*12-20-23*

- UI changes after feedback from beta tester/ dev associate
- Toasts added for async requests
- Github login functioning
- Google login functioning with many, many warnings for the user
- Notification box added to show selected tile, selected square, & board-related information to the user
- State updated for toast functions
- Feedback given to user on every part of the application
- Formatting changes for UI & CSS updated.
- README updated & Requirements.md added

### Version 2
*12-15-23*

- Changes everything to functional components & useState.
- Different requests and rendering.
- npm ERR! notsup Unsupported platform for fsevents@2.3.3: wanted {"os":"darwin"} (current: {"os":"linux"}) -- switched it to "darwin", "os", "linux"
- Updated UI for splitting words
- Requests of all kinds work locally
- App almost complete... just need to double check everything and fix deployments

### Version 1
*12-10-23*

The Magnet Board page is set up, along with basic information about the dev (me) and the application. There is a route for the Profile page. UI buttons set up for saving boards to the database. There is logic for selecting a square in the UI.

Still to do for MVP:
- Set up selecting tile in the UI & Alerts
- Set up Auth0
- Set up paths to individual database
- Render poems on Profile page for the user
- Make a route back to the Magnet Board page to make changes to that board.

# Languages 
Please see package.json for detailed versions. 

Languages: React/Vite, Node, CSS, Tailwind, Javascript, Mongoose, Express, Cors

Services: OpenAI API, Netlify, Render, MongoDB Atlas

# Domain Model
![Domain model](https://github.com/maddieamie/snippetpoems/assets/118625447/cc109b5c-90bb-4664-811d-23b75fd78c78)

# Database Model
![Server DB Model (1)](https://github.com/maddieamie/snippetpoems/assets/118625447/834fabf9-2af8-43c5-8179-a7da0d93b638)

# Wireframe
<img width="500" alt="WireFrame" src="https://github.com/maddieamie/snippetpoems/assets/118625447/f6b47414-523e-477a-8c57-fe1aa881d277">

# Usage Notes (!)

The generated themes are made to Open AI, but this is a lowest-tier-available level of service that I am using for development on this application. It's possible that I may exceed my limit of tokens for my subscription rate or financially as a budding dev, so the "Generate Theme" function is subject to that possibility. Thank you for your consideration.



