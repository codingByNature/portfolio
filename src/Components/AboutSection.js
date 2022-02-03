import profilepicjoe from '../Images/profilepicjoe.JPG';

const AboutSection = () => {
	return (
		<section>
			<div className='description'>
				<div className='title'>
					<div className='hide'>
						<h2>We work to make</h2>
					</div>
					<div className='hide'>
						<h2>
							your <span>dreams</span> come
						</h2>
					</div>
					<div className='hide'>
						<h2>true.</h2>
					</div>
					<p>
						Contact us for any photography or videography ideas that you have,
						we have professionals with amazing skills
					</p>
					<button>Contact Us</button>
				</div>
				<div className='image'>
					<img src={profilepicjoe} alt='Developer Joe' />
				</div>
			</div>
		</section>
	);
};

export default AboutSection;
