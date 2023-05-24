import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react';
import Link from 'next/link';

const Home = () => {

  const [data, setData] = useState('');
  
  const names = ['Nubaha Bhuiyan', 
                'Janet H. Clarke (University Libraries)', 
                'Julie Huang (College of Business)', 
                'Susie Hwang (Psychology)', 
                'Shakir Islam (Web Design Intern)', 
                'Trista Y. Lu (Office of Global Affairs)',
                'Javeria Mubarik (Web Design Intern)',
                'Eva Nagase (Asian and Asian American Studies)',
                'Caterina Reed (University Libraries)',
                'Kaitlyn Seitz (Career Center)',
                'Shyam Sharma (Program in Writing and Rhetoric)',
                'E.K. Tan (Asian and Asian American Studies and English)',
                'Benjamin Tausig (Music)',
                'Chang Yan (Social Media Intern)'
              ]

    const sentences = [
                        'Acknowledge and celebrate the diversity of the AAPI SBU academic community.',
                        'Foster community and belongingness for AAPI students at SBU.',
                        'Help AAPI students reach their educational and life goals.',
                        'Nurture the next generation of AAPI leaders.',
                        'Address prejudice and bias against AAPI community in the broader society.',
                      ]

    const quotes = [
      {
        "quote": "My mentor was instrumental in helping me choose and realize my career path.", 
        "from": "Georges Furon's Mentor",
        "image": "url",
      },
      {
        "quote": "My mentor was instrumental in helping me choose and realize my career path.", 
        "from": "Georges Furon's Mentor",
        "image": "url",
      },
      {
        "quote": "My mentor was instrumental in helping me choose and realize my career path.", 
        "from": "Georges Furon's Mentor",
        "image": "url",
      },
      {
        "quote": "My mentor was instrumental in helping me choose and realize my career path.", 
        "from": "Georges Furon's Mentor",
        "image": "url",
      }
    ]

  let url = 'https://you.stonybrook.edu/aapimentorship/wp-json/wp/v2/posts';

  useEffect(() => {
    //fetch(url).then(res=>res.json()).then(data=>setData(data)).then(console.log(data))
  },[])

  return (
    <div className="flex flex-col font-Main text-[#171717] bg-[#f1f1f1] overflow-x-hidden">
      <Head>
        <title>SBU AAPI</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
{/**/}
      <main className="flex flex-col w-full">
        <div className='w-full bg-[#ffffff] h-screen flex justify-center'>
          <div className='flex flex-col w-screen'> 
            
            <div className='flex self-center justify-between w-11/12 pt-6'>
            
              <div className='flex'>
                <div className='flex mr-8 font-Main'>
                  {/*<img src='https://you.stonybrook.edu/aapimentorship/files/2023/01/AAPI-1.png' className='w-32'/>*/}
                  {/*<h1 className="self-center text-lg font-black text-[#171717] font-Main">AAPI Mentorship</h1>*/}
                  <img src='logog.png' className='w-16'/>
                </div> 
                {/*menu bar*/}
                {/** nav bar */}
                <div className="flex items-center text-[#171717] font-Main text-md font-medium">
                  <Link href='../../'>
                    <h1 className=" hover:text-[#800000] transition-all font-Main">Home</h1>
                  </Link>

                  <Link href='/about'>
                    <h1 className="mx-12 hover:text-[#800000] transition-all font-Main">About Us</h1>
                  </Link>

                  <Link href='/events'>
                    <h1 className="hover:text-[#800000] transition-all font-Main mr-12">Events</h1>
                  </Link>

                  <Link href='/resources'>
                    <h1 className="hover:text-[#800000] transition-all font-Main">Resources</h1>
                  </Link>  
                </div>
                
              </div>
              {/*social media icons*/}
              <div className='flex items-center'>
                <div className='flex items-center mr-4'>
                  <Link href=''>
                    <svg className='mr-3 text-black' stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg"><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path></svg>
                  </Link>
                  <Link href='https://www.instagram.com/aapi_mentorship_sbu/'>
                    <svg className='text-black' stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="2.5em" width="2.5em" xmlns="http://www.w3.org/2000/svg"><path d="M512 378.7c-73.4 0-133.3 59.9-133.3 133.3S438.6 645.3 512 645.3 645.3 585.4 645.3 512 585.4 378.7 512 378.7zM911.8 512c0-55.2.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165zM512 717.1c-113.5 0-205.1-91.6-205.1-205.1S398.5 306.9 512 306.9 717.1 398.5 717.1 512 625.5 717.1 512 717.1zm213.5-370.7c-26.5 0-47.9-21.4-47.9-47.9s21.4-47.9 47.9-47.9 47.9 21.4 47.9 47.9a47.84 47.84 0 0 1-47.9 47.9z"></path></svg>
                  </Link>
                </div>
                <Link href=''>
                  <h1 className="font-semibold hover:text-[#000000] transition-all font-Main py-2 w-32 text-white bg-[#862a20] rounded-md text-center">Contact Us</h1>
                </Link>
              </div>  

            </div>

            <div className='flex self-center w-11/12 h-full mt-4'>
              <div className='flex flex-col justify-center w-3/5'>
                <h1 className='font-Main font-bold text-8xl text-[#131313]'><a className='text-transparent text-8xl bg-clip-text bg-gradient-to-l from-[#9d4137] to-[#64261f]'>AAPI</a> Mentorship<br/> Network</h1>
                {/*<h1 className='mt-2 text-3xl font-bold font-Main'>at Stony Brook University</h1>*/}
                <h1 className='w-4/5 mt-8 ml-2 text-3xl font-Main'>Acknowledging and celebrating the diversity of the AAPI SBU academic community.</h1>
                <div className='flex mt-8'>
                  <Link href=''>
                    <h1 className="font-semibold hover:text-[#000000] transition-all font-Main py-3 px-16 mr-2 text-white bg-[#862a20] rounded-md text-center">Events</h1>
                  </Link>
                  <Link href='https://stonybrook.campuslabs.com/engage/organization/aapimentoring'>
                    {/*sbengaged*/}
                    <h1 className="font-semibold hover:text-[#800000] transition-all font-Main py-3 px-16 text-[#862a20] bg-[#ffffff] border border-[#862a20] rounded-md text-center">SBEngaged</h1>
                  </Link>
                </div>
              </div>
              <div className='w-2/5 flex items-center rounded-full bg-gradient-to-br from-[#d26c61] to-[#862a20] rotate-[35deg] mr-4'>
                <img src='limg.jpg' className='rounded-3xl z-10 -rotate-[35deg] shadow-2xl'/>
                {/*<div className='flex flex-col absolute translate-y-48 translate-x-8 rounded-md -rotate-[35deg] z-20 bg-gradient-to-br from-[#fff] to-[#e4e4e4] shadow-2xl'>
                  <div className='bg-[#dfdfdf] h-6 rounded-t-md flex items-center'>
                    <h1 className='pl-6 text-2xl text-[#868686]'>○ ○ ○</h1>
                  </div>
                  <div className='flex flex-col'>
                    <h1 className='w-full px-6 pt-3 pb-2 font-bold font-Main'>Next Event</h1>
                    <h1 className='px-6 pb-4'>February 3rd, 2023 | 6:00 PM – 8:00 PM | SAC 169<br/>Origimai Night</h1>
                  </div>
                </div>*/}
              </div>
            </div>

          </div>
        </div>
          {/*bottom half of main page*/}
        <div className='bg-[#e3e3e3] flex text-[#2b2b2b]'>
          <div className='flex flex-col w-6/12 m-16 mt-0'>
            <h1 className='my-16 text-5xl font-bold'>The <a className='text-[#d26c61]'>AAPI Mentorship Network</a> @SBU was established to</h1>
            <img className='shadow-xl rounded-2xl' src='limg.jpg'/>
          </div>
          <div className='flex flex-col justify-center mr-16'>
            {sentences.map((s,i) => (
              <div className='my-4 bg-[#ffffff] p-6 rounded-lg text-lg font-medium shadow-lg'>
                <h1>{s}</h1>
              </div>
            ))}
          </div>
        </div>

            {/*Quotes*/}
          <div>
            <div className='flex items-center justify-center mt-16'>
              {quotes.map((q,i) => (
                <div className='flex flex-col items-center justify-center w-6/12 m-16 mt-0 bg-[#e3e3e3] p-4 rounded-lg'>
                  <h1 className='text-lg font-bold'>"{q.quote}"</h1>
                  <h1 className='text-sm mt-2'>- {q.from}</h1>
                </div>
              ))}
            </div>
          </div>

          <div className='bg-[#cccccc] text-center text-[#000] font-light py-8'>AAPI Mentorship Network @SBU 2023</div>

      </main>
    </div>
  )
}

export default Home
