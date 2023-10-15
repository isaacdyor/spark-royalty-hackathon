import Link from "next/link";
import Image from 'next/image'
import { BiSolidMessage} from "react-icons/bi";
import { IoMdNotifications } from "react-icons/io"

const Navbar = () => {
  return (
    <div className='container mx-auto flex justify-between items-center bg-black-500 border-b border-slate-600'>
      <a href='/investorHome'>
        <Image className='py-3'
          src="/images/placeholder.png"
          alt="Example Image"
          width={100}
          height={50}
        />
      </a>
      <div className="flex-grow"></div>
      <ul className="flex items-center space-x-4">
        <li>
          <a href="/investorFindProjects" className="hover:text-gray-600">Find Projects</a>
        </li>
        <li>
          <a href="/investorMyProjects" className="hover:text-gray-600">My Projects</a>
        </li>
        <li>
          <a href="/investorMyApplications" className="hover:text-gray-600 pr-8">My Applications</a>
        </li>
      </ul>
      <h1>
        <IoMdNotifications className = "h-7 w-7"/>
      </h1>
      <h1 className="px-5" >
        <BiSolidMessage className = "h-7 w-7"/>
      </h1>
      <a href='/'>
        <Image className=''
          src="/images/placeholder.png"
          alt="Example Image"
          width={50}
          height={50}
        />
      </a>
    </div>


  );
};

export default Navbar;
