import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
AOS.init({ duration: 2000 });

function App() {
	return (
		<div className="font-workSans text-[0.875rem] overflow-x-hidden">
			<Header />

			<section className="hero-section h-[290px] md:pb-[5rem] pt-[4.9rem] text-white md:flex w-full md:h-[auto] xl:h-[95vh] lg:pt-[6rem]">
				<div className="w-[90%] mx-auto md:w-[83%] lg:w-[80%] xl:w-[75%]">
					<div className=" hero-section__text-content order-2 flex flex-col gap-4 w-[80%] md:w-[80%] lg:w-[80%] lg:gap-8">
						<h1 className="hero-section__heading text-[1.625rem] font-[800] tracking-[1px] leading-[1.2] md:text-[3.5rem] lg:text-[4rem] xl:text-[5rem] lg:leading-[1.1]">
							Cargo Management Made Real Easy
						</h1>
						<p className="hero-section__subtitle text-[0.75rem] w-[80%] font-medium lg:text-[1.25rem]">
							Most efficient and simplest way to manage your imported cargo completely hassle free
						</p>
						<a
							className="hero-section__cta py-[0.5rem] px-[0.875rem] bg-brandPrimary text-white rounded-[5px] font-semibold w-[fit-content] md:mt-0 lg:text-[1rem] lg:bg-transparent lg:border-2 lg:border-white lg:w-[18%] text-center"
							href="contact.html"
						>
							Contact Us
						</a>
					</div>
				</div>
			</section>
			<section
				id="services"
				className="industries text-center md:text-justify flex flex-col gap-4 mb-8 py-9 w-[83%] mx-auto lg:mx-auto lg:w-[80%] lg:px-0  xl:w-[75%] relative xl:pt-[10rem] xl:text-left"
			>
				<div className="float xl:flex xl:flex-row-reverse xl:gap-8 xl:justify-start rounded-tl-[12px] rounded-bl-[12px] bg-[#F0F2FF] xl:shadow-md -z-[1] lg:z-10">
					<h2 className="industries-heading text-[1.25rem] text-headings font-bold md:text-[2.2rem] text-center md:mb-0 xl:hidden">
						Industries We Service
					</h2>
					<p className="industries-copy flex-col text-center text-[#282525] mb-[0.5rem] text-[0.875rem] md:text-base xl:hidden">
						We are trusted to provide professional cargo manage services to the following industries across the nation
						to suit their immediate cargo needs.
					</p>
					<div className="md:grid gap-4 md:gap-[1.5rem] md:grid-cols-2 xl:w-[55%] mt-8 xl:mt-0">
						<div className="industries__sectors  flex flex-col gap-4 overflow-x-hidden " data-aos="fade-up">
							<div className="sector p-6 shadow-md">
								<div className="heading-cont ">
									<img src="./images/fast-food.png" alt="food icon" className="" />
									<h2 className="sector-heading text-[0.875rem] heading">Food and Beverages</h2>
								</div>
								<p className="sector-text text-[0.875rem] md:text-base xl:text-sm">
									We provide services for individuals and companies who engage in food production and importation with a
									need to ship in food products.
								</p>
							</div>
							<div className=" sector p-6 shadow-md">
								<div className="heading-cont">
									<img src="./images/phones.png" alt="fashion icon" className="" />
									<h2 className="sector-heading heading">Electronics and Gadgets</h2>
								</div>
								<p className="sector-text md:text-base xl:text-sm">
									We provide services for individuals and companies who engage in the importation of household and
									electronics, gadgets, computers, phones etc.
								</p>
							</div>
						</div>
						<div className="industries__sectors  flex flex-col gap-4 overflow-x-hidden" data-aos="fade-up">
							<div className=" sector p-6 shadow-md">
								<div className="heading-cont">
									<img src="./images/fashion-icon.png" alt="fashion icon" className="" />
									<h2 className="sector-heading heading ">Fashion</h2>
								</div>
								<p className="sector-text md:text-base xl:text-sm">
									We provide services for individuals and companies who engage in the importation of fabrics, bags,
									shoes and other fashion accessories.
								</p>
							</div>
							<div className=" sector p-6 shadow-md">
								<div className="heading-cont">
									<img src="./images/automobile.png" alt="fashion icon" className="" />
									<h2 className="sector-heading heading ">Automobile</h2>
								</div>
								<p className="sector-text md:text-base xl:text-sm">
									We provide services for individuals and companies into importation of cars, heavy duty spare parts and
									other basic automobile accessories.
								</p>
							</div>
						</div>
					</div>
					<div
						className="industries__text-content md:p-0 lg:mx-auto lg:w-[80%] lg:px-0 xl:w-[30%] xl:mr-0 xl:ml-[3rem] overflow-x-hidden"
						
					>
						<h2 className="industries-heading text-headings font-extrabold hidden xl:block xl:text-[3rem] leading-[1.1] mb-4">
							Industries We Service
						</h2>
						<p className="industries-copy gap-3 hidden xl:block xl:text-base">
							We are trusted to provide professional cargo manage services to the following industries across the nation
							to suit their immediate cargo needs.
						</p>
						<a
							className="hero-section__cta text-[0.7rem] py-[0.5rem] border-2 border-brandPrimary px-5 grid mx-auto mt-[2rem] overflow-x-hidden rounded-[4px] font-semibold text-brandPrimary w-[fit-content] md:text-base xl:mx-0 xl:w-[40%] text-center"
							href="/contact"
						>
							Contact Us
						</a>
					</div>
				</div>
			</section>
			<section className="inventory p-4 md:p-0 overflow-x-hidden md:flex md:flex-row-reverse items-center md:pr-0 justify-content md:w-[90%] md:ml-auto md:gap-[2rem] lg:ml-[auto] lg:w-[89%] lg:px-0 xl:ml-auto xl:w-[90%] xl:mt-[19rem] xl:gap-[3rem] xl:mb-[13rem]">
				<img
					src="/images/inventory-sm.png"
					className="inventory-img-sm mx-auto mb-4 block md:hidden"
					alt="man taking inventory of container"
					data-aos="fade-right"
				/>
				<img
					className="inventory__image mx-auto hidden w-[45%] md:block lg:w-[46%] xl:w-[50%] xl:mr-0"
					src="/images/inventory-desktop.png"
					alt="man taking inventory of containers"
				/>
				<div className="inventory-text-content lg:px-0 xl:w-[46%]">
					<h2
						className="inventory-heading mb-4 text-[1rem] text-headings font-bold overflow-hidden text-center md:leading-[1.1] md:text-left md:text-[1.5rem] md:pl-[0.6rem] xl:text-left xl:text-[2.5rem] lg:mb-[2.2rem]"
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
			</section>
			<section
				id="about"
				className="about text-textColor text-center px- w-[83%] mx-auto my-[5rem] md:py-0 md:mx-0 md:w-[87%] lg:w-[94%] xl:mb-[13rem]"
			>
				<h2 className="about-heading text-headings font-extrabold mb-2 md:text-[2rem] md:hidden">What We Stand for</h2>
				<div className=" lg:px-0 flex flex-col gap-4 md:flex-row md:justify-between md:items-center md:gap-[2rem] xl:w-[100%] xl:justify-start xl:gap-[4rem]">
					<img src="/images/philosophy-sm.png" alt="shipping yard" className="mx-auto md:hidden" />
					<img
						src="/images/philosophy-desktop.png"
						alt="shipping yard"
						className="mx-auto hidden w-[50%] md:block xl:mx-0 xl:w-[50%] xl:aspect-[1/0.8]"
					/>
					<div className="about-text text-justify order-3 md:text-base xl:w-[40%] xl:px-0" data-aos="fade-right">
						<h2 className="about-heading text-headings font-extrabold hidden mb-[1rem] md:block md:text-[2rem] xl:text-[3rem]">
							What We Stand for
						</h2>

						<p className="text-sm lg:text-[1.125rem] xl:mt-[2.5rem] lg:leading-[1.4]">
							We have the philosophy that well informed customers are our best customers, and we make every effort to
							letting you know how out business and logistics work, so you can obtain terms that are fair and that
							solidly match your needs. We love answering customer questions! Please contact us so we can talk about how
							we can best serve you and your cargos. You will have peace of mind knowing that we are well equipped with
							the latest in both passive and active cargo safety features to ensure maximum accountability and safety
							for you cargos. We are always one step ahead to ensure the complete satisfaction of our customers no
							matter what industry or sector you are serving.
						</p>
					</div>
				</div>
			</section>
			<section className="about-us2 text-center text-headings mb-4 w-[83%] mx-auto md:w-[90%] lg:mx-auto lg:w-[80%] lg:px-0 xl:mb-[13rem]">
				<h2 className="about-us2__heading text-headings mb-2 font-bold md:text-[2rem] lg:font-xtrabold lg:text-[3rem]">
					Why do business With us?
				</h2>
				<p className="text-sm mb-[2.15rem] lg:w-[70%] mx-auto lg:text-xl">
					Get more value for your time and money without stress because of the structures we have put in place to ensure
					complete openness and accountability for every transaction carried out within our jurisdiction
				</p>
				<div className="about-us2__card-container flex flex-col md:flex-row gap-4 md:justify-between lg:w-[80%] mx-auto">
					<div className="about-us2__card px-4 py-[2.25rem] shadow-md mx-auto lg:w-[32%]" data-aos="flip-left">
						<img src="/images/people-circle.png" alt="" className="mb-4 mx-auto" />
						<h3 className="about-us2__card-heading text-[0.875rem] mb-2 font-bold text-headings lg:text-lg">
							What We Do
						</h3>
						<p className="about-us2__card-copy text-xs">
							We aim to ensure the satisfaction of our clients by providing quick solutions to their cargo management
							needs.
						</p>
					</div>
					<div className="about-us2__card px-4 py-[2.25rem] shadow-md mx-auto lg:w-[34%]" data-aos="flip-right">
						<img src="/images/bar-chart.png" alt="" className="mb-4 mx-auto" />
						<h3 className="about-us2__card-heading text-[0.875rem] mb-2 font-bold text-headings lg:text-lg">
							Industry solutions
						</h3>
						<p className="about-us2__card-copy text-xs">
							We satisfy the numerous industries that require the services of a cargo management company on all fronts
							to keep the business running.
						</p>
					</div>
					<div className="about-us2__card px-4 py-[2.25rem] shadow-md mx-auto lg:w-[35%]" data-aos="flip-left">
						<img src="/images/boat.png" alt="" className="mb-4 mx-auto" />
						<h3 className="about-us2__card-heading text-[0.875rem] mb-2 font-bold text-headings lg:text-lg">
							Features
						</h3>
						<p className="about-us2__card-copy text-xs">
							Ensure maximum output rom your warehouse to achieve soaring success on both B2B and B2C fronts with our
							cargo management software
						</p>
					</div>
				</div>
			</section>
			<section className="testimonials py-7 px-3 w-[83%] mx-auto text-textColor xl:mb-[13rem]">
				<div className="quote grid relative mb-5">
					<div className="mx-auto">
						<img src="/images/quote-icon.png" alt="quotes icon" />
					</div>
				</div>
				<h2 className="testimonial-heading font-extrabold text-[#333333] text-center md:text-[1.7rem] md:mt-8">
					What Our Clients Say
				</h2>

				<div className="testimonials-wrapper text-center">
					<div className="testimonial-card py-4 italic leading-[1.4] md:w-[55%] mx-auto lg:py-10">
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
			<section className="contact-us w-[83%] mx-auto text-center text-textColor mt-[5rem] mb-[3rem] md:w-[70%] lg:w-[70%]">
				<div className="bg-brandSecondary py-5 px-6 rounded-[10px] md:py-[2rem]">
					<h2 className="text-white font-bold leading-[1.3] lg:w-[65%] mx-auto md:text-base xl:leading-[1.5] xl:text-[2rem]">
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
