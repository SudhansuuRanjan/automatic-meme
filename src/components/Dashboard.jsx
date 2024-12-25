import Repository from "./Repository";
import { LuRefreshCw } from "react-icons/lu";
import { AiOutlinePlus } from "react-icons/ai";
import { HiOutlineSearch } from "react-icons/hi";
import repositories from "./../assets/data.json"

const Dashboard = () => {
    return (
        <main className="bg-[#FAFAFA] h-screen w-full p-4">
            <div className="border bg-white shadow-sm rounded-lg w-full">
                <div className="flex justify-between pt-5 p-3">
                    <div>
                        <h3 className="text-xl leading-3 font-semibold">Repositories</h3>
                        <p className="text-gray-500 text-xs font-medium mt-2">33 total repositories</p>
                    </div>

                    <div className="flex gap-2">
                        <button className="flex h-fit border shadow-sm rounded text-gray-700 bg-white text-sm items-center gap-1.5 px-3 py-1">
                            <LuRefreshCw />
                            <span>Refresh</span>
                        </button>

                        <button className="flex h-fit border shadow-sm rounded text-white border-[#1570EF] bg-[#1570EF] text-sm items-center gap-1.5 px-3 py-1">
                            <AiOutlinePlus />
                            <span>Add Repository</span>
                        </button>
                    </div>
                </div>

                <div className="relative my-3 mx-3">
                    <input type="search" className="bg-white pl-8 rounded border placeholder:text-gray-600 text-sm py-1.5 px-2 border-gray-200 shadow-sm outline-none lg:w-[16rem] w-auto" name="search" id="search" placeholder="Search Repositories" />
                    <HiOutlineSearch className="top-2.5 absolute left-2 text-gray-500" />
                </div>


                <div>
                    {
                        repositories.map((repository) => (
                            <Repository
                                data={repository}
                            />
                        ))
                    }
                </div>
            </div>
        </main>
    )
}

export default Dashboard;