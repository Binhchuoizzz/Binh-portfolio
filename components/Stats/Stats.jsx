import StatsItem from "./StatsItem"

const statsData = [
     {
          endCountNum: 1,
          endCountText: "+",
          text: "Yrs. of Experience",
     },
     {
          endCountNum: 5,
          endCountText: "+",
          text: "Real Project",
     },
     {
          endCountNum: 95,
          endCountText: "%",
          text: "Clients Statisfied",
     },
];

const Stats = () => {
     return (
          <section className="flex justify-center xl:justify-normal mx-auto xl:mx-0
          xl:w-[380px] gap-4 xl:gap-0">
               {statsData.map((statsItem, index) => {
                    return (
                         <StatsItem
                              endCountNum={statsItem.endCountNum}
                              endCountText={statsItem.endCountText}
                              text={statsItem.text}
                              key={index}
                         />
                    )
               })}
          </section>
     )
}

export default Stats