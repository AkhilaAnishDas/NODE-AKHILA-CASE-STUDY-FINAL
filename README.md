# JobLink — Job Portal Backend System

A complete backend system for a job portal that connects jobseekers and employers through authentication, job management, resume handling, applications, notifications, interviews, administration, Firebase integration, Socket.io real-time communication, MongoDB Atlas, and Swagger API documentation. <br>

https://joblink-backend-aoff.onrender.com

---

## Student Details

| Name          | Akhila Anish Das                    |
| Roll No.      | 150096725016                        |
| Program       | B.Tech CSE & AI                     |
| University    | ITM Skills University, Kharghar     |
| Cohort        | Larry Page                          |
| Academic Year | 2025–2029                           |
| Semester      | Semester 3                          |
| Sprint        | Sprint 1                            |
| Project       | JobLink — Job Portal Backend System |


## 1. Project Overview

**JobLink** is a backend application developed as part of a backend development case study.

The system provides REST APIs for:

* User registration and login
* JWT-based authentication
* Role-based access control
* Job creation and management
* Job searching and filtering
* Resume upload and storage
* Job applications
* Application status management
* Employer-specific operations
* Admin operations
* Notifications
* Interview scheduling
* Firebase integration
* Socket.io real-time communication
* MongoDB database management
* Swagger API documentation

The project is built using **Node.js, Express.js, MongoDB, Mongoose, JWT, Firebase Admin SDK, Socket.io, Multer, and Swagger**.

---

# 2. Problem Statement

Traditional job portal systems require multiple operations such as user registration, authentication, job posting, resume management, applications, application tracking, interview scheduling, and notifications.

The objective of JobLink is to provide a centralized backend system that manages these operations through secure and structured REST APIs.

The backend supports different user roles and provides appropriate functionality for jobseekers, employers, and administrators.

---

# 3. Objectives

The main objectives of JobLink are:

* Implement secure user registration and login.
* Authenticate users using JWT.
* Implement role-based authorization.
* Allow employers to create and manage jobs.
* Allow users to search and filter jobs.
* Allow jobseekers to upload resumes.
* Allow jobseekers to apply for jobs.
* Allow employers to manage application statuses.
* Provide employer-specific job and application APIs.
* Provide administrator APIs.
* Implement notifications.
* Implement interview scheduling.
* Integrate Firebase.
* Implement Socket.io real-time communication.
* Store application data using MongoDB.
* Provide complete API documentation using Swagger.
* Demonstrate the complete backend workflow using Postman.

---

# 4. Technologies Used

| Technology         | Purpose                         |
| ------------------ | ------------------------------- |
| Node.js            | Backend runtime environment     |
| Express.js         | REST API framework              |
| MongoDB Atlas      | Cloud database                  |
| Mongoose           | MongoDB object modeling         |
| JWT                | Authentication                  |
| bcryptjs           | Password hashing                |
| Multer             | Resume file upload              |
| Firebase Admin SDK | Firebase integration            |
| Socket.io          | Real-time communication         |
| Swagger            | API documentation               |
| Postman            | API testing                     |
| dotenv             | Environment variable management |
| CORS               | Cross-origin request handling   |
| VS Code            | Development environment         |

---

# 5. User Roles

## Jobseeker

A jobseeker can:

* Register
* Login
* View protected profile
* Upload resumes
* View uploaded resumes
* View available jobs
* Search and filter jobs
* Apply for jobs
* View submitted applications
* View notifications
* View scheduled interviews

## Employer

An employer can:

* Login
* Create jobs
* View jobs created by the employer
* Update jobs
* Delete jobs
* View received applications
* Update application status
* Schedule interviews
* Manage interview status

## Admin

An administrator can:

* View all users
* View all jobs
* Manage administrative-level information

---

# 6. Major Features

## 6.1 Authentication

JobLink provides:

* User registration
* User login
* Password hashing using bcrypt
* JWT token generation
* Protected API routes
* Role-based authorization

JWT tokens are used to authenticate requests to protected endpoints.

---

## 6.2 Job Management

The job management module supports:

* Create job
* View all jobs
* View job by ID
* Update job
* Delete job
* Search jobs
* Filter jobs by location
* Filter jobs by job type
* Filter jobs by salary
* Filter jobs by status

Supported job types include:

* Full-time
* Part-time
* Internship
* Contract

---

## 6.3 Resume Management

The resume module provides:

* Resume upload
* Resume file storage
* Resume retrieval
* User-specific resume access

Supported resume formats:

