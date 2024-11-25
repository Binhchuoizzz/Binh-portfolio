"use client";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { Link as ScrollLink } from "react-scroll";

// components
import RotatingShape from "./RotatingShape";
import Header from "./Header";
import Stats from "./Stats/Stats";

const Hero = () => {
     return (
          <section className="h-[800px] relative bg-accent/10 xl:bg-white" id="home">
               {/* header */}
               <Header />
               <div className="container mx-auto h-full">
                    <div className="relative z-20 h-full w-full xl:max-w-[768px] flex flex-col
                    items-center xl:items-start justify-center text-center xl:text-left pt-10">
                         <h1 className="h1 mb-2 max-w-[320px] xl:max-w-none">
                              <span className="text-accent">I Have Experience </span>And Work In
                              <TypeAnimation
                                   preRenderFirstString={true}
                                   sequence={["Web Design/Dev!", 2000,  "Data Science!", 2000]}
                                   speed={50}
                                   repeat={Infinity}
                                   wrapper="span"
                                   cursor={false}
                                   className="ml-2 xl:ml-4"
                              />
                         </h1>
                         <p className="lead max-w-[467px] mb-7">Tôi là kỹ sư dữ liệu và phát triển web, đam mê áp dụng công nghệ để giải quyết các vấn đề thực tiễn. Với kỹ năng phân tích dữ liệu, lập trình Python, học máy, cùng kinh nghiệm xây dựng ứng dụng web hiện đại (React, Django), tôi luôn sẵn sàng học hỏi và tạo ra giá trị thông qua các giải pháp tối ưu hóa và đổi mới.</p>
                         <a   className="flex flex-row gap-12" href="/assets/it.pdf">
                              <button className="btn btn-accent mb-8"><b>My CV Here! </b></button>
                         </a>
                         {/* stats */}
                         <Stats />
                    </div>
                    {/* image */}
                    <div className="hidden xl:flex w-[55vw] h-[800px] absolute top-0 right-0 bg-accent/50">
                         <div className="absolute w-[558px] h-[642px] bottom-0 z-40 left-[6.75vw]">
                              <Image
                                   src="/assets/Main.jpg"
                                   fill quality="100"
                                   priority
                                   className="object-contain"
                                   alt="Đây là bé Phương thúi"
                              />
                         </div>
                         {/* arrow shape */}
                         <div
                              className="hidden xl:flex absolute top-48 left-[1vw]"
                              data-scroll
                              data-scroll-speed="0.05"
                         >
                              <Image
                                   src="/assets/hero/arrow.svg"
                                   width={160}
                                   height={160}
                                   alt="Đây là bé Phương thúi"
                              />
                         </div>
                         {/* shape 1 */}
                         <div className="absolute top-[600px] left-[3vw]"
                              data-scroll
                              data-scroll-speed="0.2"
                         >
                              <RotatingShape
                                   content={
                                        <Image
                                             src="assets/hero/shape-1.svg"
                                             width={38}
                                             height={38}
                                             alt=""
                                        />
                                   }
                                   direction="left"
                                   duration={5}
                              />
                         </div>
                         {/* shape 2 */}
                         <div className="absolute top-[240px] xl:left-[35vw]"
                              data-scroll
                              data-scroll-speed="0.1"
                         >
                              <RotatingShape
                                   content={
                                        <Image
                                             src="assets/hero/shape-2.svg"
                                             width={34}
                                             height={34}
                                             alt=""
                                        />
                                   }
                                   direction="right"
                                   duration={5}
                              />
                         </div>
                         {/* shape 3 */}
                         <div className="absolute top-[480px] xl:left-[40vw]"
                              data-scroll
                              data-scroll-speed="0.08"
                         >
                              <RotatingShape
                                   content={
                                        <Image
                                             src="assets/hero/shape-3.svg"
                                             width={36}
                                             height={36}
                                             alt=""
                                        />
                                   }
                                   direction="left"
                                   duration={7}
                              />
                         </div>
                    </div>
               </div>
          </section>
     );
};

export default Hero