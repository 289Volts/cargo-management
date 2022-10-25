import "./App.css";
import "flowbite";
import "flowbite-react";
import { Navbar, Button } from "flowbite-react";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({ duration: 2000 });

function App() {
	return (
		<div className="font-workSans text-[0.875rem]">
			<header className="bg-white z-50 fixed top-0 w-[100vw]">
				<div className=" lg:mx-auto lg:w-[85%] xl:w-[80%]">
					<Navbar fluid={true} rounded={true} className="lg:px-0 rounded-none ">
						<Navbar.Brand href="https://flowbite.com/">
							<span className=" text-xl font-semibold dark:text-white">LOGO</span>
						</Navbar.Brand>
						<div className="flex md:order-2">
							<Button className="mr-3 md:mr-0 text-[0.8rem] font-bold bg-[#073099]">Contact Us</Button>
							<Navbar.Toggle />
						</div>
						<Navbar.Collapse>
							<Navbar.Link href="index.html" className="lg:mr-6 text-[1.2rem]" active={true}>
								Home
							</Navbar.Link>
							<Navbar.Link href="#about" className="text-[1.2rem]">
								About
							</Navbar.Link>
							<Navbar.Link href="#services" className="lg:ml-6 text-[1.2rem]">
								Our Services
							</Navbar.Link>
						</Navbar.Collapse>
					</Navbar>
				</div>
			</header>
			<section className="hero-section p-4 h-[70vh] md:h-[auto] md:pb-[5rem] xl:h-[70vh]  flex flex-col gap-4 pt-[6rem] text-white md:flex w-full md:h-[auto] xl:h-[90vh]">
				<div className="lg:mx-auto lg:w-[80%] xl:w-[75%]">
					<div className=" hero-section__text-content order-2 flex flex-col gap-4 md:w-[60%] lg:w-[75%] xl:w-[60%]">
						<h1 className="hero-section__heading text-[2.25rem] font-bold leading-[1.2] md:text-[3.5rem] lg:text-[4rem]">
							Cargo Management Made Real Easy
						</h1>
						<p className="hero-section__subtitle text-[0.875rem] font-medium lg:text-[1.5rem]">
							Most efficient and simplest way to manage your imported cargo completely hassle free
						</p>
						<a
							className="hero-section__cta py-[0.5rem] px-4 mt-4 bg-white rounded-sm font-bold text-[#073099] w-[fit-content] md:mt-0 lg:text-[1.5rem]"
							href="contact.html"
						>
							Contact Us
						</a>
					</div>
				</div>
			</section>
			<section
				id="services"
				className="industries text-center md:text-justify flex flex-col gap-4 mb-8 p-9 lg:mx-auto lg:w-[80%] lg:px-0  xl:w-[75%] relative xl:pt-[10rem]"
			>
				<div className="float xl:flex xl:gap-8">
					<h2 className="industries-heading text-[1.2rem] heading hidden md:block md:text-[2.2rem] text-center md:mb-0 xl:hidden">
						Industries We Service
					</h2>
					<p className="industries-copy flex flex-col hidden md:block text-center md:text-base xl:hidden">
						We are trusted to provide professional cargo manage services to the following industries across the nation
						to suit their immediate cargo needs.
					</p>
					<div className="md:grid md:gap-[1rem] md:grid-cols-2 xl:w-[95%] mt-8">
						<div className="industries__sectors  flex flex-col gap-4 " data-aos="fade-up">
							<div className=" sector p-7 md:py-0 px-10 shadow-md">
								<h2 className="sector-heading text-[1.2rem] heading ">Food and Beverages</h2>
								<p className="sector-text  md:text-base">
									We provide services for individuals and companies who engage in food production and importation with a
									need to ship in food products in larger quantities.
								</p>
							</div>
							<div className=" sector p-7 md:py-0 px-10 shadow-md">
								<h2 className="sector-heading text-[1.2rem]  heading ">Electronics and Gadgets</h2>
								<p className="sector-text md:text-base">
									We provide services for individuals and companies who engage in the importation of household and
									electronics, gadgets, computers, phones etc.
								</p>
							</div>
						</div>
						<div className="industries__sectors  flex flex-col gap-4  overflow-x-hidden" data-aos="fade-up">
							<div className=" sector p-7 md:py-0 px-10 shadow-md">
								<h2 className="sector-heading text-[1.2rem]  heading ">Fashion</h2>
								<p className="sector-text md:text-base">
									We provide services for individuals and companies who engage in the importation of fabrics, bags,
									shoes and other fashion accessories.
								</p>
							</div>
							<div className=" sector p-7 md:py-0 px-10 shadow-md">
								<h2 className="sector-heading text-[1.2rem]  heading ">Automobile</h2>
								<p className="sector-text md:text-base">
									We provide services for individuals and companies who engage in the importation of all kinds of cars,
									heavy duty and light duty machineries, spare parts and other basic automobile accessories.
								</p>
							</div>
						</div>
					</div>
					<div
						className="industries__text-content p-7  overflow-x-hidden md:p-0 lg:mx-auto lg:w-[80%] lg:px-0 xl:w-[50%]"
						data-aos="fade-left"
					>
						<h2 className="industries-heading text-[1.2rem] heading md:hidden xl:block xl:text-[4.25rem] leading-[1.1]">
							Industries We Service
						</h2>
						<p className="industries-copy flex flex-col gap-3 md:hidden xl:block  xl:text-base">
							We are trusted to provide professional cargo manage services to the following industries across the nation
							to suit their immediate cargo needs.
						</p>
						<a
							className="hero-section__cta py-[0.5rem] px-5 grid mx-auto mt-4 bg-[#073099] rounded-sm font-bold text-white w-[fit-content]  xl:text-base xl:mx-0 "
							href="contact.html"
						>
							Contact Us
						</a>
					</div>
				</div>
			</section>
			<section className="inventory p-4 md:py-7 lg:mx-auto lg:w-[80%] lg:px-0 xl:flex xl:gap-8 xl:items-center xl:w-[75%]">
				<img src="../image 6.svg" className="mx-auto mb-4 block md:hidden" alt="" data-aos="fade-right" />
				<img
					className="inventory__image mx-auto mb-4 hidden md:block xl:hidden"
					src="../about-img-tablet.svg "
					alt=""
				/>
				<div className="inventory-text-content md:px-8 lg:px-0">
					<h2
						className="inventory-heading text-[1rem] heading  text-center xl:text-left xl:text-[2.5rem] xl:leading-[1.1]"
						data-aos="fade-right"
					>
						Get Proper Inventory For Your Cargo
					</h2>
					<p className="inventory-copy mb-4  text-base" data-aos="fade-left">
						Whether you tack your inventory by batch, in bulk or even by serial number, we are here to ensure you get
						accurate.
					</p>
					<p className="inventory-copy mb-4 text-base" data-aos="fade-left">
						Accountability and security for your cargo.
					</p>
					<p className="inventory-copy  text-base" data-aos="fade-left">
						Complete openness to help you monitor your cargo inventory effectively and minimize losses.
					</p>
				</div>
				<img
					className="inventory__image mx-auto mb-4 hidden md:hidden xl:block"
					src="../inventory-desktop.svg "
					alt=""
				/>
			</section>
			<section id="about" className="about text-white bg-[#07001E] text-center p-5  mb-8 text-white">
				<div className="lg:mx-auto lg:w-[80%] lg:px-0 flex flex-col gap-4  xl:w-[65%]">
					<img src="../image 5.svg" alt="" className="mx-auto mb-4 order-1 md:hidden" />
					<img src="../aboutus-img-tablet.svg" alt="" className="mx-auto mb-4 order-1 hidden md:block xl:hidden " />
					<h2 className="about-heading text-[1.2rem] heading text-white uppercase order-2 md:text-[2.2rem]">
						About Us
					</h2>
					<div className="about-text text-justify order-3 md:text-base md:px-10 xl:flex xl:xl:gap-12 xl:items-center xl:px-0">
						<p className="leading-[2]">
							We always make sure that your cargo and deliveries are treated with utmost priority and we take pride in
							knowing that we pay close attention to detail and never leave anything to chance. We have the philosophy
							that well informed customers are our best customers, and we make every effort to letting you know how out
							business and logistics work, so you can obtain terms that are fair and that solidly match your needs. We
							love answering customer questions! We are always one step ahead to ensure the complete satisfaction of our
							customers no matter what industry or sector you are serving.
						</p>
						<img src="../about-desktop.svg" alt="" className="mx-auto mb-4 order-1 hidden xl:block " />
					</div>
				</div>
			</section>
			<section className="about-us2 text-center mb-4 lg:mx-auto lg:w-[80%] lg:px-0 xl:w-[75%]">
				<h2 className="about-us2__heading heading text-[1.12rem] uppercase md:text-[2rem]">See More About Us</h2>
				<div className="about-us2__card-container flex flex-col xl:flex-row gap-5">
					<div className="about-us2__card p-7 md:w-[80%] mx-auto" data-aos="flip-left">
						<img src="../merger.svg" alt="" className="mb-4 mx-auto" />
						<h3 className="about-us2__card-heading text-[1.2rem] heading">Features</h3>
						<p className="about-us2__card-copy">
							Ensure maximum output from your warehouse to achieve roaring success on
							<span className="font-bold"> both B2B</span> and <span className="font-bold">B2C fronts</span> with our
							cargo management software.
						</p>
					</div>
					<div className="about-us2__card p-7 md:w-[80%] mx-auto" data-aos="flip-right">
						<img src="../solutions.svg" alt="" className="mb-4 mx-auto" />
						<h3 className="about-us2__card-heading text-[1.2rem] heading">Industry solutions</h3>
						<p className="about-us2__card-copy">
							We satisfy the numerous industries that require the services of a cargo management company.
						</p>
					</div>
					<div className="about-us2__card p-7 md:w-[80%] mx-auto" data-aos="fade-zoom-in">
						<img src="../features.svg" alt="" className="mb-4 mx-auto" />
						<h3 className="about-us2__card-heading text-[1.2rem] heading ">What We Do</h3>
						<p className="about-us2__card-copy">
							We aim to ensure the satisfaction of our clients by providing the ultimate solutions to their cargo needs.
						</p>
					</div>
				</div>
			</section>
			<section className="testimonials py-7">
				<div className="quote grid relative before:absolute before:w-[100%] before:h-[1px] before:bg-[#07001E] mb-5">
					<div className="absolute -top-5 left-[46%] mx-auto md:left-[49%] w-[fit-content] p-2 rounded-full bg-[#07001E]">
						<img src="../double-quotes.svg" alt="" />
					</div>
				</div>
				<h2 className="testimonial-heading heading uppercase text-center md:text-[1.7rem] md:mt-8">Testimonials</h2>

				<div className="testimonials-wrapper text-center">
					<div className="testimonial-card w-[87%] mx-auto p-5   italic leading-[1.4] md:w-[55%] lg:py-10">
						<p>
							I feel better knowing that I have a place where I can entrust my cargos to when they arrive the country
							which makes it all easy for me to go about my business till I am ready to offload my goods
						</p>
					</div>
				</div>
			</section>
			<footer className="flex  flex-col text-center gap-2 py-9 text-white bg-[#07001E]  ">
				<div className=" xl:w-[80%] lg:mx-auto lg:px-0 md:grid md:grid-cols-4 md:gap:4 md:text-left md:px-4 md:place-items-center md:pl-[2.7rem] footer-wrapper">
					<div className="logo-text space-y-3 p-5 md:p-0 md:place-self-start">
						<a href="index.html">LOGO</a>
						<p className="footer-copy lg:w-[60%]">
							Simplest, reliable and easy way to secure and manage your cargo effectively.
						</p>
					</div>
					<div className="company-links flex flex-col mb-5 md:gap-3 md:mb-0 md:place-self-start ">
						<h2 className="company-links__heading text-white heading text-base">Company</h2>
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
					<div className="solutions flex flex-col md:gap-3 md:place-self-start">
						<h2 className="solution-links__heading text-white heading text-base">Solutions</h2>
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
					<div className="footer-cta grid gap-4 md:flex md:flex-col md:items-center md:justify-center md:place-self-start">
						<a
							className="hero-section__cta py-[0.45rem] px-3 grid mx-auto mt-4 border-white border-2 bg-[] rounded-[4px] font-bold text-white w-[fit-content] md:mt-0 md:mb-4 md:mx-0 md:text-base"
							href="contact.html"
						>
							Contact Us
						</a>
						<div className="social-links flex gap-4 lg:gap-0 justify-center md:justify-center">
							<a href="https://facebook.com" className="w-[10%] md:w-[20%] lg:w-[30%]">
								<img className="w-[70%] md:w-[70%] lg:w-[40%] ml-auto" src="../facebook.svg" alt="facebook page" />
							</a>
							<a href="https://twitter.com" className="w-[10%] md:w-[20%] lg:w-[30%]">
								<img className="w-[70%] md:w-[70%] lg:w-[40%] mx-auto" src="../twitter.svg" alt="twitter page" />
							</a>
							<a href="https://gmail.com" className="w-[10%] md:w-[20%] lg:w-[30%]">
								<img className="w-[70%] md:w-[70%] lg:w-[40%] mr-auto" src="../gmail.svg" alt="email account" />
							</a>
						</div>
					</div>
					<div className="credits mt-4 md:col-span-4 md:mt-9 text-[0.8rem] md:text-base">
						<a href="mailto:udiapromise@outlook.com" className="email mr-1 md:mr-3">
							Designed by Udia Promise
						</a>
						|
						<a href="mailto:joshuaroland289@gmail.com" className="email ml-1 md:ml-3">
							Developed by Joshua Roland
						</a>
					</div>
				</div>
			</footer>
		</div>
	);
}

export default App;
