import Card from "./components/Card";
import { data } from "./data/data";

function App() {
  return (
    <>
      <div className="">
        <div className=" flex justify-center items-center h-full gap-4">
          <article>
            <div className=" grid-rows-2 bg-blue max-w-64 rounded-2xl p-10  ">
              <img
                src="/images/image-jeremy.png "
                alt="Jeremy photo"
                className=" max-w-20 border-2 border-white rounded-full mb-8"
              />
              <h6 className=" text-soft-blue mb-2">Report for</h6>
              <h1 className=" text-white text-5xl mb-10">Jeremy Robson</h1>
            </div>
            <div className=" bg-dark-blue max-w-64 -mt-4 p-10 flex flex-col gap-4">
              <button className=" text-soft-blue text-start">Daily</button>
              <button className="text-white text-start">Weekly</button>
              <button className="text-soft-blue text-start">Monthly</button>
            </div>
          </article>
          <div className="grid grid-cols-3 gap-4 h-full">
            {data.map((activity) => (
              <Card key={activity.title} activity={activity} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
