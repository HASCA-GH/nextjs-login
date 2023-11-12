const myItems = ["Login", "Home", "Dash 1", "Dash 2"];


const SideBar = () => {
  return (
    <div className="flex h-screen bg-gray-800 text-white">
      {/* Sidebar */}
      <div className="w-64 p-4 bg-gray-900">
        {/* Sidebar content goes here */}
        <h1 className="text-2xl font-bold mb-4">Sidebar zzzz</h1>
        {/* Add your sidebar links or other content here */}
        <ul className='p-5'>
          {myItems.map((item, i) => (
            <li key={i}>{item}</li>
          ))}

        </ul>
      </div>
    </div>

  )
}

export default SideBar