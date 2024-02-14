import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { History } from "./pages/history/History";
import { DefaultLayout } from "./layouts/default-layout/DefaultLayout";

export function Router(){
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/historico" element={<History />} />
            </Route>
        </Routes>
    )
}