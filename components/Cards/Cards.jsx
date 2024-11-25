"use client";
import Card from './Card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion, AnimatePresence } from "framer-motion";


import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
} from "react-icons/fa";

const journey = [
  // experience
  {
    type: "experience",
    company: "FPT UNIVERSITY",
    logoUrl: "/assets/journey/experience/logo-1.svg",
    position: "Students",
    duration: "2020-2024",
    description: "Tôi là cựu sinh viên ngành An toàn thông tin tại Đại học FPT, đã thực hiện nhiều dự án về Frontend và Fullstack Development với Django. Thành thạo HTML, CSS, JavaScript và Django, tôi luôn hướng đến việc xây dựng các ứng dụng web hiện đại, bảo mật và hiệu quả, mang lại trải nghiệm người dùng tốt nhất.",
  },
  {
    type: "experience",
    company: "FPT-SOFTWARE",
    logoUrl: "/assets/journey/experience/logo-2.svg",
    position: "IT staff",
    duration: "2021-2022",
    description: "Tôi là nhân viên IT tại công ty FPT Software, với kinh nghiệm làm việc và học tập trong lĩnh vực JavaWeb, cùng các ngôn ngữ frontend cơ bản và nâng cao. Trong quá trình làm việc, tôi cũng đã tiếp xúc và sử dụng SQL để quản lý và xử lý dữ liệu. Tôi luôn nỗ lực cải thiện kỹ năng và tạo ra các giải pháp công nghệ hiệu quả, đáp ứng nhu cầu công việc và phát triển hệ thống.",
  },
  // {
  //   type: "experience",
  //   company: "ABC",
  //   logoUrl: "/assets/journey/experience/logo-3.svg",
  //   position: "XXX",
  //   duration: "2020",
  //   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  // },
  // {
  //   type: "experience",
  //   company: "ABC",
  //   logoUrl: "/assets/journey/experience/logo-4.svg",
  //   position: "XXX",
  //   duration: "2020",
  //   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  // },
  // education
  {
    type: "education",
    institution: "FPT UNIVERSITY",
    logoUrl: "/assets/journey/education/logo-1.svg",
    qualification: "Student",
    duration: "2020-2024",
    description: "Là sinh viên ngành An toàn thông tin của Đại học FPT.",
  },
  {
    type: "education",
    institution: "FPT MSE",
    logoUrl: "/assets/journey/education/logo-2.svg",
    qualification: "Student",
    duration: "2024-Now",
    description: "Đang học tập tại trương trình thạc sĩ kỹ thuật phần mềm của FPT liên quan tới Bigdata, ML, AI, Python engineer,...",
  },
  // {
  //   type: "education",
  //   institution: "ABCD",
  //   logoUrl: "/assets/journey/education/institution.svg",
  //   qualification: "XXX",
  //   duration: "2020",
  //   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  // },
  // skills
  {
    type: "skill",
    name: "HTML",
    icon: <FaHtml5 />,
    duration: "2020-2024",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    type: "skill",
    name: "CSS",
    icon: <FaCss3Alt />,
    duration: "2020-2024",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    type: "skill",
    name: "JS",
    icon: <FaJs />,
    duration: "2020-2024",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    type: "skill",
    name: "REACT",
    icon: <FaReact />,
    duration: "2020-2024",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    type: "skill",
    name: "WPS",
    icon: <FaWordpress />,
    duration: "2020-2024",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    type: "skill",
    name: "FIGMA",
    icon: <FaFigma />,
    duration: "2020-2024",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
]

const Cards = () => {
  return (
    <div>
      <Tabs
        defaultValue='experience'
        className='w-full flex flex-col items-center'
      >
        <TabsList className="max-w-max mb-[30px]">
          <TabsTrigger value="experience">Experience</TabsTrigger>
          <TabsTrigger value="education">Education</TabsTrigger>
          <TabsTrigger value="skills">Skills</TabsTrigger>
        </TabsList>
        <TabsContent value="experience" className="w-full">
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.8 }}
            >
              {journey.filter((item) =>
                item.type === "experience").map((card, index) => {
                  return <Card key={index} {...card} />
                })}
            </motion.div>
          </AnimatePresence>
        </TabsContent>
        <TabsContent value="education" className="w-full">
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.8 }}
            >
              {journey.filter((item) =>
                item.type === "education").map((card, index) => {
                  return <Card key={index} {...card} />
                })}
            </motion.div>
          </AnimatePresence>
        </TabsContent>
        <TabsContent value="skills" className="w-full">
        <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.8 }}
            >
              {journey.filter((item) =>
                item.type === "skill").map((card, index) => {
                  return <Card key={index} {...card} />
                })}
            </motion.div>
          </AnimatePresence>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default Cards