# Dictionary with React!

Project built using React library. Multiple React features were used here: Hooks, Redux, Routing etc.

## How to use

Use **"search"** to search the English word and find its meanings and phonetics.

## Project structure

* **/tsconfig.json** file includes *TypeScript configuration*.

* **/public/** depository includes *index.html* file. React will render its DOM there.

* **/src/** depository includes *development code (SASS & TypeScript)*:
  
  * **/store/** includes *"Redux"* related code.
  
  * * **/ResultPageElements/** includes *"Result Page"* related code.
   
* **/App.tsx** is a *head* (main) functional component. It is wrapper of all React components.
     
* **/index.tsx** inserts *App.tsx* into the *root* div element of *index.html* file. 
       
* **/.gitignore** is a list filled with exceptions for Git. Once the whole project is commited exceptions will be ignored. 
         
* **/.package.json** and **/.package-lock.json** both keep the list of requirements, which allow npm to download all necessary dependencies for further successful project loading. 