* PDF
* DOC
* DOCX

Maximum upload size:

* 5 MB

Resume uploads are handled using Multer.

---

## 6.4 Application Management

The application module allows jobseekers to:

* Apply for jobs
* Attach a resume
* Add a cover letter
* View their applications

Employers can:

* View received applications
* Update application status

Application statuses include:

* Applied
* Shortlisted
* Rejected
* Hired

---

## 6.5 Employer Features

Employers have dedicated APIs to:

* View their posted jobs
* View applications received for their jobs
* Update application status

This separates employer operations from general jobseeker operations.

---

## 6.6 Admin Features

The admin module provides:

* View all users
* View all jobs

Admin routes are protected using authentication and admin authorization middleware.

---

## 6.7 Notification System

The notification module provides:

* Create notifications
* Retrieve user notifications
* Mark notifications as read

Notification types include:

* Application
* Status
* Interview
* General

---

## 6.8 Interview Scheduling

The interview module provides:

* Schedule interviews
* View interviews
* Update interview status

Interview statuses include:

* Scheduled
* Completed
* Cancelled

Interview information includes:

* Candidate
* Employer
* Job
* Date
* Meeting link
* Status

---

## 6.9 Firebase Integration

Firebase Admin SDK is integrated into the backend.

The Firebase service account is used securely through a local configuration file that is excluded from Git using `.gitignore`.

Firebase initialization is verified during server startup.

---

## 6.10 Socket.io Real-Time Communication

Socket.io is integrated with the HTTP server to support real-time communication.

The backend:

* Accepts Socket.io connections
* Sends a welcome event
* Detects client connections
* Detects client disconnections

A separate `socket-test.js` file is used to verify the Socket.io connection.

---

## 6.11 Swagger API Documentation

Swagger UI is integrated into the backend to provide interactive API documentation.

Swagger documents the major JobLink API modules and their available endpoints.

The documentation is available through:

```text
http://localhost:8080/api-docs
```

---

# 7. System Architecture

The project follows a modular backend structure:

```text
Client / Postman
       |
       v
Express.js Server
       |
       +--------------------+
       |                    |
       v                    v
Authentication          REST APIs
Middleware              Routes
       |                    |
       |                    v
       |               Controllers
       |                    |
       |                    v
       |                 Models
       |                    |
       |                    v
       |              MongoDB Atlas
       |
       +--------------------+
       |
       +---- Firebase
       |
       +---- Socket.io
       |
       +---- Swagger
```

---

# 8. Project Structure

```text
NODE-AKHILA-CASE-STUDY-FINAL/
│
├── joblink-backend/
│   │
│   ├── config/
│   │   ├── db.js
│   │   ├── firebase.js
│   │   └── swagger.js
│   │
│   ├── controllers/
│   │   ├── adminController.js
│   │   ├── applicationController.js
│   │   ├── authController.js
│   │   ├── employerController.js
│   │   ├── interviewController.js
│   │   ├── jobController.js
│   │   ├── notificationController.js
│   │   └── resumeController.js
│   │
│   ├── middleware/
│   │   ├── adminMiddleware.js
│   │   ├── authMiddleware.js
│   │   └── uploadMiddleware.js
│   │
│   ├── models/
│   │   ├── Application.js
│   │   ├── Interview.js
│   │   ├── Job.js
│   │   ├── Notification.js
│   │   ├── Resume.js
│   │   └── User.js
│   │
│   ├── routes/
│   │   ├── adminRoutes.js
│   │   ├── applicationRoutes.js
│   │   ├── authRoutes.js
│   │   ├── employerRoutes.js
│   │   ├── interviewRoutes.js
│   │   ├── jobRoutes.js
│   │   ├── notificationRoutes.js
│   │   └── resumeRoutes.js
│   │
│   ├── uploads/
│   │   └── resumes/
│   │
│   ├── .env
│   ├── .gitignore
│   ├── package.json
│   ├── package-lock.json
│   ├── server.js
│   └── socket-test.js
│
├── SCREENSHOTSSS/
│   ├── 01-Register-User-Success.png
│   ├── 02-Login-User-JWT-Success.png
│   ├── 03-Protected-Profile-JWT-Success.png
│   ├── 04-Create-Job-Success.png
│   ├── 05-Get-All-Jobs-Success.png
│   ├── 06-Get-Job-By-ID-Success.png
│   ├── 07-Update-Job-Success.png
│   ├── 08-Delete-Job-Success.png
│   ├── 09-Job-Search-Success.png
│   ├── 10-Resume-Upload-Success.png
│   ├── 11-Get-My-Resumes-Success.png
│   ├── 12-Apply-For-Job-Success.png
│   ├── 13-Application-Status-Update-Success.png
│   ├── 14-Employer-My-Jobs-Success.png
│   ├── 15-Employer-Received-Applications-Success.png
│   ├── 16-Admin-All-Users-Success.png
│   ├── 17-Admin-All-Jobs-Success.png
│   ├── 18-Create-Notification-Success.png
│   ├── 19-Get-My-Notifications-Success.png
│   ├── 20-Schedule-Interview-Success.png
│   ├── 21-Get-My-Interviews-Success.png
│   ├── 22-Update-Interview-Status-Success.png
│   ├── 23-Firebase-Initialization-Success.png
│   ├── 24-SocketIO-Connection-Success.png
│   └── 25-Swagger-API-Documentation-Success.png
│
└── README.md
```

