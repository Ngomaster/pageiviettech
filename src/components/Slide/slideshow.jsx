import React from "react";
import PropTypes from "prop-types";

Slideshow.propTypes = {};

function Slideshow(props) {
	return (
		<div
			id="carouselExampleIndicators"
			className="carousel slide"
			data-ride="carousel"
		>
			<ol className="carousel-indicators">
				<li
					data-target="#carouselExampleIndicators"
					data-slide-to="0"
					className="active"
				></li>
				<li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
			</ol>
			<div className="carousel-inner">
				<div className="carousel-item active">
					<img
						src="https://iviettech.vn/wp-content/uploads/2023/01/banner-ivt-new-site-1.png"
						class="d-block w-100"
						alt="..."
					/>
				</div>
				<div className="carousel-item">
					<img
						src="https://iviettech.vn/wp-content/uploads/2023/01/banner-iviettech-2023-1.png"
						class="d-block w-100"
						alt="..."
					/>
				</div>
			</div>
			<button
				class="carousel-control-prev"
				type="button"
				data-target="#carouselExampleIndicators"
				data-slide="prev"
			>
				<span
					className="carousel-control-prev-icon"
					aria-hidden="true"
				></span>
				<span className="sr-only">Previous</span>
			</button>
			<button
				class="carousel-control-next"
				type="button"
				data-target="#carouselExampleIndicators"
				data-slide="next"
			>
				<span
					className="carousel-control-next-icon"
					aria-hidden="true"
				></span>
				<span className="sr-only">Next</span>
			</button>
		</div>
	);
}

export default Slideshow;
