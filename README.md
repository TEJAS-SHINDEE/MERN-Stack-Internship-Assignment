# MERN-Stack-Internship-Assignment
## Product Transactions Dashboard
Overview
This project implements a full-stack MERN (MongoDB, Express, React, Node.js) application to display and analyze product transactions. 
The backend fetches data from a third-party API, stores it in a MongoDB database, and provides several APIs for retrieving, searching, and analyzing the data. 
The frontend uses these APIs to display transaction statistics, a table with search and pagination functionality, and charts for visual representation.

### Features
1. Initialize Database : Fetch data from a third-party API and seed the database.
2. Transactions Listing API : List all transactions with support for search, pagination, and filtering by month.
3. Statistics API: Get total sales, sold items, and unsold items for a selected month.
4. Bar Chart API: Get the number of items sold in different price ranges for a selected month and Get the count of items per category for a selected month.
Combined API: Fetches data from the Transactions, Statistics, Bar Chart, and Pie Chart APIs and returns a combined JSON response.
### Technologies Used
#### Backend: Node.js, Express.js, MongoDB, Mongoose, Axios.
#### Frontend: React.js, Chart.js, Axios.
#### Database: MongoDB.

APIs Implemented
#### 1. Initialize Database
URL: /api/transactions/seed \
Method: GET \
Description: Fetches the JSON data from the third-party API and seeds the MongoDB database with transactions. 

#### 3. Transactions Listing API
URL: /api/transactions \
Method: GET \
Query Parameters: \
month: (Required) Month of the transactions (e.g., January, February). \
page: (Optional) Page number for pagination (default: 1). \
per_page: (Optional) Number of records per page (default: 10). \
search: (Optional) Search text that matches product title/description/price. \
Description: Returns a paginated list of transactions for the selected month. Supports search on product title, description, and price. 

#### 5. Statistics API
URL: /api/statistics \
Method: GET \
Query Parameters: \
month: (Required) Month of the statistics (e.g., January, February). \
Description: Returns statistics for the selected month including: \
Total sale amount. \
Total number of sold items. \
Total number of unsold items. \

#### 6. Bar Chart API \
URL: /api/bar-chart \
Method: GET \
Query Parameters: \
month: (Required) Month of the data (e.g., January, February). \
Description: Returns the number of items in different price ranges (e.g., 0-100, 101-200) for the selected month. \

#### 8. Pie Chart API 
URL: /api/pie-chart \
Method: GET \
Query Parameters: \
month: (Required) Month of the data (e.g., January, February). \
Description: Returns the number of items in each category for the selected month. \

#### 10. Combined API
URL: /api/combined-data \
Method: GET \
Query Parameters: \
month: (Required) Month of the data (e.g., January, February).\
Description: Fetches and combines the data from the Transactions, Statistics, Bar Chart, and Pie Chart APIs and returns a single JSON response.\

### Frontend Features

#### 1. Transactions Table
URL: /transactions\
Description:
Displays a table of transactions fetched from the Transactions Listing API.
Supports search, pagination, and filtering by month.
The selected month is used to filter the transactions displayed in the table.
Includes "Next" and "Previous" buttons for pagination.
The "Search" box allows filtering transactions by product title, description, or price.

#### 2. Transactions Statistics
URL: /statistics\
Description:
Displays total sale amount, sold items, and unsold items for the selected month.
Fetches data from the Statistics API based on the selected month.

#### 3. Bar Chart
URL: /bar-chart
Description:
Displays a bar chart showing the number of items in different price ranges for the selected month.
Fetches data from the Bar Chart API based on the selected month.

#### 4. Pie Chart
URL: /pie-chart
Description:
Displays a pie chart showing the number of items per category for the selected month.
Fetches data from the Pie Chart API based on the selected month.

### Installation & Setup Instructions
#### Backend Setup
Clone the repository.\
Install dependencies by running:

```bash
npm install
```

Create a .env file with the following content:
```bash
MONGODB_URI=<your_mongodb_connection_string>
PORT=5000
```
Run the backend server:
```bash
npm start
```
Access the backend APIs on http://localhost:5000.
#### Frontend Setup
Navigate to the frontend folder.\
Install dependencies by running:
```bash
npm install
```
Start the frontend server:
```bash
npm run dev
```
Open http://localhost:5173 in your browser to view the frontend.

### Screenshots
Please replace the placeholder text with actual screenshots after you take them.

#### Transactions Table

#### Transactions Statistics

#### Bar Chart

#### Pie Chart

### Full Website Demo
You can access the full website demo by running both the backend and frontend servers as described above. The application includes a responsive design, allowing users to view transaction data, analyze statistics, and visualize data using charts.

Credits
This project was built using:

React for the frontend.
Node.js and Express for the backend.
MongoDB for data storage.
Chart.js for visualizing data.
