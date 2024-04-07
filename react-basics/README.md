Try to bootstrap a basic React application using vite. 
Read more about vite here - https://vitejs.dev/

Create the following functionality - 
 - A basic TODO application where there are two input (title and description) boxes and users can add append TODOs to a div
 - Try using the same DOM functionality we did in week 4. Don't try to use state variables in React just yet
 - Just tro to port over our original HTML/JS impelementation over to a React project
 - Hard todo - If you can, try using `useState` that we discussed this week and propogate the TODOs using state (If you don't understand this, dont worry about it)


 //For React you need to Worry About Two things:
 Component - How a DOM element should render given an state. It is a reusable,dynamic HTML snippet that changes
             given the state
             
 State - An Object that represent current state of the application. Object here is javascript object
         It represent the dynamic thing in your website, basically the things that change. Anything that changes in the website need to be held in state

 Rerendering - A state change triggers the re-render. A re-render represents the actual DOM being manipulated
               when a state changes


User usually have to Define all you components once and then  all you have to do is  update the state of the app.
React takes care of the re-rendering process.


