export const MovieDetail = () => {
  return (
    <div className="wrap flex flex-row flex-wrap justify-start">
      <img src="./images/background1.jpg" className="card-img-top" alt="..." />
      <div className="card flex flex-col w-56 bg-slate-100 ml-5 mb-4">
        <div className="card-body flex flex-col">
          <h5 className="card-title text-base font-semibold py-2 text-center">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="btn btn-primary bg-yellow-400 text-center px-2 py-2 mt-2 rounded">Detail</a>
        </div>
      </div>
    </div>
  )
}
