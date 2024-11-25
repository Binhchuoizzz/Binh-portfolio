import Link from 'next/link';


const Logo = ({ light = false }) => {
     const colorClass = light ? "text-white" : "text-primary"; //default to black
     return (
          <Link href="/" className="font-primary text-2xl tracking-[4px]">
               <span className={colorClass}>Duc Binh</span>
          </Link>
     )
}

export default Logo