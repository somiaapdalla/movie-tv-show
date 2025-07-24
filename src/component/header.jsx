import { useState } from "react"


function Header (){
    const[isdark,setisdark]= useState(false)

    const handledark = ()=>{
        setisdark(true)
    }
    return <div >
        <div className={isdark ?"dark" :""}>
        <div class="bg-[url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f562aaf4-5dbb-4603-a32b-6ef6c2230136/dh0w8qv-9d8ee6b2-b41a-4681-ab9b-8a227560dc75.jpg/v1/fill/w_1192,h_670,q_70,strp/the_netflix_login_background__canada__2024___by_logofeveryt_dh0w8qv-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvZjU2MmFhZjQtNWRiYi00NjAzLWEzMmItNmVmNmMyMjMwMTM2XC9kaDB3OHF2LTlkOGVlNmIyLWI0MWEtNDY4MS1hYjliLThhMjI3NTYwZGM3NS5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.LOYKSxIDqfPwWHR0SSJ-ugGQ6bECF0yO6Cmc0F26CQs')] bg-cover bg-center h-screen w-full">

 
    <div className=" text-white flex justify-between text-2xl pt-2">
        <h1 className="text-red-700 font-semibold text-5xl">NETFLIX</h1>
        <div className="flex gap-40">
        <ul className="flex gap-20">
            <li>Home</li>
            <li>Tv</li>
            <li>Movie</li>
            <li>Favourite List</li>
            <li>watch List</li>
        </ul>
        <div>
        <i onClick={handledark}  class="fa-regular fa-moon mr-5"></i>
        <i  class="fa-solid fa-magnifying-glass mr-5"></i>
        </div>
        </div>
    </div>
    </div>
    </div>
    </div>
}
export default Header