---

# 9. Database Design

The application uses MongoDB Atlas with the database:

```text
joblink_db
```

The major collections are:

```text
users
jobs
resumes
applications
notifications
interviews
```

## Users

Stores:

* Name
* Email
* Password
* Role
* Timestamps

## Jobs

Stores:

* Title
* Company
* Description
* Location
* Salary
* Skills
* Job type
* Experience
* Employer
* Status

## Resumes

Stores:

* User
* Original filename
* Stored filename
* File path
* Upload date

## Applications

Stores:

* Job
* Applicant
* Resume
* Cover letter
* Application status
* Timestamps

## Notifications

Stores:

* User
* Message
* Notification type
* Read status
* Timestamps

## Interviews

Stores:

* Candidate
* Employer
* Job
* Interview date
* Meeting link
* Interview status

---

# 10. API Structure

## Authentication

```text
POST   /api/auth/register
POST   /api/auth/login
GET    /api/auth/profile
```

## Jobs

```text
POST   /api/jobs
GET    /api/jobs
GET    /api/jobs/:id
PUT    /api/jobs/:id
DELETE /api/jobs/:id
GET    /api/jobs/search
```

## Resumes

```text
POST   /api/resumes/upload
GET    /api/resumes
```

## Applications

```text
POST   /api/applications
GET    /api/applications/my
PUT    /api/applications/:id/status
```

## Employer

```text
GET    /api/employer/jobs
GET    /api/employer/applications
```

## Admin

```text
GET    /api/admin/users
GET    /api/admin/jobs
```

## Notifications

```text
POST   /api/notifications
GET    /api/notifications/my
PUT    /api/notifications/:id/read
```

## Interviews

```text
POST   /api/interviews
GET    /api/interviews/my
PUT    /api/interviews/:id/status
```

---

# 11. Authentication and Authorization

JobLink uses JWT-based authentication.

The authentication flow is:

```text
User Registration
       ↓
Password Hashing
       ↓
User Stored in MongoDB
       ↓
User Login
       ↓
Credentials Verified
       ↓
JWT Generated
       ↓
JWT Sent to Client
       ↓
Protected API Request
       ↓
Authentication Middleware
       ↓
User Authorized
```

Passwords are hashed using `bcryptjs` and are not returned in protected profile responses.

Role-based authorization is implemented for administrative operations.

---

# 12. Resume Upload Flow

```text
User
 ↓
Upload Resume
 ↓
Authentication Check
 ↓
Multer File Processing
 ↓
File Type Validation
 ↓
File Size Validation
 ↓
Resume Stored
 ↓
Resume Metadata Saved in MongoDB
```

Allowed formats:

```text
PDF
DOC
DOCX
```

Maximum file size:

```text
5 MB
```

---

# 13. Job Application Flow

```text
Jobseeker
    ↓
View Jobs
    ↓
Select Job
    ↓
Select Resume
    ↓
Submit Application
    ↓
Application Stored
    ↓
Employer Views Application
    ↓
Employer Updates Status
    ↓
Applied / Shortlisted / Rejected / Hired
```

---

# 14. Interview Flow

```text
Employer
    ↓
Select Candidate
    ↓
Schedule Interview
    ↓
Candidate + Employer + Job Details
    ↓
Interview Stored
    ↓
Candidate Views Interview
    ↓
Interview Status Updated
```

---

# 15. Environment Configuration

Create a `.env` file inside:

```text
joblink-backend/
```

The environment file contains configuration such as:

