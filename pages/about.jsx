import Head from 'next/head'
import Image from 'next/image'
import NavBar from '../components/NavBar'

const Home = () => {

    

    return (
        <div className='flex flex-col'>
            <NavBar/>
            <div></div>
            <div className='flex flex-col items-center self-center w-11/12 font-Main'>
                <div>
                <div className='flex flex-col items-center justify-center p-1 my-4 bg-[#e39090] rounded-lg'> 
                        <h1 className='my-16 text-5xl font-bold'>About <a className='text-[#d26c61]'></a><a className='text-[#d26c61]'>Us</a></h1>
                    </div>
                    <h1 className='my-16 text-5xl font-bold'>Our <a className='text-[#d26c61]'></a><a className='text-[#d26c61]'>History</a></h1>

                    <span style={{fontWeight: 400}}>The AAPI Mentorship Network @SBU was established to connect Stony Brook University’s Asian, Asian American, and Pacific Islander students to faculty and staff mentors. Mentors are committed to helping this student body excel in a variety of areas, including academic skills, confidence and leadership skills, work/study-life balance, social and racial justice, service and community work, teamwork and people skills, career planning and networking, and research and scholarship skills. Student mentees can benefit from the unique expertise of the mentor they’re working with especially if they take the initiative. This website provides some guidelines and expectations for student mentees and mentors. </span>

                    <span style={{fontWeight: 400}}>This Mentorship Network is about seeing each AAPI student as more than a generic student; it’s about supporting AAPI students who come from different backgrounds, have diverse challenges and talents and aspirations, and to help them grow and succeed as well-rounded persons. </span>
                    <h1 className='my-16 text-5xl font-bold'>Who <a className='text-[#d26c61]'></a><a className='text-[#d26c61]'>We Are</a></h1>
                    <span style={{fontWeight: 400}}>With racism and anti-Asian violence on the rise all around us, this is an urgent moment to proactively reach out and support SBU’s diverse Asian, Asian American, and Pacific Islander (AAPI) students. The AAPI Mentorship Network @ SBU was started by a group of faculty whose goal was to uplift the diversity of our academic community, and to help AAPI students thrive at SBU and feel a genuine sense of belonging on Long Island and surrounding areas.  By building a robust support network and a community, we aim to help AAPI students reach their educational and life goals.  </span>

                    &nbsp;
                    <br/><br/>
                    <b>AAPI Mentorship Network @SBU Organizing Committee</b>  <br/><br/>

                    <span style={{fontWeight: 400}}>Nubaha Bhuiyan (Social Media Intern)</span><br/><br/>

                    <span style={{fontWeight: 400}}>Janet H. Clarke (University Libraries)</span><br/><br/>

                    <span style={{fontWeight: 400}}>Julie Huang (College of Business)</span><br/><br/>

                    <span style={{fontWeight: 400}}>Susie Hwang (Psychology)</span><br/><br/>

                    <span style={{fontWeight: 400}}>Shakir Islam (Web Design Intern)</span><br/><br/>

                    <span style={{fontWeight: 400}}>Trista Y. Lu (Office of Global Affairs)</span><br/><br/>

                    <span style={{fontWeight: 400}}>Javeria Mubarik (Web Design Intern)</span><br/><br/>

                    <span style={{fontWeight: 400}}>Eva Nagase (Asian and Asian American Studies)</span><br/><br/>

                    <span style={{fontWeight: 400}}>Caterina Reed (University Libraries)</span><br/><br/>

                    <span style={{fontWeight: 400}}>Kaitlyn Seitz (Career Center)</span><br/><br/>

                    <span style={{fontWeight: 400}}>Shyam Sharma (Program in Writing and Rhetoric)</span><br/><br/>

                    <span style={{fontWeight: 400}}>E.K. Tan (Asian and Asian American Studies and English)</span><br/><br/>

                    <span style={{fontWeight: 400}}>Benjamin Tausig (Music)</span><br/><br/>

                    <span style={{fontWeight: 400}}>Chang Yan (Social Media Intern)</span><br/><br/>

                    &nbsp;

                    <span style={{fontWeight: 400}}>Partners</span>

                    <i><span style={{fontWeight: 400}}>Asian Pacific American Medical Student Association</span></i>

                    <i><span style={{fontWeight: 400}}>SB Origami Club</span></i>

                    <i><span style={{fontWeight: 400}}>Student Affairs</span></i>

                    <i><span style={{fontWeight: 400}}>Career Center</span></i>
                </div>
            </div>
            <div className='bg-[#cccccc] text-center text-[#000] font-light py-8'>AAPI Mentorship Network @SBU 2023</div>
        </div>
    )
}

export default Home