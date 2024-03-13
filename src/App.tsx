import { useQuery } from "@tanstack/react-query";
import agentImage from "./assets/images/Frame_12-removebg-preview.png";
import headerImage from "./assets/images/headerImage.png";
import MaxWidthWrapper from "./components/MaxWidthWrapper";
import NavBar from "./components/NavBar";
import SvgArrow from "./components/SvgArrow";
import { getInfo } from "./services/getInfo";

function App() {
  const query = useQuery({ queryKey: ["layoutInfo"], queryFn: getInfo });

  return (
    <main className="relative flex min-h-screen flex-col bg-green  ">
      <NavBar navItems={query.data?.nav} />
      <div className="flex-1 flex-grow">
        <MaxWidthWrapper className="md:h-80 ">
          <div className="grid md:grid-cols-2 pt-[8%] min-h-screen md:min-h-fit">
            <div className="w-full flex items-center flex-col md:items-start">
              {query.isSuccess && (
                <h1
                  className="text-3xl text-center max-w-[250px] md:text-start font-workSans md:font-workSansSemiBold md:text-5xl 2xl:text-7xl md:max-w-[430px] 2xl:max-w-[560px] leading-snug 2xl:leading-tight text-softGreen"
                  dangerouslySetInnerHTML={{
                    __html: query.data?.home["header-title"],
                  }}
                />
              )}

              {/* call to action button */}
              <button className="w-64 h-12 md:w-72 md:h-14 relative 2xl:w-[470px] 2xl:h-16 2xl:mt-10">
                <div className="justify-center absolute items-center gap-3 2xl:gap-6 z-10 flex  bg-softGreen w-full h-full">
                  <div className="rounded-full bg-purple w-9 h-9 overflow-hidden">
                    <img
                      src={agentImage}
                      alt="agent image"
                      className="w-full h-full object-contain object-center"
                    />
                  </div>
                  <span className="text-sm md:text-xl font-workSansSemiBold 2xl:text-2xl  text-green">
                    {query.data?.home["header-cta"]}
                  </span>
                </div>
                <div className="w-full h-full bg-purple absolute -right-1.5 top-8 md:-right-2 md:top-10 2xl:top-12 2xl:-right-4"></div>
              </button>
            </div>

            <div className="mt-20 md:mt-0">
              {/* ticket */}
              <div className="flex relative w-full md:absolute md:right-[32%] md:top-[12%] md:w-[340px] 2xl:w-[415px] 2xl:h-[190px] 2xl:top-[13%] h-[150px] z-10 md:ticketBgClip bg-white">
                <div className="h-full w-10 bg-softYellow flex items-center justify-center 2xl:w-14">
                  <p className="transform -rotate-90 w-fit font-workSansSemiBold text-lg text-green 2xl:text-xl">
                    COVERED
                  </p>
                </div>
                <div className="w-12 h-12 2xl:h-14 2xl:w-14 flex items-center justify-center bg-softGreen rounded-full absolute left-[21%] top-[15%] md:left-[25%] md:top-[16%]">
                  <span className="font-workSansMedium text-lg 2xl:text-xl text-green">
                    $
                  </span>
                </div>
                <div className="w-full h-full justify-center flex-col absolute left-[9%] top-[8%] 2xl:top-[8%] 2xl:left-[10%] items-center flex -ml-8">
                  <span className="font-workSansExtraBold text-5xl text-green 2xl:text-7xl">
                    500k
                  </span>
                  <span className="font-workSansMedium text-lg text-green 2xl:text-2xl">
                    $10.99 / month
                  </span>
                </div>
              </div>

              <div className="w-full h-[230px] bg-softYellow md:hidden">
                <div className="w-full flex flex-col justify-center items-center">
                  <div className="w-1 h-10 bg-purple"></div>
                  <SvgArrow />
                </div>

                <div className="flex flex-col justify-center items-center w-full pt-4 gap-4">
                  <h3 className="text-green font-inter font-bold text-xl">
                    TechCrunch
                  </h3>
                  <h3 className="text-green font-dmSerif text-2xl ">Forbes</h3>
                  <h3 className="text-green font-dmSerif text-xl ">
                    THE WALL STREET JOURNAL
                  </h3>
                </div>
              </div>
            </div>

            {/* background right element */}
            <div className="w-full h-72 md:flex flex-col justify-end items-center bg-purple md:absolute md:right-0 md:top-0 md:w-2/4 md:h-full md:purpleBgClip">
              <img
                src={headerImage}
                alt="header image"
                className="md:hidden w-full h-full object-cover object-center"
              />
            </div>

            {/* image right element desktop */}
            <img
              src={headerImage}
              alt="header image"
              className="hidden md:block h-[85%] w-[50%] object-cover absolute right-0 bottom-0 object-center z-20"
            />

            {/* bottomElement */}
            <div className="hidden md:block w-[55.5%] h-[340px] 2xl:h-[400px] z-30  bg-softYellow bottomBgClip absolute bottom-0 left-0">
              <div className="w-[40%] h-[50%] absolute bottom-[18%] left-0 bg-purple bottomBgClip"></div>
              <div className="relative w-full h-full">
                <div className="absolute bottom-[13%] left-[59%] 2xl:left-[67.3%]">
                  <SvgArrow />
                </div>
                <div className="absolute bottom-[24%] left-0 h-1 w-3/5 bg-purple 2xl:bottom-[25%] 2xl:w-[68%]"></div>
                <div className="absolute bottom-[16%] left-[60%] h-8 w-1 bg-purple 2xl:left-[68%] 2xl:h-10 "></div>
              </div>

              {/* text bottom element */}
              <span className="flex absolute bottom-0 left-0 w-full justify-between pl-20 py-2 pr-28">
                <h3 className="text-green font-inter font-bold text-xl 2xl:text-2xl">
                  TechCrunch
                </h3>
                <h3 className="text-green font-dmSerif text-2xl 2xl:text-3xl">
                  Forbes
                </h3>
                <h3 className="text-green font-dmSerif text-xl 2xl:text-2xl">
                  THE WALL STREET JOURNAL
                </h3>
              </span>
            </div>
          </div>
        </MaxWidthWrapper>
      </div>
    </main>
  );
}

export default App;
