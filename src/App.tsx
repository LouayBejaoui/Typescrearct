import Img from "./assets/goals.jpg"
import Header from "./components/Header";
import { useState } from "react";
import GoalList from "./components/GoalList";
import { NewGoal } from "./components/NewGoal";
export type goalType= {
  title : string,
  description : string;
  id:number
}

export default function App(){



const [goals , setGoals] = useState<goalType[]>([])

function HandleGoals(goal : string , summary : string ){
  const newGoal : goalType = {
    id : Math.random(),
  title : goal,
  description : summary
  }
  setGoals(prevGoal => {
  return (
  [...prevGoal , newGoal]
  )
  })
}function DeleteGoals(id : number){
setGoals(prevGoals => prevGoals.filter(goal => goal.id!==id) )
}


  return(<main>

    <Header image={{src :Img , alt:"A list of goals" }}>
      <h1>Your Course Goals</h1>
    </Header>
    <NewGoal addGoal={HandleGoals}/>
  <GoalList goals={goals} onDeleteGoal={DeleteGoals} />
  </main>)
}