import 'tailwindcss/tailwind.css';

export default function Home() {
  return (

    <div >
      <div className='text-cyan-800 p-8'>ENGINE AI LOGO</div>
      <span className='p-16 m-16  space-y-8'> Title</span>
     <div className=' w-1/4 p-16  m-10  space-y-8 border-2'>
      <div className='border-b-2  border-l-2'> component 1 <span className=' text-l bg-green-400 rounded-full ml-32' > status</span></div>
      <div className='border-b-2 border-l-2'> component 2 <span className=' text-l bg-green-400 rounded-full  ml-32' > status</span></div>
      <div className='border-b-2 border-l-2'> component 3 <span className=' text-l bg-green-400 rounded-full  ml-32' > status</span></div>
      <div className='border-b-2 border-l-2'> component 4 <span className=' text-l bg-green-400 rounded-full  ml-32' > status</span></div>
      <div className='border-b-2 border-l-2'> component 5 <span className=' text-l bg-green-400 rounded-full  ml-32' > status</span> </div>
      </div>

    </div>

  );
}
