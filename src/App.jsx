import react from "react";
import Auth from "./Auth";
import "./App.css";

function App() {
    return (
        <div className="container">
            <header>
                <div className="logo">🌐</div>
                <nav>
                    <ul>
                        <li><a href="#" className="active">Home</a></li>
                        <li><a href="#">Poems</a></li>
                        <li><a href="#">Books</a></li>
                        <li><a href="#">News</a></li>
                    </ul>
                </nav>
            </header>

            <main>
                <section className="content">
                    <div className="post">
                        <h3>Name</h3>
                        <p>Content (Lorem ipsum dolor sit amet, consectetur adipiscing elit...)</p>
                        <p className="author">- Author</p>
                    </div>

                    <div className="post">
                        <h3>Name</h3>
                        <p>Content (Lorem ipsum dolor sit amet, consectetur adipiscing elit...)</p>
                        <p className="author">- Author</p>
                    </div>

                    <div className="post">
                        <h3>Name</h3>
                        <p>Content (Lorem ipsum dolor sit amet, consectetur adipiscing elit...)</p>
                        <p className="author">- Author</p>
                    </div>
                </section>

                <aside className="seanfhocal">
                    <h3>SeanFhocail an La</h3>
                    <div className="quote-box"></div>
	    	    <Auth />
                </aside>
            </main>
        </div>
    );
}

export default App;

