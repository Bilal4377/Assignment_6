const express = require('express');
const app = express();
const nodemon = require('nodemon');
app.use(express.json());

const PORT = 2000;

let data = {

    "username": "dogecoin",
    "password": "password1",
    "email": "test@test.com",
    "courses": {
        "course": {
            "classId": "CMSC2204",
            "courseName": "Mobile Device Programming / Connectivity",
            "startDate": "08/23/2021",
            "endDate": "12/23/2021"
        },
        "course1": {
            "classId": "CMSC1255",
            "courseName": "Server Side Programming",
            "startDate": "08/23/2021",
            "endDate": "12/23/2021"
        },
        "course2": {
            "classId": "MATH1380",
            "courseName": "Precalculus",
            "startDate": "08/23/2021",
            "endDate": "12/23/2021"
        }
    }
};

app.get('/getUser', (req, res) =>{
    try {
        return res.status(200).json(data);
    }
    catch {
        return res.status(500);
    }
});

app.post('/addUser', (req, res) =>{
    try {
        console.log(req.body);
        return res.status(200).json("Added user 'testUser' successfully");
    }
    catch {
        return res.status(500);
    }
})

app.listen(PORT, () =>{
    console.log(`Server started on Port ${PORT}`)
});