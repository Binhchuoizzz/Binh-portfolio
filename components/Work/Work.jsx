import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AnimatedText from "../AnimatedText";
import WorkItem from "./WorkItem";

const data = [
     {
          href: "https://github.com/Binhchuoizzz/phuong-portfolio",
          category: "FE",
          img: "/assets/work/thumb-1.png",
          title: "Phuong Portfolio",
     },
     {
          href: "https://github.com/Binhchuoizzz/binh",
          category: "FE",
          img: "/assets/work/thumb-2.png",
          title: "Binh Portfolio",
     },
     {
          href: "https://github.com/okthichiatay77/SecurityNews/tree/master?fbclid=IwZXh0bgNhZW0CMTAAAR14xs_hyjznextBit9SLiXha3WyUERdURy6eMcQ_7Zf3-Sod7VYOJ2yOXs_aem_-6680zsBFCAQCMaWRZSFLg",
          category: "Fullstack",
          img: "/assets/work/thumb-3.png",
          title: "CVE's Alerts System",
     },
     {
          href: "https://github.com/Binhchuoizzz/binhphuongstorage",
          category: "Fullstack",
          img: "/assets/work/thumb-4.png",
          title: "BinhPhuongStorage",
     },
     // {
     //      href: "",
     //      category: "design3",
     //      img: "/assets/work/thumb-5.png",
     //      title: "Luminex UI Kit",
     // },
     // {
     //      href: "",
     //      category: "design3",
     //      img: "/assets/work/thumb-6.png",
     //      title: "Luminex UI Kit",
     // },
     // {
     //      href: "",
     //      category: "design4",
     //      img: "/assets/work/thumb-7.png",
     //      title: "Luminex UI Kit",
     // },
];

const Work = () => {
     // extract unique categories from the data
     const uniqueCategories = Array.from(
          new Set(data.map((item) => item.category))
     );
     // create tab data with "all" category and unique categories from data
     const tabData = [
          { category: 'all' },
          ...uniqueCategories.map((category) => ({ category })),
     ];

     // state to manage the currently selected tab
     const [tabValue, setTabValue] = useState("all");
     // number of items to show initially
     const [visibleItems, setVisibleItems] = useState(6);
     // filter work items bases on the selected tab
     const filterWork =
          tabValue === "all"
               ? data.filter((item) => item.category !== "all")
               : data.filter((item) => item.category === tabValue);

     // handle loading more items
     const loadMoreItems = () => {
          // adjust the number to control how many items are loaded at a time
          setVisibleItems((prev) => prev + 2);
     };

     return (
          <section className='pt-24 min-h-[1000px]' id='work'>
               <div className="container mx-auto">
                    <Tabs defaultValue="all" className="w-full flex flex-col">
                         <div className="flex flex-col xl:flex-row items-center xl:items-start
                         xl:justify-between mb-[30px]">
                              <AnimatedText
                                   text="My Previous Works"
                                   textStyles="h2 mb-[30px] xl:mb-0"
                              />
                              {/* render tab triggers */}
                              <TabsList className="max-w-max h-full mb-[30px] flex flex-col md:flex-row gap-4 md:gap-0">
                                   {tabData.map((item, index) => {
                                        return (
                                             <TabsTrigger
                                                  value={item.category}
                                                  key={index}
                                                  className="capitalize w-[120px]"
                                                  onClick={() => setTabValue(item.category)}
                                             >
                                                  {item.category}
                                             </TabsTrigger>
                                        );
                                   })}
                              </TabsList>
                         </div>
                         {/* render content for the selected tab */}
                         <TabsContent value={tabValue} className="w-full">
                              <div className="grid grid-cols-1 lg:grid-cols-3 gap-[30px]">
                                   <AnimatePresence>
                                        {filterWork.slice(0, visibleItems).map((item, index) => (
                                             <motion.div
                                                  key={index}
                                                  initial={{ opacity: 0, y: 20 }}
                                                  animate={{ opacity: 1, y: 0 }}
                                                  transition={{ duration: 0.8 }}
                                             >
                                                  <WorkItem
                                                       {...item}
                                                  />
                                             </motion.div>
                                        ))}
                                   </AnimatePresence>
                              </div>
                              {/* load more button */}
                              {visibleItems < filterWork.length && (
                                   <div className="flex justify-center mt-12">
                                        <motion.div
                                             initial={{ opacity: 0, y: 20 }}
                                             animate={{ opacity: 1, y: 0 }}
                                             transition={{ duration: 0.8 }}
                                        >
                                             <button onClick={loadMoreItems} className="btn btn-accent">
                                                  Load more
                                             </button>
                                        </motion.div>
                                   </div>
                              )}
                         </TabsContent>
                    </Tabs>
               </div>
          </section>
     )
}

export default Work