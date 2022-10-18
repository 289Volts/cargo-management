import "./App.css";

function App() {
	return (
		<div className="mx-auto ">
			<section className="p-4 h-screen flex flex-col gap-4 text-white bg-[#021639]">
				<div className=" hero-section__text-content order-2 text-center flex flex-col gap-4">
					<h1 className="font-playfair hero-section__heading text-[1.8rem] font-bold leading-[1.4]">
						Cargo Management Made Real Easy
					</h1>
					<p className="font-jarkata hero-section__subtitle text-[1.1rem] font-medium ">
						Most efficient and simplest way to manage your imported cargo completely hassle free
					</p>
					<a
						className="hero-section__cta py-3 px-8 bg-[#54b862] rounded-full font-medium text-white mx-auto w-[fit-content]"
						href="contact.html"
					>
						Contact Us
					</a>
				</div>
				<img src="../freight-management.jpg" alt="delivery management" className="" />
				{/* <img src="../freight-management.jpg" alt="" /> */}
			</section>
			<section className="industries text-center flex flex-col gap-4 mb-8">
				<div className="industries__sectors  flex flex-col gap-2">
					<div className="sector p-7 shadow-md">
						<h2 className="sector-heading ">Food and Beverages</h2>
						<p className="sector-text">
							We provide services for individuals and companies who engage in food production and importation with a
							need to ship in food products.
						</p>
					</div>
					<div className="sector p-7 shadow-md">
						<h2 className="sector-heading ">Fashion</h2>
						<p className="sector-text">
							We provide services for individuals and companies who engage in the importation of fabrics, bags, shows
							and other fashion accessories.
						</p>
					</div>
				</div>
				<div className="industries__sectors  flex flex-col gap-2">
					<div className="sector p-7 shadow-md">
						<h2 className="sector-heading ">Automobile</h2>
						<p className="sector-text">
							We provide services for individuals and companies who engage in the importation of all kinds of cars,
							heavy duty and light duty machineries, spare parts and other basic automobile accessories.
						</p>
					</div>
					<div className="sector p-7 shadow-md">
						<h2 className="sector-heading ">Electronics and Gadgets</h2>
						<p className="sector-text">
							We provide services for individuals and companies who engage in the importation of household and
							electronics, gadgets, computers, phones etc.
						</p>
					</div>
				</div>
				<div className="industries__text-content flex flex-col gap-4 p-7 shadow-md">
					<h2 className="industries-heading">Industries We Service</h2>
					<p className="industries-copy">
						We are trusted to provide professional cargo manage services to the following industries across the nation
						to suite their immediate cargo needs.
					</p>
					<a
						className="industries__cta py-2 px-8 mx-auto bg-[#54b862] rounded-full w-[fit-content] text-white font-medium"
						href="contact.html"
					>
						Contact Us
					</a>
				</div>
			</section>
			<section className="inventory text-center p-4">
				<div className="inventory-text-content">
					<h2 className="inventory-heading">Get Proper Inventory For Your Cargo</h2>
					<p className="inventory-copy">
						Whether you tack your inventory by batch, in bulk or even by serial number, we are her to ensure you get
						accurate.
					</p>
					<p className="inventory-copy">Accountability and security for your cargo.</p>
					<p className="inventory-copy">
						Complete openness to help you monitor your cargo inventory effectively and minimize losses.
					</p>
				</div>
				<img src="../hero-img.jpeg" alt="" />
			</section>
			<section className="about text-center p-4 flex flex-col gap-4">
				<div className="about-text">
					We have the philosophy that well informed customers are our best customers, and we make every effort to
					letting you know how our business and logistics work, so you can obtain terms that are fair and that solidly
					match your needs. We are always one step ahead to ensure the complete satisfaction of our customers no matter
					what industry or sector you are serving.
				</div>
				<img src="../snapshot.png" alt="" className="mx-auto " />
			</section>
			<section className="about-us2 text-center">
				<h2 className="about-us2__heading">See More About Us</h2>
				<div className="about-us2__card-container flex flex-col gap-5">
					<div className="about-us2__card">
						<img src="../bullseye.svg" alt="" className='w-[10%] mx-auto' />
						<h3 className="about-us2__card-heading">Features</h3>
						<p className="about-us2__card-copy">
							Ensure maximum output from your warehouse to achieve roaring success on
							<span className="font-medium">both B2B</span> and <span className="font-medium">B2C fronts</span> with our
							cargo management software.
						</p>
					</div>
					<div className="about-us2__card">
						<img src="../bullseye.svg" alt="" className='w-[10%] mx-auto'/>
						<h3 className="about-us2__card-heading">Industry solutions</h3>
						<p className="about-us2__card-copy">
							We satisfy the numerous industries that require the services of a cargo management company.
						</p>
					</div>
					<div className="about-us2__card">
						<img src="../bullseye.svg" alt="" className='w-[10%] mx-auto'/>
						<h3 className="about-us2__card-heading">What We Do</h3>
						<p className="about-us2__card-copy">
							We aim to ensure the satisfaction of our clients by providing the ultimate solutions to their cargo needs.
						</p>
					</div>
				</div>
			</section>
			<section className="testimonials">
				<div className="quote">
					<img src="../double-quotes.svg" alt="" />
				</div>
				<h2 className="testimonial-heading">Testimonials</h2>
				<div className="testimonials-wrapper"></div>
			</section>
			<footer>
				<div className="logo-text">
					<a href="index.html">LOGO</a>
					<p className="footer-copy">Simplest, reliable and easy way to secure and manage your cargos effectively.</p>
					<div className="social-links">
						<img src="../facebook.svg" alt="facebook page" />
						<img src="../twitter.svg" alt="twitter page" />
						<img src="../gmail.svg" alt="email account" />
					</div>
				</div>
				<div className="company-links">
					<h2 className="company-links__heading">Company</h2>
					<a href="#about" className="company-links__link">
						About Us
					</a>
					<a href="#industries" className="company-links__link">
						Industries we service
					</a>
					<a href="#testimonials" className="company-links__link">
						Testimonials
					</a>
				</div>
				<div className="solutions">
					<h2 className="solution-links__heading">Solutions</h2>
					<a href="#about" className="company-links__link">
						What we do
					</a>
					<a href="#industries" className="company-links__link">
						Industries we service
					</a>
					<a href="#features" className="company-links__link">
						Features
					</a>
				</div>
			</footer>
		</div>
	);
}


export default App;
