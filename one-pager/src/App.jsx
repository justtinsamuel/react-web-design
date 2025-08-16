import React from "react";
import "./App.css";

function App() {
  return (
    <>
      <div className="container">
        {/* Header */}
        <header className="header">
          <div className="logo">
            <h2>Exhibition</h2>
            <p>Unlock your potential~</p>
          </div>
          <nav className="nav">
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#profile">Profile</a>
              </li>
              <li>
                <a href="#news">News</a>
              </li>
              <li>
                <a href="#schedule">Schedule</a>
              </li>
              <li>
                <a href="#contact">Contact Us</a>
              </li>
            </ul>
          </nav>
        </header>

        <main>
          <section id="home" className="hero"></section>

          <div className="infos">
            {/* Info Sections */}
            <section className="info">
              <h2>Our Products</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                numquam quaerat voluptatibus pariatur at fugit corporis ut
                dignissimos voluptatum.
              </p>
              <button>?</button>
            </section>

            <section className="info">
              <h2>We are Pro</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                numquam quaerat voluptatibus pariatur at fugit corporis ut
                dignissimos voluptatum.
              </p>
              <button>?</button>
            </section>

            <section className="info">
              <h2>Flexible Schedule</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                numquam quaerat voluptatibus pariatur at fugit corporis ut
                dignissimos voluptatum.
              </p>
              <button>?</button>
            </section>
          </div>

          <section className="moreinfos">
            <div className="moreinfo">
              <div className="moreinfo-content">
                <h2>Practive Everyday</h2>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Soluta placeat ipsum porro ad, ratione optio reiciendis
                  officiis laborum quasi, impedit repellendus perspiciatis animi
                  similique voluptatem aspernatur, eveniet culpa minus pariatur.
                </p>
                <button>More Information</button>
              </div>
            </div>
            <div className="moreinfo2">
              <div className="moreinfo-content">
                <h2>Practive Everyday</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
                  magni excepturi, similique assumenda doloremque debitis fuga
                  veniam. Non quidem voluptatem illum voluptas tempora? Est sint
                  optio debitis, error hic tempora!
                </p>
                <button>More Information</button>
              </div>
            </div>
          </section>

          <div className="others">
            <section id="schedule" className="schedule">
              <h2>Schedule</h2>
              <ul>
                <li>Monday</li>
                <li>Tuesday</li>
                <li>Wednesday</li>
                <li>Thursday</li>
                <li>Friday</li>
                <li>Saturday</li>
                <li>Sunday</li>
              </ul>
            </section>

            <section id="news" className="news">
              <h2>Breaking News!</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum,
                adipisci quam! Eum laborum fugit corporis sit dolorem eius? Qui,
                sit vero cupiditate aspernatur vel incidunt eos esse
                necessitatibus est explicabo.
              </p>
            </section>

            <section id="links" className="links">
              <h2>Links</h2>
              <ul className="sosmed">
                <li>
                  <a href="https://example.com">
                    <img src="icon.jpg" alt="" />
                  </a>
                </li>
                <li>
                  <a href="https://example.com">
                    <img src="icon.jpg" alt="" />
                  </a>
                </li>
                <li>
                  <a href="https://example.com">
                    <img src="icon.jpg" alt="" />
                  </a>
                </li>
              </ul>
            </section>
          </div>
        </main>

        {/* Footer */}
        <footer className="footer">
          <p>© 2025 Exhibition. All Rights Reserved.</p>
        </footer>
      </div>
    </>
  );
}

export default App;
