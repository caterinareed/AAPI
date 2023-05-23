import Head from 'next/head'
import Image from 'next/image'
import {useState, useEffect} from 'react'
import Nav from '../components/NavBar'
import Link from 'next/link'

const Home = () => {

const [data, setData] = useState('');

return (
	<div className='flex flex-col'>
		<Nav/>
		<div className='flex flex-col items-center self-center w-11/12 font-Main'>
			<div>

			<div className='flex flex-col items-center justify-center p-1 my-4 bg-[#e39090] rounded-lg'> 
                        <h1 className='my-16 text-5xl font-bold'>Mentor/Mentee <a className='text-[#d26c61]'></a><a className='text-[#d26c61]'>Resources</a></h1>
                    </div>
				<p>The AAPI Mentorship Network @SBU was established to connect Stony Brook University’s AAPI students to faculty and staff mentors who are committed to help this student body excel in a variety of areas, including academic skills, confidence and leadership skills, work/study-life balance, social and racial justice, service and community work, teamwork and people skills, career planning and networking, and research and scholarship skills. Student mentees should also seek to take advantage of the unique expertise of the mentor they’re working with. This page provides some guidelines for student mentees and mentors.</p>				

				<br/><br/>
				<b><a className='text-[#d26c61]'>SUPPORT AREAS</a></b> <br/>

				Based on mentee’s interest and the mentor’s time and expertise

				Academic skills (reading/writing/research strategies, study skills, academic culture, etc)

				Leadership related skills (confidence building, public speaking/presentation, people skills)

				Life-work balance (managing stress, time, information; health &amp; wellbeing; mindfulness)

				Social justice (anti-racism, gender equality, LGBT justice): advocacy, allyship, activism

				Intercultural awareness, communication skills

				Service and community connection/involvement (on and off campus)

				Career planning (interviewing skills, networking skills, web portfolio, etc)

				Research/scholarship project (independent research, presentation, publication)
				<h2><b>
					
				<br/><a className='text-[#d26c61]'>GUIDELINES FOR MENTEES</a></b></h2>
				<ul style={{lineHeight: '1.2', paddingLeft: 20, textIndent: -20}}>
					<li></li>
					<li>   ◦ Take initiative to connect with your mentor and to maintain regular connection.</li>
					<li>   ◦ Learn about your mentor’s expertise, as you share your own talents, interests, and needs.</li>
					<li>   ◦ Establish time and mode of connection, sharing requests/agenda in advance.</li>
					<li>   ◦ Be prepared, be polite, and be invested; you’ll reap what you sow in commitment.</li>
					<li>   ◦ Take and save notes, requesting for additional resources/readings.</li>
					<li>   ◦ Use mentoring meetings as milestones, setting goals and reporting back what you did.</li>
					<li>   ◦ Seek feedback on your work, discuss options/pathways, and draw perspectives.</li>
					<li>   ◦ Lead the conversation, raise issues, and ask questions; don’t be passive.</li>
					<li>   ◦ Have realistic expectations; value what the experience offers you; show gratitude.</li>
					<li>   ◦ Mentorship can be fulfilling to both parties; do your part to make it meaningful.</li>
					<li>   ◦ Use the mentor’s expertise to find answers to tough questions.</li>
					<li>   ◦ Share your strengths, as well as anxieties, inspiring your mentor to inspire you back.</li>
				</ul> <br/><br/> 
				<a className='text-[#d26c61]'>
					<div className='border'>Mentorship is a two-way street, and it works best when you take ownership, reaching out regularly and striving to maintain a professional relationship (with a personal touch) with your mentor. Be realistic about, adapt to, and optimize the time and energy available. The program will also organize regular mentoring open houses, where you can benefit from connections with multiple mentors and other students. These and other events, done in person and/or virtually, will include featured speakers, small-group discussions, and socialization and networking. Join these meetings.</div>
				</a>	

				<h2><b>
					
				<br/> <a className='text-[#d26c61]'>GUIDELINES FOR MENTORS</a></b></h2>
				<ul  style={{lineHeight: '1.2', paddingLeft: 20, textIndent: -20}}>
					<li>   ◦ Use the mentorship agreement form to set some clear expectations, including about a meeting schedule. Also encourage your mentee to reach out as needed. Clearly convey and mutually agree on how much time you can spare and how you can help.</li>
					<li>   ◦ Use the mentorship agreement form to set some clear expectations, including about a meeting schedule. Also encourage your mentee to reach out as needed. Clearly convey and mutually agree on how much time you can spare and how you can help.</li>
					<li>   ◦ Guide your mentee to write the personal vision statement and SMART goals. Helap them review progress at semester’s/year’s end.</li>
					<li>   ◦ One meeting a month, and it could be during your office hours, is recommended.</li>
					<li>   ◦ Ask/learn about your mentee’s interests and talents, anxieties and challenges.</li>
					<li>   ◦ Share your expertise, experiences, and stories--including successes and failures.</li>
					<li>   ◦ Provide or point to resources and help to prioritize and commit to an aspiration, to opportunities for involvement and leadership at SBU and beyond. Offer to review mentee’s resumes and cover letters, do mock interviews, help prepare for their interviews.</li>
					<li>   ◦ Pick and prioritize goals; write them down; review them at semester’s/year’s end.</li>
					<li>   ◦ Join the mentoring open house sessions; email any questions to the coordinator.</li>
					<li>   ◦ Observe confidentiality and trust in this relationship. Set boundaries on topics you are willing to discuss, time you will commit to the mentee.</li>
					<li>   ◦ Commit to being a mentor for at least one year. Respond to brief assessment surveys and report any disruption/discontinuation.</li>
				</ul>
				<br/><br/>
			</div>
		</div>
		<div className='bg-[#cccccc] text-center text-[#000] font-light py-8'>AAPI Mentorship Network @SBU 2023</div>
    </div>
)
}

export default Home