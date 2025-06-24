import {Home} from "./pages/Home.jsx"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NotFound } from "./pages/NotFound.jsx";
import { Toaster } from 'react-hot-toast'; // Import Toaster

export default function App() {
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Home/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </BrowserRouter>
            {/* Toast Notification Global */}
            <Toaster 
                position="top-right" 
                reverseOrder={false} 
            />
        </>
    )
}