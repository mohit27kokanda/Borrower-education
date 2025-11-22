# Borrower Education App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Features

- User authentication and loan management
- Loan details and breakdown visualization
- Payment and settlement options
- **Property Owner Verification (Karnataka State)** - New feature for verifying property ownership using Karnataka government APIs

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

## Property Owner Verification (Karnataka State)

This application includes integration with Karnataka government APIs for property owner name verification. See [KARNATAKA_PROPERTY_API.md](./KARNATAKA_PROPERTY_API.md) for detailed documentation.

### Available APIs

1. **Karnataka Bhoomi (Land Records)** - For rural land and property verification
2. **BBMP Property Tax** - For Bangalore Municipal Corporation area properties
3. **KAVERI e-Registration** - For property document verification

### Usage

The property verification functions are available in `src/service.js`:

```javascript
import {
  verifyPropertyOwnerBhoomi,
  verifyPropertyOwnerBBMP,
  searchPropertyDocument
} from './service';

// Example: Verify property using Bhoomi API
const propertyDetails = {
  districtId: "01",
  talukId: "001",
  villageId: "0001",
  surveyNumber: "123",
  hissaNumber: "1"
};

const result = await verifyPropertyOwnerBhoomi(propertyDetails);
if (result.success) {
  console.log("Owner Name:", result.ownerName);
}
```

For complete examples, refer to `src/propertyVerificationExample.js`.

### API Documentation

Complete API documentation including endpoints, payloads, and response formats is available in [KARNATAKA_PROPERTY_API.md](./KARNATAKA_PROPERTY_API.md).
