# Tensorflow-CUDA-QA-Extension 
- project size `96.5MB`
- only `public\Models\` `96.4MB`
- with `node_modules` `1.5GB`

This project is part of the tasks required in the AI Dojo - AI 4 Web Developers bootcamp.

## Project Description

The project consists of a Chrome extension with a backend implemented using Node.js and Express. It utilizes TensorFlow Q&A (qna) and CUDA to provide question-answering functionality based on the content of the open webpage.

## Installation

To install and run the project, follow these steps:

1. Clone the repository:
```
git clone https://github.com/AhmedAlEssam/Tensorflow-CUDA-QA-Extension.git 
```

2. Install the dependencies:
```
cd Tensorflow-CUDA-QA-Extension
npm install
```
3. Set up the necessary libraries:
- Install CUDA Toolkit and ensure proper GPU drivers are installed.
- Install cuDNN library.

4. Configure the TensorFlow environment:
- Open the `index.js` file and uncomment either of the following lines based on your preferred TensorFlow version:
  ```javascript
  var tf = require('@tensorflow/tfjs-node-gpu'); // To use GPU
  // var tf = require('@tensorflow/tfjs-node'); // To use CPU
  ```

5. Start the server:
   ```
   npm start
   ```
   
6. Load the Chrome extension:
- Open Google Chrome and go to `chrome://extensions`.
- Enable Developer mode.
- Click on "Load unpacked" and select the `qnaExtension` folder from the project directory.

7. Use the Chrome extension:
- now only for testing the extention work only with two domaines 
    - https://developer.chrome.com/
    - https://en.wikipedia.org/
- Open anyone of previos webpages and its sub-pages and click on the extension icon.
- Enter your question related to the webpage content.
- The extension will provide an answer based on the content of the page.

## Project Structure

The project files and directories are structured as follows:

- `index.js`: The main Node.js backend file containing the server and question-answering functionality.
- `qnaExtension/`: The Chrome extension folder containing the necessary files to load and use the extension.
- `public/`: `96.5MB` The public directory for serving static files(Model 26 files).

## Dependencies

The project uses the following libraries and dependencies:

```json
"dependencies": {
 "@tensorflow-models/qna": "^1.0.1",
 "@tensorflow/tfjs-node": "^4.8.0",
 "@tensorflow/tfjs-node-gpu": "^4.7.0",
 "cors": "^2.8.5",
 "express": "^4.18.2",
 "nodemon": "^2.0.22"
}
```

##Usage

- Make sure the server is running by executing the command ``npm start``.
- Load the Chrome extension and open a webpage.
- Click on the extension icon and enter your question.
- The extension will provide an answer based on the content of the page.
  
##Notes

- The TensorFlow models are loaded offline in `public` folder and included in the project. They do not require additional downloads.
- The project initially used the `@tensorflow/tfjs-node` library for CPU usage. However, to improve performance, it was switched to the `@tensorflow/tfjs-node-gpu` library, which utilizes the Nvidia GPU with CUDA support.
- To switch back to CPU usage, comment out the line:
 ```
var tf = require('@tensorflow/tfjs-node-gpu');
```
and uncomment the line:

```
// var tf = require('@tensorflow/tfjs-node')
```

When using the `@tensorflow/tfjs-node` library, which utilizes the central processing unit (CPU), we observed that the time taken to load the model ranges `from 9 seconds to 35 seconds`, and the time taken to answer questions is `approximately 9 seconds`.

On the other hand, when using the `@tensorflow/tfjs-node-gpu` library, we found that the time taken to load the model is `less than 4 seconds`, and the time taken to answer questions is `less than 1 second`.


Therefore, it is evident that using the `@tensorflow/tfjs-node-gpu` library, which leverages the graphics processing unit (GPU), significantly improves performance. The model can be loaded and questions can be answered much faster compared to using the central processing unit.


##Contribution

- The project is open for collaboration and modifications under the MIT license. Please provide proper attribution when using the source code.

