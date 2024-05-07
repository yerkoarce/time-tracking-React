import { Data } from "../types"


type CardProps = {
  activity: Data
} 

export default function Card({ activity } : CardProps) {

  console.log(activity)

  return (
    <div className=" bg-desaturated-blue rounded-3xl w-56 h-24">
      <div className=" flex justify-around">
        <div></div>
        <img src={`../public/images/icon-${activity.title}.svg`} alt="image of card" className=" -mb-6 -mt-2 h-20" />
      </div>
      <div className=" bg-dark-blue m-w-64 text-white rounded-2xl p-4">
        <h6 className=" py-3">{activity.title}</h6>
        <h1 className=" text-5xl">{activity.timeframes.weekly.current}hrs</h1>
        <p className=" text-sm text-soft-blue mt-3">Last week - {activity.timeframes.weekly.previous} hrs</p>
        
      </div>
    </div>
    
  )
}
