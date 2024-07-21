# Event Management System

This project is an Event Management System built using React for the frontend and Spring Boot for the backend, with a SQL database. The application allows users to manage events, including creating, updating, deleting events, and registering attendees for events.

## Screenshots

| ![Screenshot (1674)](https://github.com/user-attachments/assets/211de2a0-8f51-4719-9bb3-92ab553dbf4d) | ![Screenshot (1673)](https://github.com/user-attachments/assets/57449421-7ce8-476f-9cda-25f0fec5263b) |
|:-----------------------------------------------------:|:-----------------------------------------------------:|
| ![Screenshot (1672)](https://github.com/user-attachments/assets/cbe72e5a-bc67-498d-8a55-72b1b57dd44a) | ![Screenshot (1671)](https://github.com/user-attachments/assets/4ad163e2-fb07-47be-90bc-8fbdd0eb05ff) |
| ![Screenshot (1669)](https://github.com/user-attachments/assets/24a0ae10-f4dd-4d9d-809b-cb728fb225a6) | |


## Features

### Backend
- **Database:** MYSQL to store event information (event name, description, date, location, and attendees).
- **API Endpoints:** 
  - Fetch all events
  - Add a new event
  - Update event details
  - Delete an event by its ID
  - Register an attendee to an event

### Frontend
- **Components:**
  - Form component for inputting event details
  - List component to display all events
  - Detail view for each event, displaying all information and a list of attendees
- **Features:**
  - Fetch and display the list of events from the backend when the page loads
  - Add a new event through the form
  - Update event details
  - Delete an event by its ID
  - Register an attendee to an event

### UI/UX and Styling
- User-friendly interface
- Custom styles written in CSS
- Responsive design for different device sizes

## Getting Started

### Prerequisites
- Java 11 or later
- Node.js and npm
- SQL
- Git

### Backend Setup

 Clone the repository:
   ```bash
   git clone [https://github.com/yourusername/event-management-system.git](https://github.com/IT21754470/Event-management.git)
   
   ```


Configure the SQL database:

-Create a new SQL database.
-Update the application.properties file with your database credentials.
-Build and run the Spring Boot application:


```bash

./mvnw clean install
./mvnw spring-boot:run

```

## Frontend Setup
```bash
cd fullstack-front
Install the dependencies:
npm install
```

Start the React application:

bash
```
npm start

```
## API Documentation

- The backend exposes the following API endpoints:
- GET /getEvent: Fetch all events
- POST /addEvent: Add a new event
- PUT /updateEvent/{id}: Update event details
- DELETE /deleteEvent/{id}: Delete an event by its ID
- POST /addAttendee/{eventId}: Register an attendee to an event


