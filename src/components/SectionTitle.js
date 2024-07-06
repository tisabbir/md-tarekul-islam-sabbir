

const SectionTitle = ({heading, subheading}) => {
    return (
        <div className="text-center space-y-6 p-6">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-[#8750F5]">{heading}</h1>
            <p className="text-lg md:text-2xl text-[#2A1454] max-w-2xl mx-auto">{subheading}</p>
        </div>
    );
};

export default SectionTitle;