```env
PORT=8080
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

Sensitive credentials must not be committed to GitHub.

---

# 16. Security

The project protects sensitive configuration files using `.gitignore`.

The following files and folders are excluded from Git:

```text
node_modules/
.env
config/firebase-service-account.json
uploads/
```

The Firebase service account file contains private credentials and must never be publicly uploaded.

MongoDB credentials and JWT secrets are also stored through environment variables.

---

# 17. Installation

Navigate to the backend directory:

```bash
cd joblink-backend
```

Install dependencies:

```bash
npm install
```

---

# 18. Running the Server

Start the backend:

```bash
node server.js
```

For development with Nodemon:

```bash
npx nodemon server.js
```

The server runs on:

```text
http://localhost:8080
```

The root endpoint returns:

```json
{
  "message": "JobLink Backend is running successfully"
}
```

---

# 19. Swagger Documentation

Swagger UI is available at:

http://localhost:8080/api-docs

Swagger provides documentation for the JobLink REST APIs and displays the available endpoints in an interactive interface.

The documented API modules include:

* Authentication
* Jobs
* Resumes
* Applications
* Employer
* Admin
* Notifications
* Interviews

---

# 20. Socket.io Testing

Socket.io is tested using:

```text
socket-test.js
```

Run:

```bash
node socket-test.js
```

The test verifies:

* Socket connection
* Server welcome event
* Socket disconnection

---

# 21. API Testing

Postman was used to test the backend APIs.

The testing workflow covered:

1. User registration
2. User login
3. Protected profile
4. Job creation
5. Get all jobs
6. Get job by ID
7. Job update
8. Job deletion
9. Job search and filtering
10. Resume upload
11. Resume retrieval
12. Job application
13. Application status update
14. Employer jobs
15. Employer applications
16. Admin users
17. Admin jobs
18. Notification creation
19. Notification retrieval
20. Interview scheduling
21. Interview retrieval
22. Interview status update
23. Firebase initialization
24. Socket.io connection
25. Swagger documentation

---

# 22. Implementation and Testing Screenshots

## 22.1 User Registration

The registration API successfully creates a new JobLink user.

![01 Register User](SCREENSHOTSSS/01-Register-User-Success.png)

---

## 22.2 User Login and JWT

The login API successfully authenticates the user and returns a JWT token.

![02 Login User JWT](SCREENSHOTSSS/02-Login-User-JWT-Success.png)

---

## 22.3 Protected Profile

The protected profile endpoint successfully validates the JWT and returns authenticated user information.

![03 Protected Profile](SCREENSHOTSSS/03-Protected-Profile-JWT-Success.png)

---

## 22.4 Create Job

The employer successfully creates a new job.

![04 Create Job](SCREENSHOTSSS/04-Create-Job-Success.png)

---

## 22.5 Get All Jobs

The API successfully retrieves the available jobs.

![05 Get All Jobs](SCREENSHOTSSS/05-Get-All-Jobs-Success.png)

---

## 22.6 Get Job by ID

The API successfully retrieves a specific job using its ID.

![06 Get Job By ID](SCREENSHOTSSS/06-Get-Job-By-ID-Success.png)

---

## 22.7 Update Job

The job update API successfully modifies an existing job.

![07 Update Job](SCREENSHOTSSS/07-Update-Job-Success.png)

---

## 22.8 Delete Job

The delete API successfully removes a job.

![08 Delete Job](SCREENSHOTSSS/08-Delete-Job-Success.png)

---

## 22.9 Job Search and Filtering

The search API successfully searches and filters jobs using supported parameters.

![09 Job Search](SCREENSHOTSSS/09-Job-Search-Success.png)

---

## 22.10 Resume Upload

The resume upload API successfully uploads and stores a resume.

![10 Resume Upload](SCREENSHOTSSS/10-Resume-Upload-Success.png)

---

## 22.11 Get My Resumes

The API successfully retrieves resumes belonging to the authenticated user.

![11 Get My Resumes](SCREENSHOTSSS/11-Get-My-Resumes-Success.png)

---

## 22.12 Apply for Job

The jobseeker successfully submits an application for a job.

![12 Apply For Job](SCREENSHOTSSS/12-Apply-For-Job-Success.png)

---

## 22.13 Application Status Update

The employer successfully updates the application status.

![13 Application Status Update](SCREENSHOTSSS/13-Application-Status-Update-Success.png)

---

## 22.14 Employer My Jobs

The employer API successfully retrieves jobs posted by the authenticated employer.

![14 Employer My Jobs](SCREENSHOTSSS/14-Employer-My-Jobs-Success.png)

---

## 22.15 Employer Received Applications

The employer successfully retrieves applications received for their jobs.

![15 Employer Received Applications](SCREENSHOTSSS/15-Employer-Received-Applications-Success.png)

---

## 22.16 Admin All Users

The admin API successfully retrieves registered users.

![16 Admin All Users](SCREENSHOTSSS/16-Admin-All-Users-Success.png)

---

## 22.17 Admin All Jobs

The admin API successfully retrieves all jobs.

![17 Admin All Jobs](SCREENSHOTSSS/17-Admin-All-Jobs-Success.png)

---

## 22.18 Create Notification

The notification API successfully creates a notification.

![18 Create Notification](SCREENSHOTSSS/18-Create-Notification-Success.png)

---

## 22.19 Get My Notifications

The API successfully retrieves notifications for the authenticated user.

![19 Get My Notifications](SCREENSHOTSSS/19-Get-My-Notifications-Success.png)

---

## 22.20 Schedule Interview

The interview API successfully schedules an interview between the employer and candidate.

![20 Schedule Interview](SCREENSHOTSSS/20-Schedule-Interview-Success.png)

---

## 22.21 Get My Interviews

The API successfully retrieves interviews associated with the authenticated user.

![21 Get My Interviews](SCREENSHOTSSS/21-Get-My-Interviews-Success.png)

---

## 22.22 Update Interview Status

The interview status API successfully updates the interview status.

![22 Update Interview Status](SCREENSHOTSSS/22-Update-Interview-Status-Success.png)

---

## 22.23 Firebase Initialization

Firebase Admin SDK successfully initializes with the configured Firebase project.

![23 Firebase Initialization](SCREENSHOTSSS/23-Firebase-Initialization-Success.png)

---

## 22.24 Socket.io Connection

The Socket.io client successfully connects to the JobLink real-time server and receives the server welcome event.

![24 Socket.io Connection](SCREENSHOTSSS/24-SocketIO-Connection-Success.png)

---

# 23. Complete Development Workflow >>>

The project was developed and verified in the following sequence:

```text
Project Setup
      ↓
