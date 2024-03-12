"use client";
import { Sidebar, Header } from "~/components";
import { useEffect, useState } from "react";
import Link from "next/link";
export default function Home() {
    const [sidebarVisibility, setSidebarVisibility] = useState(false);
    const [projects] = useState([
        { "id": "MM-17", "name": "hub", "team": "Cross-group", "message": "sit amet erat nulla tempus vivamus in felis eu sapien cursus vestibulum proin eu mi nulla ac enim" },
        { "id": "PG-WPD", "name": "Face to face", "team": "Business-focused", "message": "convallis nulla neque libero convallis eget eleifend luctus ultricies eu nibh quisque" },
        { "id": "RU-MOS", "name": "needs-based", "team": "core", "message": "felis fusce posuere felis sed lacus morbi sem mauris laoreet" },
        { "id": "GA-8", "name": "matrices", "team": "didactic", "message": "non quam nec dui luctus rutrum nulla tellus in sagittis dui vel nisl duis ac nibh fusce lacus purus aliquet" },
        { "id": "GA-9", "name": "Intuitive", "team": "uniform", "message": "sapien iaculis congue vivamus metus arcu adipiscing molestie hendrerit at vulputate vitae nisl aenean lectus" },
        { "id": "SO-NU", "name": "hierarchy", "team": "Mandatory", "message": "dictumst maecenas ut massa quis augue luctus tincidunt nulla mollis molestie" },
        { "id": "RU-ULY", "name": "capability", "team": "pricing structure", "message": "porttitor pede justo eu massa donec dapibus duis at velit eu est congue" },
        { "id": "OM-WU", "name": "actuating", "team": "portal", "message": "nisl duis ac nibh fusce lacus purus aliquet at feugiat non pretium quis lectus suspendisse potenti in eleifend quam" },
        { "id": "KR-46", "name": "Customer-focused", "team": "Multi-layered", "message": "aliquam erat volutpat in congue etiam justo etiam pretium iaculis justo in hac habitasse platea" },
        { "id": "GB-SCT", "name": "time-frame", "team": "demand-driven", "message": "non lectus aliquam sit amet diam in magna bibendum imperdiet nullam orci" },
        { "id": "KR-46", "name": "Customer-focused", "team": "Multi-layered", "message": "aliquam erat volutpat in congue etiam justo etiam pretium iaculis justo in hac habitasse platea" },
        { "id": "GB-SCT", "name": "time-frame", "team": "demand-driven", "message": "non lectus aliquam sit amet diam in magna bibendum imperdiet nullam orci" }
    ]);
    const [pageNumber, setPageNumber] = useState(1);
    const offset = 5;
    const totalPages = Math.ceil(projects.length / offset)
    const start = (pageNumber - 1) * offset
    const paginationArray = Array.apply(null, Array(totalPages))
        .map((_, i) => i + 1)
    return (
        <main className="font-body">
            <div className="flex flex-row">
                <Sidebar sidebarVisibility={sidebarVisibility} setSidebarVisibility={setSidebarVisibility} />
                <div className={`flex-wrap w-full h-screen lg:ml-40  ${sidebarVisibility ? 'ml-40' : 'ml-auto'}`}>
                    <Header sidebarVisibility={sidebarVisibility} setSidebarVisibility={setSidebarVisibility} />
                    <div className="m-16 mb-3 relative overflow-x-auto shadow-md sm:rounded-lg">
                        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        code
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        name
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        team
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        message
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Add work hours
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {projects.slice(start, start + offset).map(({ name, id, team, message }, index) => {
                                    return <tr key={`${id}-${name}-${index}`} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {id}
                                        </th>
                                        <td className="px-6 py-4">
                                            {name}
                                        </td>
                                        <td className="px-6 py-4">
                                            {team}
                                        </td>
                                        <td className="px-6 py-4">
                                            {message}
                                        </td>
                                        <td className="px-6 py-4">
                                            <Link href="#" className="font-medium text-blue-600 dark:text-blue-500">Add hours</Link>
                                        </td>
                                    </tr>
                                })}
                            </tbody>
                        </table>




                    </div>

                    {/* Navbar */}
                    {
                        projects.length > 0 &&
                        <div className="flex justify-center">
                            <nav aria-label="Page navigation example">
                                <ul className="flex items-center -space-x-px h-8 text-sm">
                                    <li>
                                        <Link onClick={() => setPageNumber(pageNumber => pageNumber == 1 ? pageNumber : pageNumber - 1)} href="#"
                                            className={`flex items-center 
                                            justify-center 
                                            px-3 h-8 ms-0 
                                            leading-tight 
                                            text-gray-500 
                                            bg-white border border-e-0 
                                            border-gray-300 rounded-s-lg 
                                            dark:bg-gray-800 
                                            dark:border-gray-700                                        
                                            ${pageNumber !== 1 && 'hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white hover:text-gray-700'}
                                            ${pageNumber == 1 && 'cursor-not-allowed'}
                                            `
                                            }

                                        >
                                            <span className="sr-only">Previous</span>
                                            <svg className="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4" />
                                            </svg>
                                        </Link>
                                    </li>
                                    {
                                        paginationArray.map(pageNo => <li key={pageNo}>
                                            <Link key={pageNo} onClick={() => setPageNumber(pageNo)} href="#" className={`
                                            flex items-center 
                                            justify-center 
                                            px-3 h-8 
                                            leading-tight 
                                            text-gray-500
                                            ${pageNo == pageNumber
                                                    ?
                                                    'bg-gray-600' :
                                                    'dark:bg-gray-800 dark:border-gray-700  border  border-gray-300'} 
                                            hover:bg-gray-100 hover:text-gray-700 
                                            dark:text-gray-400 
                                            dark:hover:bg-gray-700 dark:hover:text-white`
                                            }>{pageNo}</Link>
                                        </li>
                                        )
                                    }
                                    <li>
                                        <Link onClick={() => setPageNumber(pageNumber => pageNumber == totalPages ? pageNumber : pageNumber + 1)}
                                            href="#"
                                            className={`
                                            flex items-center 
                                            justify-center px-3 h-8 
                                            leading-tight text-gray-500 
                                            bg-white border border-gray-300 
                                            rounded-e-lg
                                            dark:bg-gray-800
                                            ${pageNumber != totalPages && 'hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white hover:text-gray-700'} 
                                            dark:border-gray-700 
                                            dark:text-gray-400 
                                            ${pageNumber == totalPages && 'cursor-not-allowed'}
                                            `
                                            }>
                                            <span className="sr-only">Next</span>
                                            <svg className="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                                            </svg>
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    }
                </div>
            </div>
        </main>
    );
}
