import React, { useState, useEffect } from "react";
import Jumbotron from "../components/Jumbotron";
import { Row, Col, Container } from "../components/Grid";
import TimerBtn from "../components/TimerBtn";
import Timer from "../components/Timer";
import WorkoutDetails from "../components/WorkoutDetails"
import API from "../utils/API"

function Workout () {

// Pull in activities 
const [activities, setActivities] = useState("")

useEffect(() => {
    getWorkoutDetails()
}, []);


function getWorkoutDetails () {
    API.getActivities()
    .then(res => 
        setActivities(res.data)
        
    ).then (console.log("activities:", activities))
    .catch(err => console.log(err))
}
 



// function setInterval () {

//     let interval = activities.interval

//     if (interval === "00:05:00") {
//         setInterval === 300000
//     } if (interval === "00:10:00") {
//         setInterval === 600000
//     } if (interval === "00:20:00") {
//         setInterval === 3600000
//     }if (interval === "00:30:00") {
//         setInterval === 1800000
//     }if (interval === "01:00:00") {
//         setInterval === 3600000
//     } 


        return (
            <div>
                <Container>
                    <Row>
                        <Col size="lg-3">
                           
                        </Col>
                        <Col size="lg-6">
                            <Jumbotron>
                                <WorkoutDetails
                                key={activities._id}
                                title={activities.title}
                                interval={activities.interval}

                                />
                                <hr />
                                <Timer />
                                <hr />
                                <TimerBtn />
                            </Jumbotron>
                        
                        </Col>
                        <Col size="lg-6">
                           
                        </Col>
                    </Row>

                </Container>
            </div>
        )
    
}

export default Workout