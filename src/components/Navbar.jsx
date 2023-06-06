import React from "react";
const Nav = () => {
  const Social = [
    { name: "Home", link: "/#", icon: "fa-solid fa-house" },
    { name: "Profile", link: "/#", icon: "fa-regular fa-user" },
    { name: "Message", link: "/#", icon: "fa-regular fa-message" },
    { name: "Camera", link: "/#", icon: "fa-sharp fa-regular fa-camera" },
    { name: "Setting", link: "/#", icon: "fa-regular fa-gear" },
  ];

  const refLink = React.useRef(null);
  const Point = (e) => {
    console.log(e.clientX);
    let x = e.clientX - e.target.offsetLeft;

    refLink.current.style.top = `${255}px`;
    refLink.current.style.left = `${x - 30}px`;
  };

  return (
    <nav className="flex  items-center justify-center">
      <li
        ref={refLink}
        className="absolute translate-y-2/4 translate-x-2/4 rounded-full w-[50px] h-[50px] bg-[red] border-2  border-black border-solid list-none"
      ></li>
      <ul className="flex   bg-white radius rounded-t-[15px] p-[20px] h-[60px] overflow-hidden">
        {Social.map((item, index) => {
          return (
            <li
              key={index}
              onClick={(e) => Point(e)}
              className="flex relative z-10 flex-col items-center mx-2 duration-300 hover:translate-y-[-20px]"
            >
              <a href={item.link}>
                <i className={`${item.icon}  font-[FontAwesome]`}></i>
              </a>
              <span className="mt-[10px]">{item.name}</span>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
// Button Ripple Effect in HTML CSS & JavaScript codenepal
