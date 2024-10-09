
export function AppHeader({ onSetPage }) {
    return (
        <header className="app-header main-layout">
            <section>
                <h1>My Books App</h1>
                <nav className="app-nav">
                    <a onClick={() => onSetPage('home')} href="#">Home</a>
                    <a onClick={() => onSetPage('about')} href="#">About</a>
                    <a onClick={() => onSetPage('books')} href="#">Cars</a>
                </nav>
            </section>

        </header>
    )
}