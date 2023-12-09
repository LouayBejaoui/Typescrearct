
import CourseGoal from "./CourseGoal";
import {type ReactNode} from 'react'
import { type goalType } from "../App";
import InfoBox from "./InforBox";

type goalListType= {
   goals:goalType[],
   onDeleteGoal : (id:number)=> void
}

export default function GoalList({goals , onDeleteGoal}: goalListType){

    if (goals.length == 0){
        return(
            <InfoBox mode ='hint'>
                You have no goals, start adding some!
            </InfoBox>
        )
    }
    
    let warningBox : ReactNode ;
if (goals.length> 4 ){
    warningBox = <InfoBox mode = 'warning' severity="high">You have too many goals! </InfoBox>
}
    return (
        <>
        {warningBox}
    <ul>
    {goals.map((goal)=>(
        <li key={goal.id}>  <CourseGoal id={goal.id} onDelete={onDeleteGoal} title={goal.title} >{goal.description}</CourseGoal></li>
    
    ))}
    </ul>
    </>)
}