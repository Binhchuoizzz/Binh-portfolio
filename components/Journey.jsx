import AnimatedText from "./AnimatedText";
import Cards from "./Cards/Cards";


const Journey = () => {
     return (
          <section className='' id='journey'>
               <div className="container mx-auto">
                    <AnimatedText
                         text="Journey"
                         textStyles="h2 mb-[30px] text-center"
                    />
                    <Cards />
               </div>
          </section>
     );
}

export default Journey