import {useRef, type FormEvent} from 'react'

type addTheGoals = {
    addGoal : (goal:string , summary : string) => void; 
}


export function NewGoal({addGoal}: addTheGoals){

   const goal = useRef<HTMLInputElement>(null);
   const summary = useRef<HTMLInputElement>(null);



function handleSubmit(event: FormEvent<HTMLFormElement>){

    event.preventDefault();

    const goalEntered = goal.current!.value;
    const summaryEntered = summary.current!.value;
    addGoal(goalEntered , summaryEntered);

    event.currentTarget.reset();
}

    return (
        <form onSubmit={handleSubmit}>
<p>
<label htmlFor="goal">Your Goal</label>
<input type="text" id="goal" ref={goal} name="goal"/>

</p>
<p>
<label htmlFor="summary">Short summary</label>
<input type="text" id="summary" name="summary" ref={summary}  />

</p>
<p>
    <button>Add Goal</button>
</p>
        </form>
    )
}