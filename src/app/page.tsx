export default function Home() {
  return (
    <div className="min-h-screen  flex flex-col">
      {/* Header section with background image */}
      <div
        className="relative h-screen w-full flex justify-start items-start pt-28 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/yy.JPG')" }}
      >
        <div className="content pl-[140px] pt-6 bg-opacity-0">
          <h1 className="text-6xl font-extrabold text-[rgb(14,12,1)] text-left drop-shadow-md mb-6">
            WK Beauty Salon
          </h1>
          <p className="text-[18px] font-[400] text-[rgb(12,11,0)] leading-relaxed w-1/2 mb-6">
            Experience elegance and expert care at WK Beauty Salon. Let our
            skilled professionals enhance your beauty, leaving you radiant and
            refreshed.
          </p>
          <button className="bg-[rgba(39,30,2,0.896)] text-[rgb(188,176,138)] font-bold px-10 py-4 rounded shadow-lg hover:bg-white hover:text-[rgb(114,52,52)] transition-all">
            We're Booking Now
          </button>
        </div>
      </div>
    </div>
  );
}
