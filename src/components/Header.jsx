export default function Header() {

  return (
  <div className="cover p-5 mb-4">
    <div className="content container-fluid py-5">
      <center>
        <h1 className="header display-5 fw-bold">Bubble Bomb.</h1>
        <p className="col-md-8 fs-4">
          We are here to entertain you with the finest bubs.
        </p>
        <button
          className="btn btn-outline-light"
          type="button"
          style={{ borderRadius: 20 }}
          >
        Watch video
      </button>
    </center>
  </div>
</div>

  );
}
