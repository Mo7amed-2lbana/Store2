import { useState } from "react";
import { FaCartPlus } from "react-icons/fa6";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { AiOutlineClose } from "react-icons/ai";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const lists = ["Home", "Products", "Catigory", "Populer", "Cart", "Contact"];
  const styleList = { fontSize: "14px", borderRadius: "5px" };
  const { userData } = useSelector((state) => state.user);
  const [handleScreen, setHandleScreen] = useState(false);

  return (
    <>
      {/* start nav  */}
      <nav className="bg-[#26252B]">
        {/* start container div  */}
        <div className="container">
          {/* start parent div  */}
          <div className="parent border-b border-1 md:border-b-0 py-2 md:py-1 flex justify-between   items-center">

            {/* start logo div  */}
            <div className="logo me-[50px]">
              <h2 className=" md:mb-0 text-white text-[20px] font-semibold">
                St<span className="text-[#09c]">or</span>e
              </h2>
            </div>
            {/* end logo div  */}
            
            {/* start  bar and close icon  */}
            <div className="showHide md:hidden ms-auto cursor-pointer">
              {handleScreen ? (
                <AiOutlineClose
                  fontSize={"22px"}
                  onClick={() => setHandleScreen(false)}
                  className="text-white"
                />
              ) : (
                <HiMiniBars3BottomRight
                  fontSize={"22px"}
                  onClick={() => setHandleScreen(true)}
                  className="text-white"
                />
              )}
            </div>
            {/* end  bar and close icon  */}
 
            {/* large screen list      */}
            <ul className="navbar large  list-none hidden  md:flex  items-center py-2 me-2 gap-5">
              {lists.map((li) => (
                <>
                  <li
                    style={styleList}
                    className=" hover:text-[#eee] text-[#a2a2a2] py-[2.5px] cursor-pointer "
                  >
                    <NavLink to={li}>{li}</NavLink>
                  </li>
                </>
              ))}
            </ul>
            <div className="  flex flex-wrap-reverse ">
              {/* start search  */}
              <div className="search  hidden md:flex  me-3 mt-1    ">
                <form action="">
                  <input
                    type="text"
                    placeholder="Search to any Products"
                    className="w-full bg-transparent border border-1 border-[#a2a2a2] text-[14px]  focus:border-[#0C87A1] outline-none text-[#ccc] placeholder:text-[#a2a2a2] rounded-md  py-1 px-2"
                  />
                </form>
              </div>
              {/* end search  */}
              <div className="inputs large hidden md:flex items-center  justify-end">
                <FaCartPlus
                  fontSize={"18px"}
                  className="hover:text-[#0C87A1] cursor-pointer text-[#a2a2a2]"
                />
                {userData ? (
                  <NavLink
                    to={"logout"}
                    className={"ms-3 text-[#a2a2a2] hover:text-[#fff] text-[14px]"}
                  >
                    Logout
                  </NavLink>
                ) : (
                  <>
                    {" "}
                    <NavLink
                      to={"Login"}
                      className={"mx-3 text-[#a2a2a2] hover:text-[#fff] text-[14px]"}
                    >
                      Login
                    </NavLink>
                    <NavLink
                      to={"rigister"}
                      className={"hover:text-[#fff] text-[#a2a2a2] text-[14px]"}
                    >
                      Rigister
                    </NavLink>
                  </>
                )}
              </div>
            </div>
            {/* large screen list      */}

          </div>
          {/* end parent div  */}

          {/* small screen  */}
          {handleScreen ? (
            <ul className="small navbar  list-none flex-col mt-3 pb-3  md:hidden gap-5">
              {lists.map((li) => (
                <>
                  <li
                    style={styleList}
                    className="hover:text-white text-[#a2a2a2] py-[2.5px] px-[2.5px] cursor-pointer"
                  >
                    <NavLink to={li}>{li}</NavLink>
                  </li>
                </>
              ))}
              {/* start search  */}
              <div className="search my-3  me-3 flex-1   ">
                <form action="">
                  <input
                    type="text"
                    placeholder="Search to any Products"
                    className="w-full bg-transparent border border-1 text-[14px] border-[#a2a2a2] focus:border-[#0C87A1] outline-none text-[#ddd] placeholder:text-[#a2a2a2] rounded-md  py-1 px-2"
                  />
                </form>
              </div>
              {/* end search  */}
              <div className="inputs mt-3 md:flex ms-auto">
                <FaCartPlus
                  fontSize={"18px"}
                  className="hover:text-[#0C87A1] text-[#a2a2a2] cursor-pointer my-2"
                />
                {userData ? (
                  <NavLink to={"logout"} className={"ms-2 text-[#a2a2a2] text-[14px]"}>
                    Logout
                  </NavLink>
                ) : (
                  <>
                    <NavLink
                      to={"Login"}
                      className={
                        "md:mx-2 block hover:text-[#0C87A1] text-[#a2a2a2] my-2 text-[14px]"
                      }
                    >
                      Login
                    </NavLink>
                    <NavLink
                      to={"rigister"}
                      className={"hover:text-[#0C87A1] text-[#a2a2a2] text-[14px]"}
                    >
                      Rigister
                    </NavLink>
                  </>
                )}
              </div>
            </ul>
          ) : (
            ""
          )}
        </div>
        {/* end container div  */}
      </nav>
      {/* end nav  */}
    </>
  );
};

export default Navbar;
