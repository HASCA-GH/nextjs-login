import { UserButton, auth, useAuth } from "@clerk/nextjs";
import Link from "next/link";


type myItemsType = {
  name: string;
  url: string;
};

const myItems = [
  {
    name: 'Home page (Public)',
    url: '/'
  },
  {
    name: 'Dashoard 1 (Public)',
    url: '/dash1'
  },
  {
    name: 'Dashoard 2 (Private)',
    url: '/dash2'
  },
  {
    name: 'Dashoard 3 (Private)',
    url: '/dash3'
  },
  {
    name: 'Login (Public)',
    url: '/sign-in'
  },
  {
    name: 'Sign up (Public)',
    url: '/sign-up'
  },
  {
    name: 'Profile(Public)',
    url: '/profile'
  },
];

const isHomePage = ({ item }: { item: myItemsType }, i: number) => {
  return (
    <div className={`mb-${item.url === '/' || item.url === '/dash3' ? 8 : 2}`} key={i}>
      <Link href={item.url}>
        <li>{item.name}</li>
      </Link>
    </div>
  )
};

const SideBar = () => {
  return (
    <div className="w-80 min-w-fit p-4 bg-gray-900 text-white">
      <h1 className="text-2xl font-bold mb-4">Enterprise</h1>
      <ul className='p-5'>
        {myItems.map((item, i) => (
          <div key={i}>
            {isHomePage({ item }, i)}
          </div>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
