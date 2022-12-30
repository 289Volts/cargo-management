import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
	const showNav = () => {
		document.querySelector(".mobile-nav").classList.remove("hide");
	};
	const hideNav = () => {
		document.querySelector(".mobile-nav").classList.add("hide");
	};

	const hide = () => {
		console.log('work')
		document.querySelector(".mobile-nav").classList.add("hide");
	};

	return (
		<div className=" fixed top-0 right-0 left-0 font-workSans z-[100]">
			<div className="relative backdrop h-[55px] md:h-[68px] z-[100]">
				<header className="fixed top-0 right-0 left-0 flex justify-between items-center py-3 pt-[1.2rem] md:p-0 md:py-3 w-[90%] lg:w-[80%] mx-auto z-[100]">
					<NavLink to="/" className="hidden md:block">
						<img src="/images/logo-desktop.png" alt="logo" />
					</NavLink>
					<NavLink to="/" className="md:hidden">
						<img src="/images/logo-sm.png" alt="logo" />
					</NavLink>
					<div className="flex items-center md:gap-x-[3.5rem]">
						<nav className="desktop-nav hidden md:block font-medium">
							<ul className="flex gap-x-[3.5rem] text-white">
								<li className="">
									<a
										href="/"
										className="home"
									>
										Home
									</a>
								</li>
								<li className="">
									<a
										href="#services"
										className=""
									>
										Our Services
									</a>
								</li>
								<li className="">
									<a
										href="#about"
										className=""
									>
										About Us
									</a>
								</li>
							</ul>
						</nav>
						<div className="flex flex-col gap-[0.33rem] md:hidden" onClick={showNav}>
							<span className="w-[28px] h-[3px] bg-white rounded-[4px]"></span>
							<span className="w-[28px] h-[3px] bg-white rounded-[4px]"></span>
							<span className="w-[28px] h-[3px] bg-white rounded-[4px]"></span>
						</div>
					</div>
					<a
						className="hero-section__cta py-[0.6rem] bg-brandPrimary px-5 rounded-[5px] font-semibold text-white hidden md:block md:text-base xl:mx-0 xl:w-[12%] text-center"
						href="/contact"
					>
						Contact Us
					</a>
					<nav className="mobile-nav fixed h-screen w-[60%] bg-white left-0 top-0 p-6 pt-[3rem] hide transition-transform duration-[650ms] md:hidden z-10">
						<div className="flex flex-col gap-[0.33rem] mb-9 cursor-pointer w-[fit-content]" onClick={hideNav}>
							<span className="w-[28px] h-[3px] bg-black rounded-[4px] -rotate-45 translate-y-2"></span>
							<span className="w-[28px] h-[3px] bg-black rounded-[4px] rotate-45"></span>
						</div>
						<ul className="">
							<li className="py-3">
								<a onClick={hide} href="/" className="font-medium mobile-link">
									Home
								</a>
							</li>
							<li className="py-3">
								<a onClick={hide} href="#services" className="font-medium mobile-link">
									Our Services
								</a>
							</li>
							<li className="py-3">
								<a onClick={hide} href="#about" className="font-medium mobile-link">
									About Us
								</a>
							</li>
						</ul>
					</nav>
				</header>
			</div>
		</div>
	);
};

export default Header;
