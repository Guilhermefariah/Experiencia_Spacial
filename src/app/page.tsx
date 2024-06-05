"use client";

const Page: React.FC = () => {
  return (
    <div>
      <main className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1 className="text-5xl font-bold relative mx-auto float-on-hover cursor-pointer
         after:content-[''] after:absolute after:left-0 after:w-full after:h-[4px] 
         after:bottom-[-5px] after:bg-black after:transition-transform after:duration-1000
         after:scale-x-0 hover:after:scale-x-150 duration-1000">
          Bem-Vindo
        </h1>
        <p className="mt-3 text-2xl">Experimente as maravilhas do universo!</p>
      </main>
    </div>
  )
}
export default Page;