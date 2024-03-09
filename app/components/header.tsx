import { Dispatch, FC, SetStateAction } from "react";


interface HeaderProps {
    sidebarVisibility: boolean;
    setSidebarVisibility: Dispatch<SetStateAction<boolean>>;
}
export const Header: FC<HeaderProps> = ({ sidebarVisibility, setSidebarVisibility }) => {
    return (
        <div className="bg-sky-100 h-[2.1rem] w-full border-solid border-b-2">
            <svg
                onClick={() => setSidebarVisibility(true)}
                cursor={'pointer'}
                className={`w-6 h-6  lg:hidden ${!sidebarVisibility ? '' : 'hidden'}`}
                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
        </div>
    )
}