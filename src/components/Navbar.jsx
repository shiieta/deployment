export default function Navbar() {
  return (
    <nav className="navbar navbar-expand bg-light">
      <div className="container">
        <a className="navbar-brand" href="#">
          Bubble Bomb.
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-nav ms-auto">
            <a className="nav-link text-dark" href="#">
              Home
            </a>
            <a className="nav-link text-dark" href="#">
              About
            </a>
            <a className="nav-link text-dark" href="#">
              Blog
            </a>
            <a className="nav-link text-dark" href="#">
              Pricing
            </a>
            <a className="nav-link text-dark" href="#">
              Contact
            </a>
            </div>
        </div>
      </div>
    </nav> 
)
}
