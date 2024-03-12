import { useQuery } from "@tanstack/react-query";
import headerImage from "./assets/images/headerImage.png";
import MaxWidthWrapper from "./components/MaxWidthWrapper";
import NavBar from "./components/NavBar";
import { getInfo } from "./services/getInfo";

function App() {
  const query = useQuery({ queryKey: ["layoutInfo"], queryFn: getInfo });

  return (
    <main className="relative flex min-h-screen flex-col bg-green">
      <NavBar navItems={query.data?.nav} />
      <div className="flex-1 flex-grow">
        <MaxWidthWrapper className="h-80">
          <div className="grid grid-cols-2 pt-[8%]">
            <div>
              {query.isSuccess && (
                <h1
                  className="font-workSans font-semibold text-5xl max-w-[450px] leading-snug text-softGreen"
                  dangerouslySetInnerHTML={{
                    __html: query.data?.home["header-title"],
                  }}
                />
              )}
              <button className="w-72 h-14 relative">
                <div className="justify-center absolute items-center gap-3 z-10 flex text-xl bg-softGreen w-72 h-14">
                  <div className="rounded-full bg-purple w-9 h-9"></div>
                  {query.data?.home["header-cta"]}
                </div>
                <div className="w-72 h-14 bg-purple absolute -right-2 top-10"></div>
              </button>
            </div>
            <div className="flex flex-col justify-end items-center bg-purple absolute right-0 top-0 max-w-2xl h-full purpleBgClip">
              <img
                src={headerImage}
                alt="header image"
                className="h-[80%] w-full object-cover object-center"
              />
            </div>
          </div>
        </MaxWidthWrapper>
      </div>
    </main>
  );
}

export default App;
