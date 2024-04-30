# Setting Up the Project:

To replicate and deploy my web application on another machine, you can either clone the 
project repository using Git or download the project as a ZIP file from GitHub. Choose the method 
that best suits your setup.

## Cloning the Repository:

Open a terminal window and execute the following command to clone the project repository: 
```bash 
git clone https://github.com/Mohsin2107/connecthubnew.git
```

Navigate to the Project Directory to the cloned project directory:
```bash
cd connecthubnew
```

## Setting Up Environment Variables:

The next step involves setting up the necessary environment 
variables for the chat application.

### 1.	Install Dependencies: Ensure Node.js and npm are installed on your machine. 

Install project dependencies by running the following command within the project directory: 
```bash
npm install
```

### 2.	Configure Environment Variables: 

The project utilizes environment variables stored in a ‘.env’file. Follow these steps to configure the environment variables:

•	Locate the ‘.env.example’ file in the project root directory.
•	Create a new ‘.env’ file by copying the example file.
•	Open the .env file in a text editor and specify values for the required environment variables based on the provided examples.


## Running ConnectHub:

Once the dependencies and environment variables are configured, launch the web application using the following steps:

### 1.	Start the Backend Server: 
Run the following command in the project directory of terminal.
```bash
node backend/server.js
```
### 3.	Start the Application: 
Run the following command within the project directory to start the   
application.
```bash
  npm run dev
```

### 4.	
Open a web browser and navigate to http://localhost:3000/  to access the web application.
