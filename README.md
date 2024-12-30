# Node EJS App

This is a Node.js application that uses EJS (Embedded JavaScript) as the templating engine. The app is designed to manage a parts list for work, allowing users to view, add, and delete parts.

## Project Structure

```
node-ejs-app
├── src
│   ├── app.js                  # Entry point of the application
│   ├── controllers             # Contains the logic for handling parts
│   │   └── partsController.js   # Controller for parts
│   ├── models                  # Defines the data structure
│   │   └── part.js             # Model for a part
│   ├── routes                  # Defines the application routes
│   │   └── parts.js            # Routes for parts
│   ├── views                   # EJS templates for rendering
│   │   ├── index.ejs           # Main landing page
│   │   ├── layout.ejs          # Layout template
│   │   └── parts               # Templates for parts
│   │       ├── add.ejs         # Form for adding a new part
│   │       ├── edit.ejs        # Form for editing an existing part
│   │       └── list.ejs        # List of all logged parts
│   └── public                  # Static files
│       ├── css
│       │   └── styles.css      # CSS styles for the application
│       └── js
│           └── scripts.js      # Client-side JavaScript
├── package.json                # NPM configuration file
├── .env                        # Environment variables
└── README.md                   # Project documentation
```

## Features
- View a list of parts
- Add new parts to the list
- Delete parts from the list

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/node-ejs-app.git
    ```

2. Navigate to the project directory:
    ```bash
    cd node-ejs-app
    ```

3. Install the dependencies:
    ```bash
    npm install
    ```

## Running the App

1. Start the application:
    ```bash
    npm start
    ```

2. Open your browser and go to `http://localhost:3000` to view the app.

## Usage

- To view the list of parts, navigate to the home page.
- To add a new part, click on the "Add Part" button and fill out the form.
- To delete a part, click on the "Delete" button next to the part you want to remove.

## Contributing

If you would like to contribute to this project, please fork the repository and submit a pull request.

