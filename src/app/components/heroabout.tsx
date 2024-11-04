export default function HeroAbout() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-500 text-black text-center"> 
            <h1 className="text-3xl font-bold mb-4">About Me</h1>
            <p className="mb-8">
                Welcome to my portfolio! I 'm a passionate developer with a love for creating intuitive and dynamic user experiences.
            </p>
            <div className="flex justify-center gap-8 mt-8 flex-wrap"> {/* Added flex-wrap for responsiveness */}
                <div className="bg-white border border-gray-300 rounded-lg shadow-md p-6 w-64">
                    <h2 className="text-xl font-semibold mb-2">Skills</h2>
                    <p>JavaScript, React, Node.js, CSS, HTML</p>
                </div>
                <div className="bg-white border border-gray-300 rounded-lg shadow-md p-6 w-64">
                    <h2 className="text-xl font-semibold mb-2">Projects</h2>
                    <p>Check out my projects on GitHub and see what I've been working on!</p>
                </div>
                <div className="bg-white border border-gray-300 rounded-lg shadow-md p-6 w-64">
                    <h2 className="text-xl font-semibold mb-2">Contact</h2>
                    <p>Feel free to reach out to me via email or connect with me on LinkedIn.</p>
                </div>
            </div>
        </div>
    );
}
