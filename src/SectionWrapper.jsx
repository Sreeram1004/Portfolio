
const SectionWrapper = ({ id, children }) => (
    <section id={id} className=" flex flex-col items-center justify-center bg-cover bg-center text-white p-8 m-2"  >
      <div className="bg-conic-90 shadow-2xl w-full bg-opacity-50 p-6 rounded-lg">{children}</div>
    </section>
  );
  export default SectionWrapper;