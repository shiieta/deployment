import Svg from "../assets/Svg";

export default function Footer(){

    return(
    <div className="container">
        <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top">
            <div className="col mb-3">
                <h2>Bubble Bomb</h2>
                <p className="text-muted">
                    Jakarta, Bogor <br />
                    Malang, 535022
                    <br />
                    Indonesia
                </p>
                <p>
                    <strong>Phone: </strong>+62 812127288 <br />
                    <strong>Email: </strong>bubble@bomb.com
                </p>
            </div>
            <div className="col mb-3"></div>
            <div className="col mb-3">
                <h5>Useful Links</h5>
                <ul className="nav flex-column">
                    <li className="nav-item mb-2">
                        <a href="#" className="nav-link p-0 text-muted">
                            Home
                        </a>
                    </li>
                    <li className="nav-item mb-2">
                        <a href="#" className="nav-link p-0 text-muted">
                            About Us
                        </a>
                    </li>
                    <li className="nav-item mb-2">
                        <a href="#" className="nav-link p-0 text-muted">
                            Services
                        </a>
                    </li>
                    <li className="nav-item mb-2">
                        <a href="#" className="nav-link p-0 text-muted">
                            Terms of Service
                        </a>
                    </li>
                    <li className="nav-item mb-2">
                        <a href="#" className="nav-link p-0 text-muted">
                            Privacy Policy
                        </a>
                    </li>
                </ul>
            </div>
            
            <div className="col mb-3">
                <h5>Our Services</h5>
                <ul className="nav flex-column">
                    <li className="nav-item mb-2">
                        <a href="#" className="nav-link p-0 text-muted">
                            Web Design
                        </a>
                    </li>
                    <li className="nav-item mb-2">
                        <a href="#" className="nav-link p-0 text-muted">
                            Web Development
                        </a>
                    </li>
                    <li className="nav-item mb-2">
                        <a href="#" className="nav-link p-0 text-muted">
                            Product Management
                        </a>
                    </li>
                    <li className="nav-item mb-2">
                        <a href="#" className="nav-link p-0 text-muted">
                            Marketing
                        </a>
                    </li>
                    <li className="nav-item mb-2">
                        <a href="#" className="nav-link p-0 text-muted">
                            Graphic Design
                        </a>
                    </li>
                </ul>
            </div>
            
            <div className="col mb-3">
                <h5>Our Social Networks</h5>
                <p className="text-muted">
                    You can find me through these social media. Click one of them to know.
                </p>
                <ul className="list-unstyled d-flex">
                    <li className="ms-4">
                        <a
                            className="link-dark"
                            href="https://www.linkedin.com/in/sita-evania-kulsum-2786701b3/"
                            target="_blank"
                        >
                            <Svg></Svg>
                            <svg className="bi" width={24} height={24}>
                                <use xlinkHref="#linkedin" />
                            </svg>
                        </a>
                    </li>
                    <li className="ms-4">
                        <a
                            className="link-dark"
                            href="https://www.instagram.com/shiieta/"
                            target="_blank"
                        >
                            <svg className="bi" width={24} height={24}>
                            <use xlinkHref="#instagram" />
                            </svg>
                        </a>
                    </li>
                    <li className="ms-4">
                        <a
                            className="link-dark"
                            href="https://github.com/shiieta"
                            target="_blank"
                        >
                            <svg className="bi" width={24} height={24}>
                            <use xlinkHref="#github" />
                            </svg>
                        </a>
                    </li>
                </ul>
            </div>
            
        </footer>
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
            <p className="col-md-4 mb-0">
                © Copyright <strong>Bubble Bomb.</strong> All Rights Reserved
            </p>
            <p className="nav col-md-4 justify-content-end">
                {" "}
            Designed by&nbsp; <a href="#">Vania</a>
            </p>
    </footer>
    </div>

    )

}