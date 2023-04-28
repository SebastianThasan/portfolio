const AboutMe = () => {

	const containerStyles = {
		display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
	}

    return (
        <div style={containerStyles}>
        	<h1>Introduction</h1>
			<text>My name is Sebastian Thasan, and I'm a junior studying Computer Science applied with Software Engineering at George Mason University. I'm looking for a software engineering internship for summer 2023.</text>
			<h1 style={{marginTop: '150px'}}>Education</h1>
			<text>Completed Relevant Classes:</text>
			<ul>
				<li>SWE 205 Software Usability Analysis and Designs</li>
				<li>CS 262 Low-level Programming</li>
				<li>CS 310 Data Structures</li>
				<li>CS 321 Software Engineering</li>
			</ul>
			<text>Current Classes</text>
			<ul>
				<li>CS 306 Synsthesis Law for Computer Professional</li>
				<li>SWE 419 Software Design Implementation</li>
				<li>SWE 432 Web Application Development</li>
				<li>CS 471 Operating Systems</li>
				<li>CS 483 Analaysis Algorithms</li>
			</ul>
			<h1 style={{marginTop: '150px'}}>Skills</h1>
			<ul>
				<li><b>Programming Languages:</b> Python, Java, C, JavaScript</li>
				<li><b>Frameworks/Libraries/Enviornments:</b> React, React Native, Node.js</li>
				<li><b>Programming Skills:</b> Object-Oriented Programming</li>
				<li><b>Software Enginnering Skills:</b> Agile, UI/UX design, CD/CD pipeline, (SDLC) Software Development Lifecycle</li>
				<li><b>Frontend Development:</b> HTML, CSS </li>
				<li><b>Backend Development:</b> Express </li>
				<li><b>Version Control:</b> Git, GitHub, GitLab</li>
			</ul>
        </div>
    )
}

export default AboutMe