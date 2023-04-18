# hospital_api.github.io
#MY HOSTED LINK -->  https://hospital-api-tgsx.onrender.com/
Description
We’re going to design an API for the doctors of a Hospital which has been allocated by the govt for testing and quarantine + well being of COVID-19 patients

There can be 2 types of Users
Doctors
Patients
Doctors can log in
Each time a patient visits, the doctor will follow 2 steps
Register the patient in the app (using phone number, if the patient already exists, just return the patient info in the API)
After the checkup, create a Report
Patient Report will have the following fields
Created by doctor
Status (patient status like:- fever , malaria etc)


#The Routes here used in project

1./doctors/register → with username and password
2./doctors/login → returns the JWT to be used
3./patients/register
4./patients/:id/create-report
5./patients/:id/all_reports → List all the reports of a patient oldest to latest
6./reports/:status → List all the reports of all the patients filtered by a specific status

#Tech stack
Node.js , Express , Mongo-DB , passport-JWT

#How to setup the project on local system
Clone this project
Start by installing npm if you don't have it already.
Navigate to Project Directory by : Using
cd HospitalAPI

After reaching to the this preoject directory yo have to run this following command :

$ npm install
$ nodemon index.js or npm start

Operation check route end point on postman

#IN PLACE OF localhost:8000  YOU CAN ALSO USE -->  hospital-api-tgsx.onrender.com/doctors
1.http://localhost:8000/doctors/register


here doctors register themselves on this request end point

![Screenshot (468)](https://user-images.githubusercontent.com/31533479/232399964-eda6b8ee-475b-4fab-93b7-275f278dee8f.png)



2.http://localhost:8000/doctors/login
now doctor login on this request.
![Screenshot (469)](https://user-images.githubusercontent.com/31533479/232400113-e65057f5-2d17-4ab3-9116-ca70ef18e4b3.png)


3.by using doctor login jwt bearer jwt token , patient will be creatatd.
http://localhost:8000/patients/register
![Screenshot (470)](https://user-images.githubusercontent.com/31533479/232400171-bee7162b-e95e-424a-96a4-258a07eba62d.png)


4.now creating of patient report edpoint by taking patient id
http://localhost:8000/patients/:id/create-report
![Screenshot (471)](https://user-images.githubusercontent.com/31533479/232400274-452fc8d4-1715-4f40-96b3-ccc373faca91.png)


5.now showing all report of patient by patient id.
http://localhost:8000/patients/:id/all_reports
![Screenshot (472)](https://user-images.githubusercontent.com/31533479/232400331-d51e72d7-3f32-4eea-a7ce-64a8c0537f73.png)


route endpoints :- /reports/:status

