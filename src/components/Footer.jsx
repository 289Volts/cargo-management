import React from "react";

const Footer = () => {
	return (
		<footer className="flex bg-brandSecondary flex-col text-left md:text-center gap-2 text-white md:mt-[3rem]">
			<div className="footer-grid w-[85%] mx-auto xl:w-[80%] grid justify-between pt-5 pb-8 md:text-left md:px-5 footer-wrapper">
				<div className="logo-text space-y-3 md:p-0 md:flex md:flex-col md:gap-[1.5rem] md:w-[30]">
					<a href="" className="md:hidden">
						<img src="/images/footer-logo-sm.png" alt="logo" />
					</a>
					<a href="" className="hidden md:block">
						<img src="/images/footer-logo-desktop.png" alt="logo" className="" />
					</a>
					<p className="footer-copy text-[0.5rem] lg:w-[60] md:text-[0.75rem] lg:text-base">
						Simplest, reliable and easy way to secure and manage your cargo effectively.
					</p>
					<div className="social-links gap-4 mt-0 lg:gap-4 items-center hidden md:flex md:justify-">
						<a href="https://facebook.com" className="">
							<img className="w-[100%]" src="/images/fb.png" alt="facebook page" />
						</a>
						<a href="https://twitter.com" className="">
							<img className="w-[100%] mx-auto" src="/images/Twitter.png" alt="twitter page" />
						</a>
						<a href="https://gmail.com" className="">
							<img className="w-[100%] mr-auto" src="/images/mail.png" alt="email account" />
						</a>
					</div>
				</div>
				<div className="company-links flex flex-col gap-2 mb-5 ml-[rem] md:gap-3 md:mb-0 md:place-self-start">
					<h2 className="company-links__heading font-bold text-xs lg:text-base">Company</h2>
					<a href="#about" className="company-links__link text-[0.6rem] lg:text-sm">
						About Us
					</a>
					<a href="#industries" className="company-links__link text-[0.6rem] lg:text-sm">
						Industries we service
					</a>
					<a href="#testimonials" className="company-links__link text-[0.6rem] lg:text-sm">
						Testimonials
					</a>
				</div>
				<div className="solutions flex flex-col gap-2 md:gap-3 md:place-self-start">
					<h2 className="solution-links__heading font-bold text-xs lg:text-base">Solutions</h2>
					<a href="#about" className="company-links__link text-[0.6rem] lg:text-sm">
						What we do
					</a>
					<a href="#industries" className="company-links__link text-[0.6rem] lg:text-sm">
						Industries we service
					</a>
					<a href="#features" className="company-links__link text-[0.6rem] lg:text-sm">
						Features
					</a>
				</div>
				<div className="footer-cta flex flex-col gap-4 md:hidden">
					<a
						className="py-[0.45rem] px-3 flex items-center text-[0.6rem] border-white border-2 rounded-[4px] font-bold text-white w-[fit-content] md:mt-0 md:mb-4 md:mx-0 md:text-base lg:text-[1.3rem] lg:py-3 lg:px-5"
						href="contact.html"
					>
						Contact Us
					</a>
					<div className="social-links flex gap-4 lg:gap-0 items-center md:justify-center">
						<a href="https://facebook.com" className="w-[15%] md:w-[20%] lg:w-[30%]">
							<img className="w-[100%] md:w-[70%] lg:w-[40%] ml-auto" src="/images/fb.png" alt="facebook page" />
						</a>
						<a href="https://twitter.com" className="w-[15%] md:w-[20%] lg:w-[30%]">
							<img className="w-[100%] md:w-[70%] lg:w-[40%] mx-auto" src="/images/Twitter.png" alt="twitter page" />
						</a>
						<a href="https://gmail.com" className="w-[18%] md:w-[20%] lg:w-[30%]">
							<img className="w-[100%] md:w-[70%] lg:w-[40%] mr-auto" src="/images/mail.png" alt="email account" />
						</a>
					</div>
				</div>
			</div>
				<div className="credit bg-brandSecondaryDeep font-medium text-center py-4 col-span-3 md:col-span-4 md:mt-4 text-[0.75rem] md:text-base">
					<p className="">CargoSpot <span className="">&copy;</span> 2022, All rights reserved</p>
				</div>
		</footer>
	);
};

export default Footer;
