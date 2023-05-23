import Link from 'next/link'

function NavBar() {
  
      return (
        <div className='flex justify-center'>
          <div className='flex justify-between w-11/12 pt-6'> 
            
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
                <Link href='https://www.instagram.com/aapi_mentorship_sbu/?igshid=YmMyMTA2M2Y%3Dhttps://stonybrook.campuslabs.com/engage/organization/aapimentoring'>
                  <svg className='text-black' stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="2.5em" width="2.5em" xmlns="http://www.w3.org/2000/svg"><path d="M512 378.7c-73.4 0-133.3 59.9-133.3 133.3S438.6 645.3 512 645.3 645.3 585.4 645.3 512 585.4 378.7 512 378.7zM911.8 512c0-55.2.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165zM512 717.1c-113.5 0-205.1-91.6-205.1-205.1S398.5 306.9 512 306.9 717.1 398.5 717.1 512 625.5 717.1 512 717.1zm213.5-370.7c-26.5 0-47.9-21.4-47.9-47.9s21.4-47.9 47.9-47.9 47.9 21.4 47.9 47.9a47.84 47.84 0 0 1-47.9 47.9z"></path></svg>
                </Link>
              </div>
              <Link href='https://you.stonybrook.edu/aapimentorship/contact-us/'>
                <h1 className="font-semibold hover:text-[#000000] transition-all font-Main py-2 w-32 text-white bg-[#862a20] rounded-md text-center">Contact Us</h1>
              </Link>
            </div>  

          </div>
        </div>
      )
}

export default NavBar