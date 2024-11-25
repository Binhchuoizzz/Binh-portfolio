import Link from "next/link";
import { FaFacebook, FaPhoneSquare, FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const socials = [
     {
          icon: <RiInstagramFill />,
          path: "https://www.instagram.com/binhchuoiz/"
     },
     {
          icon: <FaFacebook />,
          path: "https://www.facebook.com/toi.binhducnguyen"
     },
     {
          icon: <FaPhoneSquare />,
          path: "https://zalo.me/0922818727"
     },
     {
          icon: <FaLinkedin />,
          path: "https://www.linkedin.com/in/cve-alert-b700302b2/"
     },
];

const Socials = ({ containerStyles, iconStyles }) => {
     return (
          <div className={containerStyles}>
               {socials.map((item, index) => {
                    return (
                         <Link href={item.path} key={index} className={iconStyles}><span>{item.icon}</span></Link>
                    );
               })}
          </div>
     )
}

export default Socials