import React, {ReactElement} 				from 	'react';
import type * as NavbarTypes 				from 	'components/Navbar.d';
import	{motion, useInView}					from	'framer-motion';
import	Link								from	'next/link';
import	{useRouter}							from	'next/router';
import	Image								from	'next/image';
import	LogoYearn							from	'components/icons/LogoYearn';
import	MobileHeader						from	'components/MobileHeader';

const variants = {
	enter: {
		x: 0,
		opacity: 1,
		transition: {
			duration: 1,
			ease: 'easeInOut'
		}
	},
	initial: {
		x: -600,
		opacity: 0,
		transition: {
			duration: 1,
			ease: 'easeInOut'
		}
	}
};

function	NavbarMenuItem({option, isSelected}: NavbarTypes.TMenuItem): ReactElement {
	return (
		<div className={'header-nav-item'} aria-selected={isSelected}>
			<p className={'hover-fix'} title={option.label} >
				{option.label}
			</p>
			<div />
		</div>
	);
}

function	Header({
	options,
	children,
	wrapper
}: NavbarTypes.TNavbar): ReactElement {
	const	ref = React.useRef(null);
	const	isInView = useInView(ref);
	const	router = useRouter();

	return (
		<>
			<MobileHeader
				options={options}
				wrapper={wrapper} />
			<header className={'h-full w-full bg-neutral-100 md:h-[728px]'}>
				<div className={'flex h-full w-full flex-col items-center px-4 pt-8 pb-0'}>
					<Link href={'/'} scroll={false}>
						<div className={'hidden cursor-pointer md:flex'}>
							<LogoYearn />
						</div>
					</Link>
					<div ref={ref} className={'mt-0 md:mt-[105px]'}>
						<h1 className={'mb-4 text-center text-7xl font-bold text-neutral-900'}>
							{'Yearn Press Kit'}
						</h1>
						<div className={'text-center text-lg text-neutral-500'}>
							<p>{'A centralized asset bank for a decentralized brand.'}</p>
							<p>{'Take the blue pill and enter the world of yearn.'}</p>
						</div>
					</div>
					<div className={'flex w-full items-center justify-center'}>
						<Image
							objectFit={'contain'}
							src={'/blue-pill.png'}
							width={536}
							height={348}
							quality={90}
							loading={'eager'}
							priority />
					</div>
				</div>
			</header>
			<div
				aria-label={'desktop-navigation'}
				className={'sticky top-0 z-50 mt-auto hidden flex-col bg-neutral-100 pt-6 md:flex'}>
				<nav className={'mx-auto flex w-full max-w-6xl flex-row items-center justify-between'}>
					<div>
						<Link href={'/'} scroll={false}>
							<motion.div
								initial={'initial'}
								animate={isInView ? 'initial' : 'enter'}
								className={'cursor-pointer pb-3.5'}
								variants={variants}>
								<LogoYearn />
							</motion.div>
						</Link>
					</div>
					<div className={'flex w-full flex-row items-center justify-center'}>
						{options.map((option: NavbarTypes.TNavbarOption): ReactElement  => {
							return (
								<div key={option.route}>
									{React.cloneElement(
										wrapper,
										{href: option.route},
										<a><NavbarMenuItem option={option} isSelected={router.pathname === option.route} /></a>
									)}
								</div>
							);
						})}
					</div>
				</nav>
				{children}
			</div>
		</>
	);
}

export default Header;