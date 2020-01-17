There is a live demo available->  https://gracious-hopper-b1a0d7.netlify.com/



Personal comments about the exercise:

I had other ideas to implement but I tried to make it simple and stick to the pdf requirements, however wanted to share my other initiatives:

- Lazy load for the images
- Image optimization according the screen size
- Loader component while loading
- I did simulate a service however I left internal documentation of what's the correct way to do it
- I did apply a dynamic logic for render the component, I noticed the data.json had a type of component and check NBC site, and saw different tiles.. so I tried to simulate that.
- I did not added in my fake service error handling but I had it in mind.
- Wanted to apply something similar for lazy loading -> react.lazy
- I did use react-create-app and cleaned unnecesary files.
- I did not added test's however I know I could use them to verify the render of each component, or in the case the list was null or some wrong data.

Let me know if you have questions


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
