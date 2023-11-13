import Link from "next/link";

const myItems = [
  {
    name: 'Login',
    url: '/login'
  },
  {
    name: 'Home',
    url: '/home'
  },
  {
    name: 'Dash 1',
    url: '/dash1'
  },
  {
    name: 'Dash 2',
    url: '/dash2'
  }
]
// flex h-screen
const SideBar = () => {
  return (
    <div className="w-64 p-4 bg-gray-900 text-white">
      <h1 className="text-2xl font-bold mb-4">Enterprise</h1>
        <ul className='p-5'>
          {myItems.map((item, i) => (
            <Link key={i} href={item.url}>
              <li >{item.name}</li>
            </Link>
          ))}
      </ul>
    </div>
  )
}

export default SideBar