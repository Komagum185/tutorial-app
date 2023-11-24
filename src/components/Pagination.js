export default function Pagination(){
    return(
        <>
            <div className="d-flex justify-content-center align-items-center">
				<ul className="pagination">
					<li className = "page-item active"><a href="#" class = "page-link">1</a></li>
					<li className = "page-item"><a href="#" class = "page-link">2</a></li>
					<li className = "page-item"><a href="#" class = "page-link">3</a></li>
					<li className = "page-item"><a href="#" class = "page-link">4</a></li>
				</ul>
			</div>
        </>
    )
}