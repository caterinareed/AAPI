import Head from 'next/head'
import { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'

const Events = () => {

    const [events, setEvents] = useState([])

    // array of strings
    
    const sentences = [
        {
            "title": "Sandy Kim author event (Asian Studies + English)",
            "description": "",
            "time": "March 8th, 2023  | 1:00 PM | Poetry Center"
        },
        {
            "title": "Mentor Lunch",
            "description": "",
            "time": "March 28th, 2023  | 12:00 PM-1:00 PM | TBA"
        },
        { 
            "title": "Mentor Happy Hour",
            "description": "",
            "time": "April 13th, 2023  | Hours TBA | TBA",
        },
        {
            "title": "AAPI Graduation Celebration",
            "description": "",
            "time": "April 25th, 2023  | 12:00 PM-1:30 PM | Union Ballroom",
        },
    ]

    useEffect(() => {
        
        fetch('https://you.stonybrook.edu/aapimentorship/wp-json/wp/v2/pages/')
        .then(res => res.json()) 
        .then(data => setEvents(data))
        
    }, [])

    return (
        <div className='flex flex-col font-Main'>
            <Head>
                <title>AAPI SBU | Events</title>
            </Head>

            <NavBar/>

            <main className='flex flex-col self-center w-11/12'>
                <div>
                    {/*  theres an error one sec */}
                    
                    {/**stupid AI */}

                    
                    <div className='flex flex-col items-center justify-center p-1 my-4 bg-red-300 rounded-lg'> 
                        <h1 className='my-16 text-5xl font-bold'>AAPI <a className='text-[#d26c61]'></a><a className='text-[#d26c61]'>Events</a></h1>
                    </div>
                    <b><a className='text-[#d26c61]'>Wonderful ways to celebrate and support the diversity of Asian and Asian American heritages, experiences, research, and creativity. Please join us!</a></b> <br/>
                    
                    {sentences.map((event, index) => (
                        <div className='p-4 my-4 bg-[#eaeaea] rounded-md' key={index}> 
                            <h1>{event.title}</h1>
                            <p>{event.description}</p>
                            <p>{event.time}</p>
                        </div>
                    ))}
                    
                </div>
            </main>
        </div>
    )
}

export default Events