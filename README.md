LinkedIn-Simulation
-------------------
LinkedIn-Simulation is a team project for CMPE 273 Enterprise Distributed Systems. This is a 3-tier application which implements all the major functions of LinkedIn Application for different services.		
    
Goal
----
The goal is to build a LinkedIn web application which enables the applicant or recruiter to create an account, update profile, to upload jobs or to search for jobs, apply for jobs, review job applications, to connect with other people, messaging etc.

Purpose of System:
------------------
LinkedIn Application is a business and employee-oriented service. It is mainly used for professional networking, seeking jobs, posting of jobs by employers. The purpose of each module developed in this application is as follows:

Applicant Module:
-----------------
1. Create a LinkedIn account.
2. Delete an existing Account.
3. Change an applicant’s profile information.
4. Upload a profile picture and update profile picture
5. Display information about an applicant.
6. Search listing for different jobs
7. Search Jobs/Companies
8. Filter based on location, Job type, industry and so on (Same as LinkedIn)
9. Apply for a Job
10. Save a job and apply it later.
11. Send/Receive messages
12. Make/Accept Connections
13. View list of connections.
14. Log Out

Recruiter/Admin Module:
-----------------------
1. Allow only the authorized (admin user) to access Module.
2. Add Job Posting to the systems.
3. Search for job postings and edit it.
4. View/Modify his/her account
5. View posted applications and also resumes.
6. Send/Receive messages.
7. Make/Accept Connections.
8. View list of connections
9. View Admin Reports such as:
    1. First 10 job postings with its applications/month.
    2. City wise applications/month.
    3. Top 5 job postings with a lesser number of applications.
    4. Clicks per job posting.
    5. Graph for number of saved jobs.
    6. Graph for profile views/day.
    7. Trace diagram for tracking one user or a group of users.
10. Log out

Technology Stack
----------------
 ![Mern stack](https://user-images.githubusercontent.com/31905103/33642126-564d7392-d9ed-11e7-9bcf-a7cc6daa17e8.PNG)

Domain	 | Technology
-------- | -----------
Front End | React JS / Redux
Back End | Node JS
UI	| Bootstrap, React Bootstrap, Material UI
Database | MongoDB & MySQL
Authentication | 	Passport JS
Middleware |	Kafka
Graphs	| React-chartist
Load Testing | 	JMeter
API Testing | Mocha
 
Screenshots
-----------
1.	Login Page

 ![Image1](https://github.com/jyothsna265/LinkedIn-Simulation/blob/master/frontend/public/Images/Screen%20Shot%202019-01-29%20at%202.14.19%20PM.png)
 
2.	Homepage

 ![Image2](https://github.com/jyothsna265/LinkedIn-Simulation/blob/master/frontend/public/Images/Screen%20Shot%202019-01-29%20at%202.16.49%20PM.png)
 
3.	People Search 

 ![Image 3](https://github.com/jyothsna265/LinkedIn-Simulation/blob/master/frontend/public/Images/Screen%20Shot%202019-01-29%20at%202.16.59%20PM.png)

4.	Job Search 

 ![Image 4](https://github.com/jyothsna265/LinkedIn-Simulation/blob/master/frontend/public/Images/Screen%20Shot%202019-01-29%20at%202.17.05%20PM.png)

5.	Messaging

 ![Image 5](https://github.com/jyothsna265/LinkedIn-Simulation/blob/master/frontend/public/Images/Screen%20Shot%202019-01-29%20at%202.17.11%20PM.png)
 
6.	Apply for Job Page 

 ![Image 6](https://github.com/jyothsna265/LinkedIn-Simulation/blob/master/frontend/public/Images/Screen%20Shot%202019-01-29%20at%202.17.17%20PM.png)
 
 ![Image 7](https://github.com/jyothsna265/LinkedIn-Simulation/blob/master/frontend/public/Images/Screen%20Shot%202019-01-29%20at%202.17.26%20PM.png)
 
7.	Search results

 ![Image 8](https://github.com/jyothsna265/LinkedIn-Simulation/blob/master/frontend/public/Images/Screen%20Shot%202019-01-29%20at%202.17.32%20PM.png)

8.	Connections

 ![Image 9](https://github.com/jyothsna265/LinkedIn-Simulation/blob/master/frontend/public/Images/Screen%20Shot%202019-01-29%20at%202.17.55%20PM.png)
 
9.	Job Posting
 
 ![Image 10](https://github.com/jyothsna265/LinkedIn-Simulation/blob/master/frontend/public/Images/Screen%20Shot%202019-01-29%20at%202.18.03%20PM.png)

10.	Statistics

 ![Image 11](https://github.com/jyothsna265/LinkedIn-Simulation/blob/master/frontend/public/Images/Screen%20Shot%202019-01-29%20at%202.18.25%20PM.png)

 ![Image 12](https://github.com/jyothsna265/LinkedIn-Simulation/blob/master/frontend/public/Images/Screen%20Shot%202019-01-29%20at%202.18.33%20PM.png)
 
