const { useState } = React

import { AppHeader } from "./cmps/AppHeader.jsx"
import { HomePage } from "./pages/HomePage.jsx"
import { BooksIndex } from "./pages/BooksIndex.jsx"
import { AboutUs } from "./pages/AboutUs.jsx"

export function App() {
    const [page, setPage] = useState('car')
    return (

        <section className="app">
            <AppHeader onSetPage={(page) => setPage(page)} />

            <main className="main-layout">
                {page === 'home' && <HomePage />}
                {page === 'about' && <AboutUs />}
                {page === 'books' && <BooksIndex />}
            </main>
        </section>
    )
}