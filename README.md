# Boilerplate VITE + React + TypeScript

## Running the project

- Run <code>yarn</code> to install all dependencies
- Run <code>yarn dev</code> to start local server
- Run <code>yarn safe</code> to start local server through https

## Installed dependencies

- React Router DOM v6
- - Sub dependencies: localforage, match-sorter, sort-by
- Axios v1
- Luxon v3
- Material UI v5
- - Sub dependencies: @emotion/react, @emotion/styled, @mui/icons-material

## Project structure

Inside <code>src</code> folder

#### assets

This folder has all images, animations, sounds, videos, text files, etc. for the project.

- Use only optimized images

#### components

This folder has all the custom components. Follow the instructions to create a new component:

- Create a folder using the name, in UpperCamelCase, that you want to build the component.
- Create a file <code>index.tsx</code> inside this folder.
- Build the component, with ArrowFunction, using TypeScript and all the required libs.
- Try to create the component most generable as possible.
- Export as non-default. For example: <code>export {Button}</code>
- If it's necessary you can create a <code>styles.ts</code> file to put your custom style.
- To receive props you have to create a new type file and call it in index.tsx.
- The type file must have the name of component and the sufix d.ts. For example: <code>Button.d.ts</code>

#### config

This folder has all the settings for the project.

- services: It contains the API endpoint and axios settings
- theme: It contains all the colors and styles for the project
- types: It contains global types for the project

#### contexts

This folder has all the contexts for the project.

- Create a folder using the name, in UpperCamelCase, that you want to build the context.
- Create a file <code>index.tsx</code> inside this folder.
- Build the context using <code>Example/index.tsx</code> context.
- Don't forget to put the provider in <code>App.tsx</code>

#### hooks

This folder has all the custom hooks for the project.

#### routes

This folder has all the routes for the project.

- When creating a new route you must call the route in <code>app.routes.ts</code>, for authenticate routes, or <code>auth.routes.ts</code> for guest routes.
- You must put the route name in <code>routeTypes.d.ts</code> file.

#### services

This folder has all the API calls.

- Create a file with name in lowerCamelCase.
- Export as non-default. For example: <code>export const myFunction = () => {}</code>
- Use axios to call APIs.
- Use promise to create async functions.

#### styles

This folder has all the css files for the project

- Create files to organize your styles.
- Don't reuse the same class in different files, it could override styles.
- Import css files inside <code>main.tsx</code>

#### utils

This folder has all the utils functions for the project

- Create a file with name in lowerCamelCase.
- Export as non-default. For example: <code>export const myFunction = () => {}</code>

#### views

This folder has all the views for the project.

- Create a folder using the name, in UpperCamelCase, that you want to build the view.
- Create a file <code>index.tsx</code> inside this folder.
- Build the view, with ArrowFunction, using TypeScript and all the required libs.
- Export as default. For example: <code>export default Home</code>
- If it's necessary you can create a <code>styles.ts</code> file to put your custom style.
- Add this view in in <code>app.routes.ts</code>, for authenticate screen, or <code>auth.routes.ts</code> for guest screen.
