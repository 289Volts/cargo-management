import "./App.css";
import "flowbite";
import "flowbite-react";
import { Navbar, Button } from "flowbite-react";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "./components/Footer";
AOS.init({ duration: 2000 });

function App() {
	return (
		<div className="font-workSans text-[0.875rem] overflow-x-hidden">
			<header className="bg-white z-50 fixed top-0 w-[100vw]">
				<div className=" lg:mx-auto lg:w-[85%] xl:w-[80%]">
					<Navbar fluid={true} rounded={true} className="lg:px-0 rounded-none ">
						<Navbar.Brand href="#">
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
			<section className="hero-section p-4 h-[290px] md:pb-[5rem] pt-[4.8rem] text-white md:flex w-full md:h-[auto] xl:h-[90vh]">
				<div className="lg:mx-auto lg:w-[80%] xl:w-[75%]">
					<div className=" hero-section__text-content order-2 flex flex-col gap-4 w-[80%] md:w-[60%] lg:w-[75%] xl:w-[60%]">
						<h1 className="hero-section__heading text-[1.625rem] font-[800] tracking-[1px] leading-[1.2] md:text-[3.5rem] lg:text-[4rem] xl:text-[5rem]">
							Cargo Management Made Real Easy
						</h1>
						<p className="hero-section__subtitle text-[0.75rem] w-[80%] font-medium lg:text-[1.5rem]">
							Most efficient and simplest way to manage your imported cargo completely hassle free
						</p>
						<a
							className="hero-section__cta py-[0.5rem] px-[0.875rem] bg-brandPrimary text-white rounded-sm font-semibold w-[fit-content] md:mt-0 lg:text-[1.5rem]"
							href="contact.html"
						>
							Contact Us
						</a>
					</div>
				</div>
			</section>
			<section
				id="services"
				className="industries text-center md:text-justify flex flex-col gap-4 mb-8 py-9 w-[83%] mx-auto lg:mx-auto lg:w-[80%] lg:px-0  xl:w-[75%] relative xl:pt-[10rem]"
			>
				<div className="float xl:flex xl:gap-8">
					<h2 className="industries-heading text-[1.25rem] text-headings font-bold md:text-[2.2rem] text-center md:mb-0 xl:hidden">
						Industries We Service
					</h2>
					<p className="industries-copy flex-col text-center text-[#282525] mb-[0.5rem] text-[0.875rem] md:text-base xl:hidden">
						We are trusted to provide professional cargo manage services to the following industries across the nation
						to suit their immediate cargo needs.
					</p>
					<div className="md:grid md:gap-[1rem] md:grid-cols-2 xl:w-[95%] mt-8">
						<div className="industries__sectors  flex flex-col gap-4 overflow-x-hidden" data-aos="fade-up">
							<div className="sector p-7 md:py-0 px-10 shadow-md">
								<div className="heading-cont ">
									<img src="./images/fast-food.png" alt="food icon" className="" />
									<h2 className="sector-heading text-[0.875rem] heading">Food and Beverages</h2>
								</div>
								<p className="sector-text text-[0.875rem] md:text-base">
									We provide services for individuals and companies who engage in food production and importation with a
									need to ship in food products.
								</p>
							</div>
							<div className=" sector p-7 md:py-0 px-10 shadow-md">
								<div className="heading-cont">
									<img src="./images/phones.png" alt="fashion icon" className="" />
									<h2 className="sector-heading heading">Electronics and Gadgets</h2>
								</div>
								<p className="sector-text md:text-base">
									We provide services for individuals and companies who engage in the importation of household and
									electronics, gadgets, computers, phones etc.
								</p>
							</div>
						</div>
						<div className="industries__sectors  flex flex-col gap-4 overflow-x-hidden" data-aos="fade-up">
							<div className=" sector p-7 md:py-0 px-10 shadow-md">
								<div className="heading-cont">
									<img src="./images/fashion-icon.png" alt="fashion icon" className="" />
									<h2 className="sector-heading heading ">Fashion</h2>
								</div>
								<p className="sector-text md:text-base">
									We provide services for individuals and companies who engage in the importation of fabrics, bags,
									shoes and other fashion accessories.
								</p>
							</div>
							<div className=" sector p-7 md:py-0 px-10 shadow-md">
								<div className="heading-cont">
									<img src="./images/automobile.png" alt="fashion icon" className="" />
									<h2 className="sector-heading heading ">Automobile</h2>
								</div>
								<p className="sector-text md:text-base">
									We provide services for individuals and companies who engage in the importation of all kinds of cars,
									heavy duty and light duty machineries, spare parts and other basic automobile accessories.
								</p>
							</div>
						</div>
					</div>
					<div
						className="industries__text-content md:p-0 lg:mx-auto lg:w-[80%] lg:px-0 xl:w-[50%] overflow-x-hidden"
						// data-aos="fade-left"
					>
						<h2 className="industries-heading text-[1.2rem] heading hidden xl:block xl:text-[4.25rem] leading-[1.1]">
							Industries We Service
						</h2>
						<p className="industries-copy gap-3 hidden xl:block xl:text-base">
							We are trusted to provide professional cargo manage services to the following industries across the nation
							to suit their immediate cargo needs.
						</p>
						<a
							className="hero-section__cta text-[0.7rem] py-[0.5rem] border-2 border-brandPrimary px-5 grid mx-auto mt-[2.5rem] overflow-x-hidden rounded-[4px] font-semibold text-brandPrimary w-[fit-content] xl:text-base xl:mx-0 "
							href="contact.html"
						>
							Contact Us
						</a>
					</div>
				</div>
			</section>
			<section className="inventory p-4 md:py-7 overflow-x-hidden lg:mx-auto lg:w-[80%] lg:px-0 xl:flex xl:gap-8 xl:items-center xl:w-[75%]">
				<img
					src="/images/inventory-sm.png"
					className="mx-auto mb-4 block md:hidden"
					alt="man taking inventory of container"
					data-aos="fade-right"
				/>
				<img
					className="inventory__image mx-auto mb-4 hidden md:block xl:hidden"
					src="/images/inventory-desktop.png"
					alt="man taking inventory of containers"
				/>
				<div className="inventory-text-content md:px-8 lg:px-0">
					<h2
						className="inventory-heading mb-4 text-[1rem] text-headings font-bold overflow-x-hidden text-center xl:text-left xl:text-[2.5rem] xl:leading-[1.1]"
						data-aos="fade-right"
					>
						Get Proper Inventory For Your Cargo
					</h2>
					<p className="inventory-copy mb-4 text-xs overflow-x-hidden" data-aos="fade-left">
						Whether you tack your inventory by batch, in bulk or even by serial number, we are here to ensure you get
						accurate.
					</p>
					<p className="inventory-copy mb-4 text-xs overflow-x-hidden" data-aos="fade-right">
						Accountability and security for your cargo.
					</p>
					<p className="inventory-copy text-xs overflow-x-hidden" data-aos="fade-left">
						Complete openness to help you monitor your cargo inventory effectively and minimize losses.
					</p>
				</div>
				<img
					className="inventory__image mx-auto mb-4 hidden md:hidden xl:block"
					src="/images/inventory-desktop.png "
					alt="man taking inventory of containers"
				/>
			</section>
			<section id="about" className="about text-textColor text-center py-5 px- w-[83%] mx-auto mb-8 mt-[5rem]">
				<div className="lg:mx-auto lg:w-[80%] lg:px-0 flex flex-col gap-4  xl:w-[65%]">
					<h2 className="about-heading text-headings font-extrabold mb-0 md:text-[2.2rem]">What We Stand for</h2>
					<img src="/images/philosophy-sm.png" alt="shipping yard" className="mx-auto md:hidden" />
					<img
						src="/images/philosophy-desktop.png"
						alt="shipping yard"
						className="mx-auto mb-4 hidden md:block xl:hidden "
					/>
					<div className="about-text text-justify order-3 md:text-base md:px-10 xl:flex xl:xl:gap-12 xl:items-center xl:px-0">
						<p className="text-sm leading-[2">
							We have the philosophy that well informed customers are our best customers, and we make every effort to
							letting you know how out business and logistics work, so you can obtain terms that are fair and that
							solidly match your needs. We love answering customer questions! Please contact us so we can talk about how
							we can best serve you and your cargos. You will have peace of mind knowing that we are well equipped with
							the latest in both passive and active cargo safety features to ensure maximum accountability and safety
							for you cargos. We are always one step ahead to ensure the complete satisfaction of our customers no
							matter what industry or sector you are serving.
						</p>
						<img src="../about-desktop.svg" alt="" className="mx-auto mb-4 order-1 hidden xl:block" />
					</div>
				</div>
			</section>
			<section className="about-us2 text-center text-headings mb-4 w-[83%] mx-auto lg:mx-auto lg:w-[80%] lg:px-0 xl:w-[75%]">
				<h2 className="about-us2__heading text-headings mb-2 font-bold md:text-[2rem]">Why do business With us?</h2>
				<p className="text-sm mb-[2.15rem]">
					Get more value for your time and money without stress because of the structures we have put in place to ensure
					complete openness and accountability for every transaction carried out within our jurisdiction
				</p>
				<div className="about-us2__card-container flex flex-col xl:flex-row gap-5">
					<div className="about-us2__card px-4 py-[2.25rem] shadow-md md:w-[80%] mx-auto" data-aos="flip-left">
						<img src="/images/people-circle.png" alt="" className="mb-4 mx-auto" />
						<h3 className="about-us2__card-heading text-[0.875rem] mb-2 font-bold text-headings">What We Do</h3>
						<p className="about-us2__card-copy text-xs">
							We aim to ensure the satisfaction of our clients by providing the ultimate and on-time solutions to their
							cargo management needs.
						</p>
					</div>
					<div className="about-us2__card px-4 py-[2.25rem] shadow-md md:w-[80%] mx-auto" data-aos="flip-right">
						<img src="/images/bar-chart.png" alt="" className="mb-4 mx-auto" />
						<h3 className="about-us2__card-heading text-[0.875rem] mb-2 font-bold text-headings">Industry solutions</h3>
						<p className="about-us2__card-copy text-xs">
							We satisfy the numerous industries that require the services of a cargo management company on all fronts
							to keep the business running.
						</p>
					</div>
					<div className="about-us2__card px-4 py-[2.25rem] shadow-md md:w-[80%] mx-auto" data-aos="flip-left">
						<img src="/images/boat.png" alt="" className="mb-4 mx-auto" />
						<h3 className="about-us2__card-heading text-[0.875rem] mb-2 font-bold text-headings">Features</h3>
						<p className="about-us2__card-copy text-xs">
							Ensure maximum output rom your warehouse to achieve soaring success on both B2B and B2C fronts with our
							cargo management software
						</p>
					</div>
				</div>
			</section>
			<section className="testimonials py-7 px-3 w-[83%] mx-auto text-textColor">
				<div className="quote grid relative mb-5">
					<div className="mx-auto">
						<img src="/images/quote-icon.png" alt="quotes icon" />
					</div>
				</div>
				<h2 className="testimonial-heading font-extrabold text-[#333333] text-center md:text-[1.7rem] md:mt-8">
					What Our Clients Say
				</h2>

				<div className="testimonials-wrapper text-center">
					<div className="testimonial-card py-4 italic leading-[1.4] md:w-[55%] lg:py-10">
						<q>
							I feel better knowing that I have a place where I can entrust my cargos to when they arrive the country
							which makes it all easy for me to go about my business till I am ready to offload my goods.
						</q>
					</div>
					<div className="flex justify-center gap-3">
						<img src="/images/client1.png" alt="Stephen, a client" className="rounded-full w-[36px]" />
						<div className="text-left">
							<p className="text-sm font-semibold ">Okoli Stephen</p>
							<p className="text-xs">CEO. Nature Burns Ltd</p>
						</div>
					</div>
				</div>
			</section>
			<section className="contact-us w-[83%] mx-auto text-center text-textColor mt-[5rem] mb-[3rem]">
				<div className="bg-brandSecondary py-5 px-6 rounded-[10px]">
					<h2 className="text-white font-bold leading-[1.3]">
						Get on board with us and start managing your cargos in a smart, simple and reliable way
					</h2>
					<a
						className="hero-section__cta text-[0.75rem] py-[0.5rem] bg-brandPrimary px-4 grid mx-auto mt-[1rem] rounded-[4px] font-semibold text-white w-[fit-content] xl:text-base"
						href="/contact"
					>
						Contact Us
					</a>
				</div>
			</section>

			<Footer />
		</div>
	);
}

export default App;
