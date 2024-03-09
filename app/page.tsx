"use client";
import { Sidebar, Header } from "./components";
import { useState } from "react";
export default function Home() {
  const [sidebarVisibility, setSidebarVisibility] = useState(false);

  return (
    <main className="font-body">
      <div className="flex flex-row">
        <Sidebar sidebarVisibility={sidebarVisibility} setSidebarVisibility={setSidebarVisibility} />
        <div className={`flex-wrap w-full h-screen lg:ml-40  ${sidebarVisibility ? 'ml-40' : 'ml-auto'}`}>
          <Header sidebarVisibility={sidebarVisibility} setSidebarVisibility={setSidebarVisibility} />
          <div>
            <p> These will be the dashboard pages for all employee sections.</p>

          </div>
        </div>


      </div>
    </main>
  );
}
