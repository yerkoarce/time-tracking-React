import { Data } from "../types"


type CardProps = {
  activity: Data
} 

export default function Card({ activity } : CardProps) {

  console.log(activity)

  return (
    <div className=" bg-dark-blue m-w-64 text-white">
      <h6>{activity.title}</h6>
      <h1>{activity.timeframes.weekly.current}hrs</h1>
      <p>Last week - {activity.timeframes.weekly.previous} hrs</p>
    </div>
  )
}
