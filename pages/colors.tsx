import	React, {ReactElement}	from	'react';
import	ContentCard				from	'components/ContentCard';
import	{copyToClipboard}				from	'@yearn-finance/web-lib/utils';

function	Colors(): ReactElement {

	function copyColor(e: React.MouseEvent<HTMLParagraphElement>): void {
		e.stopPropagation();
		copyToClipboard(e.currentTarget.innerText);
	}

	return (
		<section aria-label={'Color'}>
			<h2 className={'mb-10 text-3xl font-bold text-neutral-900'}>
				{'Color'}
			</h2>
			<ContentCard
				title={'Primary Palette'}
				description={'Our primary color palette consists of Blue, White and Black.\nThese colours contrast to create high visibility.'}>
				<div className={'grid grid-cols-1 gap-x-5 pb-10 md:grid-cols-3 md:gap-y-14'}>
					<div className={'mt-6 h-[315px] bg-yearn-blue px-5 py-4 text-white md:my-6'}>
						<p>{'Yearn Blue'}</p>
						<p className={'cursor-pointer hover:font-bold'} onClick={copyColor}>{'#0675F9'}</p>
						<p className={'cursor-pointer hover:font-bold'} onClick={copyColor}>{'6.87.249'}</p>
						<p>{'100.75.0.0'}</p>
					</div>
					<div className={'mt-6 h-[315px] border border-neutral-400 bg-white px-5 py-4 text-black md:my-6'}>
						<p>{'White'}</p>
						<p className={'cursor-pointer hover:font-bold'} onClick={copyColor}>{'#FFFFFF'}</p>
						<p className={'cursor-pointer hover:font-bold'} onClick={copyColor}>{'255.255.255'}</p>
						<p>{'0.0.0.0'}</p>
					</div>
					<div className={'mt-6 h-[315px] bg-black px-5 py-4 text-white md:my-6'}>
						<p>{'Black'}</p>
						<p className={'cursor-pointer hover:font-bold'} onClick={copyColor}>{'#000000'}</p>
						<p className={'cursor-pointer hover:font-bold'} onClick={copyColor}>{'0.0.0'}</p>
						<p>{'0.0.0.100'}</p>
						<p>{'Pantone Process Black C'}</p>
					</div>
				</div>
			</ContentCard>
			<ContentCard
				title={'Tints'}
				description={'Tints of color extend the color palette, for example,\nfor use in UI, charts and diagrams.'}>
				<div className={'grid grid-cols-1 pt-5 pb-14 md:grid-cols-4'}>
					<div className={'tint-grey-100 h-[160px] px-5 py-4 text-black'}>
						<p>{"Good ol' Grey 100"}</p>
						<p className={'cursor-pointer hover:font-bold'} onClick={copyColor}>{'#F4F4F4'}</p>
						<p className={'cursor-pointer hover:font-bold'} onClick={copyColor}>{'244.244.244'}</p>
						<p>{'5.4.4.0'}</p>
					</div>
					<div className={'tint-grey-200 h-[160px] px-5 py-4 text-black'}>
						<p>{"Good ol' Grey 200"}</p>
						<p className={'cursor-pointer hover:font-bold'} onClick={copyColor}>{'#EBEBEB'}</p>
						<p className={'cursor-pointer hover:font-bold'} onClick={copyColor}>{'235.235.235'}</p>
						<p>{'9.6.7.0'}</p>
					</div>
					<div className={'tint-grey-300 h-[160px] px-5 py-4 text-black'}>
						<p>{"Good ol' Grey 300"}</p>
						<p className={'cursor-pointer hover:font-bold'} onClick={copyColor}>{'#E1E1E1'}</p>
						<p className={'cursor-pointer hover:font-bold'} onClick={copyColor}>{'225.225.225'}</p>
						<p>{'14.10.11.0'}</p>
					</div>
					<div className={'tint-grey-400 h-[160px] px-5 py-4 text-black'}>
						<p>{"Good ol' Grey 400"}</p>
						<p className={'cursor-pointer hover:font-bold'} onClick={copyColor}>{'#9D9D9D'}</p>
						<p className={'cursor-pointer hover:font-bold'} onClick={copyColor}>{'157.157.157'}</p>
						<p>{'39.31.31.9'}</p>
					</div>


					<div className={'tint-grey-500 h-[160px] px-5 py-4 text-white'}>
						<p>{"Good ol' Grey 500"}</p>
						<p className={'cursor-pointer hover:font-bold'} onClick={copyColor}>{'#7E7E7E'}</p>
						<p className={'cursor-pointer hover:font-bold'} onClick={copyColor}>{'126.126.126'}</p>
						<p>{'50.39.39.21'}</p>
					</div>
					<div className={'tint-grey-600 h-[160px] px-5 py-4 text-white'}>
						<p>{"Good ol' Grey 600"}</p>
						<p className={'cursor-pointer hover:font-bold'} onClick={copyColor}>{'#5B5B5B'}</p>
						<p className={'cursor-pointer hover:font-bold'} onClick={copyColor}>{'91.91.91'}</p>
						<p>{'59.49.47.39'}</p>
					</div>
					<div className={'tint-grey-700 h-[160px] px-5 py-4 text-white'}>
						<p>{"Good ol' Grey 700"}</p>
						<p className={'cursor-pointer hover:font-bold'} onClick={copyColor}>{'#424242'}</p>
						<p className={'cursor-pointer hover:font-bold'} onClick={copyColor}>{'66.66.66'}</p>
						<p>{'66.56.53.57'}</p>
					</div>
					<div className={'tint-grey-800 h-[160px] px-5 py-4 text-white'}>
						<p>{"Good ol' Grey 800"}</p>
						<p className={'cursor-pointer hover:font-bold'} onClick={copyColor}>{'#282828'}</p>
						<p className={'cursor-pointer hover:font-bold'} onClick={copyColor}>{'40.40.40'}</p>
						<p>{'74.64.59.77'}</p>
					</div>


					<div className={'tint-grey-900 h-[160px] px-5 py-4 text-white'}>
						<p>{"Good ol' Grey 900"}</p>
						<p className={'cursor-pointer hover:font-bold'} onClick={copyColor}>{'#0C0C0C'}</p>
						<p className={'cursor-pointer hover:font-bold'} onClick={copyColor}>{'12.12.12'}</p>
						<p>{'88.76.62.95'}</p>
					</div>

				</div>
			</ContentCard>
			<ContentCard
				title={'Secondary Palette'}
				description={'Our secondary color palette is used to extend flexibility and depth across our touchpoints. These colours can be used as panels to support an image or headline or contain body copy. In some instances, color can be used within a headline for internal and external communications.'}>
				<div className={'grid grid-cols-1 pt-5 pb-20 md:grid-cols-4'}>
					<div className={'order-[1] h-[160px] bg-metaverse-sunset-50 px-5 py-4 text-black md:order-none'}>
						<p>{'Metaverse Sunset 50'}</p>
						<p className={'cursor-pointer hover:font-bold'} onClick={copyColor}>{'#FFEEA9'}</p>
						<p className={'cursor-pointer hover:font-bold'} onClick={copyColor}>{'255.238.169'}</p>
						<p>{'0.6.43.0'}</p>
						<p>{'Pantone 0131c'}</p>
					</div>
					<div className={'order-[11] h-[160px] bg-disco-salmon-50 px-5 py-4 text-black md:order-none'}>
						<p>{'Disco Salmon 50'}</p>
						<p className={'cursor-pointer hover:font-bold'} onClick={copyColor}>{'#FFECEF'}</p>
						<p className={'cursor-pointer hover:font-bold'} onClick={copyColor}>{'255.236.239'}</p>
						<p>{'0.12.3.0'}</p>
						<p>{'Pantone 705c'}</p>
					</div>
					<div className={'order-[21] h-[160px] bg-tokyo-party-50 px-5 py-4 text-black md:order-none'}>
						<p>{'Tokyo Party 50'}</p>
						<p className={'cursor-pointer hover:font-bold'} onClick={copyColor}>{'#D1A2DD'}</p>
						<p className={'cursor-pointer hover:font-bold'} onClick={copyColor}>{'209.162.221'}</p>
						<p>{'17.44.0.0'}</p>
						<p>{'Pantone 2562c'}</p>
					</div>
					<div className={'order-[31] h-[160px] bg-up-only-green-50 px-5 py-4 text-black md:order-none'}>
						<p>{'Up Only Green 50'}</p>
						<p className={'cursor-pointer hover:font-bold'} onClick={copyColor}>{'#DDF3AC'}</p>
						<p className={'cursor-pointer hover:font-bold'} onClick={copyColor}>{'221.243.172'}</p>
						<p>{'22.0.44.0'}</p>
						<p>{'Pantone 372c'}</p>
					</div>


					<div className={'order-[2] h-[160px] bg-metaverse-sunset-100 px-5 py-4 text-black md:order-none'}>
						<p>{'Metaverse Sunset 100'}</p>
						<p className={'cursor-pointer hover:font-bold'} onClick={copyColor}>{'#FFDC53'}</p>
						<p className={'cursor-pointer hover:font-bold'} onClick={copyColor}>{'255.220.83'}</p>
						<p>{'0.14.77.0'}</p>
						<p>{'Pantone 113c'}</p>
					</div>
					<div className={'order-[12] h-[160px] bg-disco-salmon-100 px-5 py-4 text-black md:order-none'}>
						<p>{'Disco Salmon 100'}</p>
						<p className={'cursor-pointer hover:font-bold'} onClick={copyColor}>{'#FF90A1'}</p>
						<p className={'cursor-pointer hover:font-bold'} onClick={copyColor}>{'255.144.161'}</p>
						<p>{'0.57.20.0'}</p>
						<p>{'Pantone 1775c'}</p>
					</div>
					<div className={'order-[22] h-[160px] bg-tokyo-party-100 px-5 py-4 text-black md:order-none'}>
						<p>{'Tokyo Party 100'}</p>
						<p className={'cursor-pointer hover:font-bold'} onClick={copyColor}>{'#A446BA'}</p>
						<p className={'cursor-pointer hover:font-bold'} onClick={copyColor}>{'164.70.186'}</p>
						<p>{'56.78.0.0'}</p>
						<p>{'Pantone 2582c'}</p>
					</div>
					<div className={'order-[32] h-[160px] bg-up-only-green-100 px-5 py-4 text-black md:order-none'}>
						<p>{'Up Only Green 100'}</p>
						<p className={'cursor-pointer hover:font-bold'} onClick={copyColor}>{'#BAE659'}</p>
						<p className={'cursor-pointer hover:font-bold'} onClick={copyColor}>{'186.230.89'}</p>
						<p>{'36.0.76.0'}</p>
						<p>{'Pantone 374c'}</p>
					</div>


					<div className={'order-[3] h-[160px] bg-metaverse-sunset-200 px-5 py-4 text-black md:order-none'}>
						<p>{'Metaverse Sunset 200'}</p>
						<p className={'cursor-pointer hover:font-bold'} onClick={copyColor}>{'#F1F025'}</p>
						<p className={'cursor-pointer hover:font-bold'} onClick={copyColor}>{'241.240.37'}</p>
						<p>{'14.0.96.0'}</p>
						<p>{'Pantone 395c'}</p>
					</div>
					<div className={'order-[13] h-[160px] bg-disco-salmon-200 px-5 py-4 text-white md:order-none'}>
						<p>{'Disco Salmon 200'}</p>
						<p className={'cursor-pointer hover:font-bold'} onClick={copyColor}>{'#FD5DA5'}</p>
						<p className={'cursor-pointer hover:font-bold'} onClick={copyColor}>{'253.93.165'}</p>
						<p>{'0.75.0.0'}</p>
						<p>{'Pantone 212c'}</p>
					</div>
					<div className={'order-[23] h-[160px] bg-tokyo-party-200 px-5 py-4 text-white md:order-none'}>
						<p>{'Tokyo Party 200'}</p>
						<p className={'cursor-pointer hover:font-bold'} onClick={copyColor}>{'#7829E1'}</p>
						<p className={'cursor-pointer hover:font-bold'} onClick={copyColor}>{'253.93.165'}</p>
						<p>{'0.75.0.0'}</p>
						<p>{'Pantone 266c'}</p>
					</div>
					<div className={'order-[33] h-[160px] bg-up-only-green-200 px-5 py-4 text-black md:order-none'}>
						<p>{'Up Only Green 200'}</p>
						<p className={'cursor-pointer hover:font-bold'} onClick={copyColor}>{'#55F541'}</p>
						<p className={'cursor-pointer hover:font-bold'} onClick={copyColor}>{'85.245.65'}</p>
						<p>{'83.0.100.0'}</p>
						<p>{'Pantone 7488c'}</p>
					</div>


					<div className={'order-[4] h-[160px] bg-metaverse-sunset-300 px-5 py-4 text-black md:order-none'}>
						<p>{'Metaverse Sunset 300'}</p>
						<p className={'cursor-pointer hover:font-bold'} onClick={copyColor}>{'#E6FC06'}</p>
						<p className={'cursor-pointer hover:font-bold'} onClick={copyColor}>{'230.252.6'}</p>
						<p>{'Pantone 803c'}</p>
					</div>
					<div className={'order-[14] h-[160px] bg-disco-salmon-300 px-5 py-4 text-white md:order-none'}>
						<p>{'Disco Salmon 300'}</p>
						<p className={'cursor-pointer hover:font-bold'} onClick={copyColor}>{'#FA3AA7'}</p>
						<p className={'cursor-pointer hover:font-bold'} onClick={copyColor}>{'250.58.167'}</p>
						<p>{'5.83.0.0'}</p>
						<p>{'Pantone 806c'}</p>
					</div>
					<div className={'order-[24] h-[160px] bg-tokyo-party-300 px-5 py-4 text-white md:order-none'}>
						<p>{'Tokyo Party 300'}</p>
						<p className={'cursor-pointer hover:font-bold'} onClick={copyColor}>{'#5814FB'}</p>
						<p className={'cursor-pointer hover:font-bold'} onClick={copyColor}>{'88.20.251'}</p>
						<p>{'86.87.0.0'}</p>
					</div>
					<div className={'order-[34] h-[160px] bg-up-only-green-300 px-5 py-4 text-black md:order-none'}>
						<p>{'Up Only Green 300'}</p>
						<p className={'cursor-pointer hover:font-bold'} onClick={copyColor}>{'#0DFF2F'}</p>
						<p className={'cursor-pointer hover:font-bold'} onClick={copyColor}>{'13.255.47'}</p>
						<p>{'95.0.100.0'}</p>
						<p>{'Pantone 802c'}</p>
					</div>


					<div className={'order-[5] h-[160px] bg-metaverse-sunset-400 px-5 py-4 text-black md:order-none'}>
						<p>{'Metaverse Sunset 400'}</p>
						<p className={'cursor-pointer hover:font-bold'} onClick={copyColor}>{'#F0D308'}</p>
						<p className={'cursor-pointer hover:font-bold'} onClick={copyColor}>{'240.211.8'}</p>
						<p>{'9.12.93.0'}</p>
						<p>{'Pantone 7405c'}</p>
					</div>
					<div className={'order-[15] h-[160px] bg-disco-salmon-400 px-5 py-4 text-white md:order-none'}>
						<p>{'Disco Salmon 400'}</p>
						<p className={'cursor-pointer hover:font-bold'} onClick={copyColor}>{'#EE478A'}</p>
						<p className={'cursor-pointer hover:font-bold'} onClick={copyColor}>{'238.71.138'}</p>
						<p>{'0.83.10.0'}</p>
						<p>{'Pantone 1915c'}</p>
					</div>
					<div className={'order-[25] h-[160px] bg-tokyo-party-400 px-5 py-4 text-white md:order-none'}>
						<p>{'Tokyo Party 400'}</p>
						<p className={'cursor-pointer hover:font-bold'} onClick={copyColor}>{'#6B26C2'}</p>
						<p className={'cursor-pointer hover:font-bold'} onClick={copyColor}>{'107.38.194'}</p>
						<p>{'80.84.0.0'}</p>
						<p>{'Pantone 267c'}</p>
					</div>
					<div className={'order-[35] h-[160px] bg-up-only-green-400 px-5 py-4 text-black md:order-none'}>
						<p>{'Up Only Green 400'}</p>
						<p className={'cursor-pointer hover:font-bold'} onClick={copyColor}>{'#38E331'}</p>
						<p className={'cursor-pointer hover:font-bold'} onClick={copyColor}>{'56.227.49'}</p>
						<p>{'88.0.100.0'}</p>
					</div>


					<div className={'order-[6] h-[160px] bg-metaverse-sunset-500 px-5 py-4 text-white md:order-none'}>
						<p>{'Metaverse Sunset 500'}</p>
						<p className={'cursor-pointer hover:font-bold'} onClick={copyColor}>{'#F8A908'}</p>
						<p className={'cursor-pointer hover:font-bold'} onClick={copyColor}>{'248.169.8'}</p>
						<p>{'0.39.94.0'}</p>
						<p>{'Pantone 137c'}</p>
					</div>
					<div className={'order-[16] h-[160px] bg-disco-salmon-500 px-5 py-4 text-white md:order-none'}>
						<p>{'Disco Salmon 500'}</p>
						<p className={'cursor-pointer hover:font-bold'} onClick={copyColor}>{'#DF536A'}</p>
						<p className={'cursor-pointer hover:font-bold'} onClick={copyColor}>{'233.83.106'}</p>
						<p>{'6.79.43.0'}</p>
						<p>{'Pantone 198c'}</p>
					</div>
					<div className={'order-[26] h-[160px] bg-tokyo-party-500 px-5 py-4 text-white md:order-none'}>
						<p>{'Tokyo Party 500'}</p>
						<p className={'cursor-pointer hover:font-bold'} onClick={copyColor}>{'#7D3787'}</p>
						<p className={'cursor-pointer hover:font-bold'} onClick={copyColor}>{'125.55.135'}</p>
						<p>{'62.90.5.1'}</p>
						<p>{'Pantone 7662c'}</p>
					</div>
					<div className={'order-[36] h-[160px] bg-up-only-green-500 px-5 py-4 text-white md:order-none'}>
						<p>{'Up Only Green 500'}</p>
						<p className={'cursor-pointer hover:font-bold'} onClick={copyColor}>{'#63C532'}</p>
						<p className={'cursor-pointer hover:font-bold'} onClick={copyColor}>{'99.197.50'}</p>
						<p>{'77.0.100.0'}</p>
					</div>


					<div className={'order-[7] h-[160px] bg-metaverse-sunset-600 px-5 py-4 text-white md:order-none'}>
						<p>{'Metaverse Sunset 600'}</p>
						<p className={'cursor-pointer hover:font-bold'} onClick={copyColor}>{'#F27F07'}</p>
						<p className={'cursor-pointer hover:font-bold'} onClick={copyColor}>{'242.127.7'}</p>
						<p>{'0.16.100.0'}</p>
						<p>{'Pantone 151c'}</p>
					</div>
					<div className={'order-[17] h-[160px] bg-disco-salmon-600 px-5 py-4 text-white md:order-none'}>
						<p>{'Disco Salmon 600'}</p>
						<p className={'cursor-pointer hover:font-bold'} onClick={copyColor}>{'#CC3767'}</p>
						<p className={'cursor-pointer hover:font-bold'} onClick={copyColor}>{'204.55.103'}</p>
						<p>{'14.89.35.4'}</p>
						<p>{'Pantone 7635c'}</p>
					</div>
					<div className={'order-[27] h-[160px] bg-tokyo-party-600 px-5 py-4 text-white md:order-none'}>
						<p>{'Tokyo Party 600'}</p>
						<p className={'cursor-pointer hover:font-bold'} onClick={copyColor}>{'#663690'}</p>
						<p className={'cursor-pointer hover:font-bold'} onClick={copyColor}>{'102.54.144'}</p>
						<p>{'75.89.0.0'}</p>
						<p>{'Pantone 526c'}</p>
					</div>
					<div className={'order-[37] h-[160px] bg-up-only-green-600 px-5 py-4 text-white md:order-none'}>
						<p>{'Up Only Green 600'}</p>
						<p className={'cursor-pointer hover:font-bold'} onClick={copyColor}>{'#34A14F'}</p>
						<p className={'cursor-pointer hover:font-bold'} onClick={copyColor}>{'52.161.79'}</p>
						<p>{'94.0.93.0'}</p>
					</div>


					<div className={'order-[8] h-[160px] bg-metaverse-sunset-700 px-5 py-4 text-white md:order-none'}>
						<p>{'Metaverse Sunset 700'}</p>
						<p className={'cursor-pointer hover:font-bold'} onClick={copyColor}>{'#EA5204'}</p>
						<p className={'cursor-pointer hover:font-bold'} onClick={copyColor}>{'234.82.4'}</p>
						<p>{'0.78.100.0'}</p>
						<p>{'Pantone 166c'}</p>
					</div>
					<div className={'order-[18] h-[160px] bg-disco-salmon-700 px-5 py-4 text-white md:order-none'}>
						<p>{'Disco Salmon 700'}</p>
						<p className={'cursor-pointer hover:font-bold'} onClick={copyColor}>{'#B71962'}</p>
						<p className={'cursor-pointer hover:font-bold'} onClick={copyColor}>{'183.25.98'}</p>
						<p>{'22.98.28.9'}</p>
						<p>{'Pantone 215c'}</p>
					</div>
					<div className={'order-[28] h-[160px] bg-tokyo-party-700 px-5 py-4 text-white md:order-none'}>
						<p>{'Tokyo Party 700'}</p>
						<p className={'cursor-pointer hover:font-bold'} onClick={copyColor}>{'#4F3398'}</p>
						<p className={'cursor-pointer hover:font-bold'} onClick={copyColor}>{'79.51.152'}</p>
						<p>{'85.88.0.0'}</p>
						<p>{'Pantone 7679c'}</p>
					</div>
					<div className={'order-[38] h-[160px] bg-up-only-green-700 px-5 py-4 text-white md:order-none'}>
						<p>{'Up Only Green 700'}</p>
						<p className={'cursor-pointer hover:font-bold'} onClick={copyColor}>{'#00796D'}</p>
						<p className={'cursor-pointer hover:font-bold'} onClick={copyColor}>{'0.121.109'}</p>
						<p>{'100.22.62.11'}</p>
						<p>{'Pantone 322c'}</p>
					</div>


					<div className={'order-[9] h-[160px] bg-metaverse-sunset-800 px-5 py-4 text-white md:order-none'}>
						<p>{'Metaverse Sunset 800'}</p>
						<p className={'cursor-pointer hover:font-bold'} onClick={copyColor}>{'#C73203'}</p>
						<p className={'cursor-pointer hover:font-bold'} onClick={copyColor}>{'199.50.3'}</p>
						<p>{'15.90.100.5'}</p>
						<p>{'Pantone 485c'}</p>
					</div>
					<div className={'order-[19] h-[160px] bg-disco-salmon-800 px-5 py-4 text-white md:order-none'}>
						<p>{'Disco Salmon 800'}</p>
						<p className={'cursor-pointer hover:font-bold'} onClick={copyColor}>{'#99104F'}</p>
						<p className={'cursor-pointer hover:font-bold'} onClick={copyColor}>{'153.16.79'}</p>
						<p>{'28.100.25.25'}</p>
						<p>{'Pantone 220c'}</p>
					</div>
					<div className={'order-[29] h-[160px] bg-tokyo-party-800 px-5 py-4 text-white md:order-none'}>
						<p>{'Tokyo Party 800'}</p>
						<p className={'cursor-pointer hover:font-bold'} onClick={copyColor}>{'#371F75'}</p>
						<p className={'cursor-pointer hover:font-bold'} onClick={copyColor}>{'55.31.117'}</p>
						<p>{'97.100.17.4'}</p>
						<p>{'Pantone 2685c'}</p>
					</div>
					<div className={'order-[39] h-[160px] bg-up-only-green-800 px-5 py-4 text-white md:order-none'}>
						<p>{'Up Only Green 800'}</p>
						<p className={'cursor-pointer hover:font-bold'} onClick={copyColor}>{'#016057'}</p>
						<p className={'cursor-pointer hover:font-bold'} onClick={copyColor}>{'1.96.87'}</p>
						<p>{'100.31.64.30'}</p>
						<p>{'Pantone 329c'}</p>
					</div>


					<div className={'order-[10] h-[160px] bg-metaverse-sunset-900 px-5 py-4 text-white md:order-none'}>
						<p>{'Metaverse Sunset 900'}</p>
						<p className={'cursor-pointer hover:font-bold'} onClick={copyColor}>{'#8F0000'}</p>
						<p className={'cursor-pointer hover:font-bold'} onClick={copyColor}>{'143.0.0'}</p>
						<p>{'22.100.100.31'}</p>
						<p>{'Pantone 187c'}</p>
					</div>
					<div className={'order-[20] h-[160px] bg-disco-salmon-900 px-5 py-4 text-white md:order-none'}>
						<p>{'Disco Salmon 900'}</p>
						<p className={'cursor-pointer hover:font-bold'} onClick={copyColor}>{'#6A0031'}</p>
						<p className={'cursor-pointer hover:font-bold'} onClick={copyColor}>{'106.0.49'}</p>
						<p>{'34.100.42.53'}</p>
						<p>{'Pantone 7421c'}</p>
					</div>
					<div className={'order-[30] h-[160px] bg-tokyo-party-900 px-5 py-4 text-white md:order-none'}>
						<p>{'Tokyo Party 900'}</p>
						<p className={'cursor-pointer hover:font-bold'} onClick={copyColor}>{'#120040'}</p>
						<p className={'cursor-pointer hover:font-bold'} onClick={copyColor}>{'18.0.64'}</p>
						<p>{'100.99.39.55'}</p>
						<p>{'Pantone 275c'}</p>
					</div>
					<div className={'order-[40] h-[160px] bg-up-only-green-900 px-5 py-4 text-white md:order-none'}>
						<p>{'Up Only Green 900'}</p>
						<p className={'cursor-pointer hover:font-bold'} onClick={copyColor}>{'#003934'}</p>
						<p className={'cursor-pointer hover:font-bold'} onClick={copyColor}>{'0.57.52'}</p>
						<p>{'100.44.68.64'}</p>
						<p>{'Pantone 3308c'}</p>
					</div>

				</div>
			</ContentCard>

		</section>
	);
}

export default Colors;
