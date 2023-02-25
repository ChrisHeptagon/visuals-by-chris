import Image from 'next/image'

export function HeroSection() {  
    return (
        <HeroComponent mainBackground="/images/hero-test.png" headerText="Visuals By Chris" caption="I'm a visual designer and photographer based in the heart of New York City. I specialise in creating unique and engaging content for brands and businesses."        
        
        links={[{text: 'Contact Me', url: '/contact', buttonColor:'#ffbb00'}, { text: 'Download CV', url: '/cv', buttonColor:'#ffbb00'
    }, { text: 'View Portfolio', url: '/portfolio', buttonColor:'#ffbb00' }]} secondaryBackground="images/gradient-hero-1.png"/>
    ) 
}


export function HeroComponent({ mainBackground, headerText, caption, links, secondaryBackground }:{ mainBackground: string, headerText: string, caption: string, links: {text: string, url: string, buttonColor: string}[], secondaryBackground?: string }) {  
    return (
        <section className="py-24 min-h-[75vh]" style={{backgroundImage: `url(${mainBackground})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
    <div className="mx-auto max-h-fit max-w-fit p-[100px] my-[25vh] rounded-full " style={{backgroundImage: `url(${secondaryBackground})`, backgroundSize: 'cover', backgroundPosition: 'center' }} >
        <div className="mx-auto text-left md:w-11/12 xl:w-9/12 md:text-center">
            <h1 className="mb-8 text-4xl font-extrabold leading-none tracking-normal text-[white] md:text-6xl md:tracking-tight">
                {headerText}
                <span className="shadow-md"></span>
            </h1>
            <p className="mb-8 text-lg text-[white] font-bold md:text-xl">
                {caption}
            </p>
            <div className="mb-4 space-x-0 md:space-x-2 md:mb-8">
                {links.map((link, index) => (
                <a href={link.url} key={index} className={`inline-flex border items-center justify-center w-full px-6 py-3 mb-2 text-lg text-white bg-[${link.buttonColor}] rounded-2xl sm:w-auto sm:mb-0`}>
                    {link.text}
                </a>
                ))}
            </div>
            </div>
        </div>
</section>
    ) 
}