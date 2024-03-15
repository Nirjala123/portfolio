import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { IPanel } from "../redux/reducers/slices/panalSlice";
import { RootState } from "../redux/store/store";

const Projects = () => {
  const [panel, setPanel] = useState("panel-1");

  const panelInfo = useSelector((state: RootState) => state.panel);

  const currentPanel = panelInfo.find((p: IPanel) => p.name === panel);
  return (
    <>
      <section id="tabs">
        <div className="container relative mx-auto my-6 mb-32 mt-12 px-6">
          <div className="bg-tabs"></div>

          <div className="flex flex-col justify-center max-w-xl mx-auto mb-6 border-b md:space-x-10 md:flex-row">
            <div
              onClick={() => setPanel("panel-1")}
              className="flex justify-center text-center text-gray-600 border-b md:border-b-0 hover:text-softRed md:w-1/3 tab cursor-pointer"
            >
              <div
                className={`py-5 ${
                  panel === "panel-1" && "border-softRed border-b-4"
                }`}
              >
                Task Manager
              </div>
            </div>

            <div
              onClick={() => setPanel("panel-2")}
              className="flex justify-center text-center text-gray-600 border-b md:border-b-0 hover:text-softRed md:w-1/3 tab cursor-pointer"
            >
              <div
                className={`py-5 ${
                  panel === "panel-2" && "border-softRed border-b-4"
                }`}
              >
                Move the Zoo
              </div>
            </div>

            <div
              onClick={() => setPanel("panel-3")}
              className="flex justify-center text-center text-gray-600 border-b md:border-b-0 hover:text-softRed md:w-1/3 tab cursor-pointer"
            >
              <div
                className={`py-5 ${
                  panel === "panel-3" && "border-softRed border-b-4"
                }`}
              >
                Logs Analysis
              </div>
            </div>
          </div>

          {currentPanel && (
            <div id="panels" className="container mx-auto">
              <div className="flex flex-col py-5 md:flex-row md:space-x-7 panel panel-1">
                <div className="flex justify-center md:w-1/2">
                  <img
                    src={currentPanel.image}
                    alt=""
                    className="relative z-10"
                  />
                </div>

                <div className="flex flex-col space-y-8 md:w-1/2">
                  <h3 className="mt-14 text-3xl font-semibold text-center md:mt-0 md:text-left">
                    {currentPanel.heading}
                  </h3>
                  <p className="max-w-md text-center text-grayishBlue md:text-left">
                    {currentPanel.description}
                  </p>
                  <div className="mx-auto md:mx-0">
                    <Link
                      to={currentPanel.githubLink}
                      className="px-6 py-3 mt-4 font-semibold text-white border-2 border-white rounded-lg md:inline-flex bg-softBlue hover:bg-white hover:text-softBlue hover:border-softBlue hover:border-2"
                    >
                      GitHub
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Projects;