Node.js + Express Setup
      ↓
MongoDB Connection
      ↓
User Authentication
      ↓
JWT Authentication
      ↓
Job Management
      ↓
Job Search & Filtering
      ↓
Resume Upload
      ↓
Job Applications
      ↓
Application Status Management
      ↓
Employer Features
      ↓
Admin Features
      ↓
Notifications
      ↓
Interview Scheduling
      ↓
MongoDB Atlas Integration
      ↓
Firebase Integration
      ↓
Socket.io Integration
      ↓
Swagger Documentation
      ↓
Postman API Testing
      ↓
Final Verification
```

---

# 24. Final API Feature Summary >>>

| Module         | Features                             |
| -------------- | ------------------------------------ |
| Authentication | Register, Login, Profile             |
| Jobs           | Create, Read, Update, Delete, Search |
| Resumes        | Upload, Retrieve                     |
| Applications   | Apply, View, Update Status           |
| Employer       | My Jobs, Received Applications       |
| Admin          | All Users, All Jobs                  |
| Notifications  | Create, Retrieve, Mark Read          |
| Interviews     | Schedule, Retrieve, Update Status    |
| Firebase       | Firebase Admin Integration           |
| Socket.io      | Real-Time Connection                 |
| Swagger        | API Documentation                    |

---

# 25. Final Project Outcome >>>

JobLink successfully provides a complete backend foundation for a job portal system.

The project demonstrates:

* REST API development
* Node.js backend development
* Express.js routing
* MongoDB database integration
* Mongoose models
* JWT authentication
* Password hashing
* Role-based authorization
* CRUD operations
* Search and filtering
* File upload
* Job application management
* Employer functionality
* Admin functionality
* Notifications
* Interview scheduling
* Firebase integration
* Real-time Socket.io communication
* Swagger API documentation
* Postman API testing
* Secure environment configuration

The complete backend workflow has been implemented, tested, documented, and organized into a modular project structure.

---

# 26. Project Information >>>

**Project Name:** JobLink — Job Portal Backend System

**Technology:** Node.js, Express.js, MongoDB

**Database:** MongoDB Atlas

**API Style:** REST API

**Authentication:** JWT

**File Upload:** Multer

**Real-Time Communication:** Socket.io

**Cloud Integration:** Firebase

**API Documentation:** Swagger

**API Testing:** Postman

**Server Port:** 8080

**Project Status:** Completed
