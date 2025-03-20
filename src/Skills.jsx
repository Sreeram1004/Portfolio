import SectionWrapper from "./SectionWrapper";
const SkillBlock = ({ title, skills }) => (
  <div className="bg-gray-800 bg-opacity-80 rounded-lg shadow-lg p-6 text-center">
    <h2 className="text-3xl font-semibold text-blue-400 mb-4">{title}</h2>
    <div className="grid grid-cols-2 gap-6">
      {skills.map(({ name, logo }) => (
        <div key={name} className="flex flex-col items-center">
          <img src={logo} alt={name} className="w-16 h-16" />
          <h3 className="text-xl font-semibold text-white mt-2">{name}</h3>
        </div>
      ))}
    </div>
  </div>
);

const Skills = () => (
  <SectionWrapper id="skills">
    <h1 className="text-5xl font-bold text-center mb-8 text-black">Skills</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mt-6 w-full ">
      <SkillBlock title="Languages" skills={[{ name: "C++", logo: "https://cdn-icons-png.flaticon.com/128/13053/13053732.png" }, { name: "Java", logo: "https://cdn-icons-png.flaticon.com/128/152/152760.png" }, { name: "JavaScript", logo: "https://cdn-icons-png.flaticon.com/128/721/721671.png" }]} />
      <SkillBlock title="Frameworks" skills={[{ name: "Node.js", logo: "https://cdn-icons-png.flaticon.com/128/919/919825.png" }, { name: "React.js", logo: "https://cdn-icons-png.flaticon.com/128/10832/10832132.png" } ,{ name: "Tailwind CSS", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo4NWd7U9WhJy93utoP7li8o8-1WBTHA1mng&s" }]} />
      <SkillBlock title="Databases" skills={[{ name: "MongoDB", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0glSd8O-A-3WStCibxdPT0AW0yQtI9_YsB_a_u7z2EJmLxxTffAOH6u1StgdWcpovvYg&usqp=CAU"}, { name: "MySQL", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT74JuJCOo7bzVaTxbEGxjQ85UGSLZQMAYv-Q&s" }]}/>
       <SkillBlock title="Tools" skills={[{ name: "Git/GitHub", logo: "https://cdn-icons-png.flaticon.com/128/25/25657.png" },, { name: "Docker", logo: "https://cdn-icons-png.flaticon.com/128/5969/5969028.png" },{ name: "PostMan", logo: "https://mms.businesswire.com/media/20200721005126/en/761650/23/postman-logo-vert-2018.jpg" }]} />
    </div>
  </SectionWrapper>
);
export default Skills;