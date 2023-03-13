import { useEffect, useState } from "react"
import WorkoutDetails from "../components/WorkoutDetails"
import WorkoutForm from "../components/WorkoutForm"

const Home = () => {
    const [Workouts,setWorkouts]=useState()

    useEffect(() => {
        const fetchWorkouts = async () => {
            const response = await fetch('/api/workouts')
            const json = await response.json()
            if(response.ok){
                setWorkouts(json)
            }
        }
        fetchWorkouts()
    }, [])
  return (
    <div className="home">
        <div className="workouts">
            {Workouts && Workouts.map((workout)=>(
               <WorkoutDetails key={workout.id} workout={workout}/>
            ))}
        </div>
        <WorkoutForm/>
    </div>
    
  )
}
export default Home
