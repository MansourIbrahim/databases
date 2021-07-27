const mysql = require('mysql');

//create connection
const db = mysql.createConnection({
    host     : 'localhost',
    user     : 'hyfuser',
    password : 'hyfpassword',
  });

//connect
db.connect((err)=>{
    if(err){
        throw err;
    }
    console.log('Mysql connected...');
});

//Drop db
db.query("DROP DATABASE IF EXISTS meetup3", (err, result)=>{
    if(err){
        throw err;
    };
    console.log(result);
});


//create DB
let sql1 = 'CREATE DATABASE meetup3';
db.query(sql1, (err, result)=>{
    if(err){
        throw err;
    };
    console.log(result);
});

//use db
db.query("USE meetup3", (err, result)=>{
    if(err){
        throw err;
    };
    console.log(result);
});

//create table
let inviteeTable = 'CREATE TABLE Invitee(invitee_no int AUTO_INCREMENT, invitee_name VARCHAR(255), invited_by VARCHAR(255), PRIMARY KEY(invitee_no))';
db.query(inviteeTable, (err, result)=>{
    if(err){
        throw err;
    };
    console.log(result);
});


let roomTable = 'CREATE TABLE Room(room_no int AUTO_INCREMENT, room_name VARCHAR(255), floor_number int, PRIMARY KEY(room_no))';
db.query(roomTable, (err, result)=>{
    if(err){
        throw err;
    };
    console.log(result);
});


let meetingTable = 'CREATE TABLE Meeting(meeting_no int AUTO_INCREMENT, meeting_title VARCHAR(255), starting_time DATETIME, ending_time DATETIME, room_no int, PRIMARY KEY(meeting_no))';
db.query(meetingTable, (err, result)=>{
    if(err){
        throw err;
    };
    console.log(result);
});

//insert Invitee rows
let Invitees = [{ invitee_name: "Maha", invited_by: 'Mansour' },
{ invitee_name: 'Mona', invited_by: 'Mansour' },
{ invitee_name: 'Loaa', invited_by: 'Mansour' },
{ invitee_name: 'Luuk', invited_by: 'Mansour' },
{ invitee_name: 'Elly', invited_by: 'Mansour' }]

let insertInviteeRows = 'INSERT INTO Invitee SET ?';
Invitees.forEach((Invitee) => {
    db.query(insertInviteeRows, Invitee, (err, result)=>{
        if(err){
            throw err;
        };
        console.log(result);
    });
})

//insert room rows
let rooms = [{ room_name: 'room-A', floor_number: 0 },
{ room_name: 'room-B', floor_number: 1 },
{ room_name: 'room-C', floor_number: 2 },
{ room_name: 'room-D', floor_number: 3 },
{ room_name: 'room-E', floor_number: 4 }]

let insertRoomRows = 'INSERT INTO Room SET ?';
rooms.forEach((room) => {
    db.query(insertRoomRows, room, (err, result)=>{
        if(err){
            throw err;
        };
        console.log(result);
    });
})


//insert Invitee rows
let meetings = [ {
    meeting_title: 'science',
    starting_time: '2021-07-27 10:00:00',
    ending_time: '2021-07-27 12:00:00',
    room_no: 1,
  },
  {
    meeting_title: 'math',
    starting_time: '2021-07-27 10:00:00',
    ending_time: '2021-07-27 12:00:00',
    room_no: 2,
  },
  {
    meeting_title: 'language',
    starting_time: '2021-07-27 10:00:00',
    ending_time: '2021-07-27 12:00:00',
    room_no: 3,
  },
  {
    meeting_title: 'art',
    starting_time: '2021-07-27 10:00:00',
    ending_time: '2021-07-27 12:00:00',
    room_no: 4,
  },
  {
    meeting_title: 'soft skills',
    starting_time: '2021-07-27 10:00:00',
    ending_time: '2021-07-27 12:00:00',
    room_no: 5,
  }]

let insertMeetingRows = 'INSERT INTO meeting SET ?';
meetings.forEach((meeting) => {
    db.query(insertMeetingRows, meeting, (err, result)=>{
        if(err){
            throw err;
        };
        console.log(result);
    });
})


db.end((err)=>{
    if(err){
        throw err;
    }
    console.log('Mysql disconnected...');
});