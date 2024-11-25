import Image from "next/image";

const services = [
     {
          icon: "assets/services/icon-1.svg",
          title: "UI/UX Design",
          description: "' Là nhà thiết kế UI/UX thành thạo Figma, đam mê tạo ra giao diện trực quan và thân thiện. Với khả năng tối ưu hóa từ ý tưởng đến prototype, tôi tập trung cân bằng giữa thẩm mỹ và chức năng, mang đến trải nghiệm người dùng đẹp mắt và dễ sử dụng.'"
     },
     {
          icon: "assets/services/icon-4.svg",
          title: "Web Development",
          description: "' Là lập trình viên web đam mê phát triển giao diện người dùng hiện đại, thành thạo HTML, CSS, JavaScript, cùng các framework như React và Vue.js. Tôi tập trung xây dựng giao diện thân thiện, tương tác cao, tối ưu hóa hiệu suất, mang đến trải nghiệm tốt nhất cho người dùng.'"
     },
     {
          icon: "assets/services/icon-2.svg",
          title: "Information Assurance",
          description: "' Là chuyên viên IA với kiến thức về bảo mật thông tin, quản lý rủi ro và đảm bảo tính toàn vẹn, bảo mật, sẵn sàng của dữ liệu. Thành thạo triển khai chính sách bảo mật và kiểm tra tuân thủ, tôi cam kết bảo vệ tài sản thông tin hiệu quả, duy trì môi trường an toàn và đáng tin cậy.'"
     },
     {
          icon: "assets/services/icon-3.svg",
          title: "Machine Learning",
          description: "'Là chuyên viên Machine Learning với nền tảng vững chắc về khoa học dữ liệu, thuật toán học máy và xử lý dữ liệu lớn. Thành thạo Python, TensorFlow, Scikit-learn và PyTorch, tôi xây dựng các mô hình tối ưu hóa quy trình và đưa ra quyết định dựa trên dữ liệu, luôn hướng tới ứng dụng AI vào các bài toán thực tế và cập nhật công nghệ mới.'"
     },
]
const Services = () => {
     return (
          <section className="relative z-40">
               <div className="container mx-auto">
                    <ul className="relative grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4
                    gap-[20px] -top-12 place-items-center lg:place-items-stretch">
                         {services.map((service, index) => {
                              return (
                                   <li key={index} className="bg-yellow-50 shadow-custom p-6 max-w-[350px] md:max-w-none
                                   rounded-lg">
                                        <Image
                                             src={service.icon}
                                             width={48}
                                             height={48}
                                             alt=""
                                             className="mb-4"
                                        />
                                        <h3 className="text-[20px] text-primary font-semibold mb-3">{service.title}</h3>
                                        <p className="text-[15px]">{service.description}</p>
                                   </li>
                              );
                         })}
                    </ul>
               </div>
          </section>
     );
};

export default Services