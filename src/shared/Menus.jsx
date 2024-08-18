import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

function Menus(title) {
  const name = title.title;
  return (
    <div>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger
              className="font-normal text-black uppercase relative custom-trigger"
              style={{ backgroundImage: "none" }} // Assuming arrow is a background image
            >
              <span className=" uppercase">{name}</span>
            </NavigationMenuTrigger>
            {name === "Home" && (
              <NavigationMenuContent>
                <div className="flex">
                  <div className="bg-black text-white p-12 w-96">
                    <h1 className=" pb-2 text-lg font-semibold">Agency</h1>
                    <div className="flex flex-col ml-3 text-md font-medium">
                      {" "}
                      <NavigationMenuLink className="my-2 hover:tracking-wider hover:ease-in duration-200">
                        Digital Marketing{" "}
                      </NavigationMenuLink>
                      <NavigationMenuLink className="my-1 hover:tracking-wider hover:ease-in duration-200">
                        Digital Studio
                      </NavigationMenuLink>
                      <NavigationMenuLink className="my-1 hover:tracking-wider hover:ease-in duration-200">
                        Digital Agency
                      </NavigationMenuLink>
                      <NavigationMenuLink className="my-1 hover:tracking-wider hover:ease-in duration-200">
                        Creative Agenty
                      </NavigationMenuLink>
                      <NavigationMenuLink className="my-1 hover:tracking-wider hover:ease-in duration-200">
                        Startup Agenty
                      </NavigationMenuLink>
                      <NavigationMenuLink className="my-1 hover:tracking-wider hover:ease-in duration-200">
                        Modern Agenty
                      </NavigationMenuLink>
                      <NavigationMenuLink className="my-1 hover:tracking-wider hover:ease-in duration-200">
                        Personal Portfolio
                      </NavigationMenuLink>
                    </div>
                  </div>
                  <div className="bg-black text-white p-12 w-96">
                    <h1 className=" pb-2 text-lg font-semibold">Dark Agency</h1>
                    <div className="flex flex-col ml-3 text-md font-medium">
                      <NavigationMenuLink className="my-2 hover:tracking-wider hover:ease-in duration-200">
                        Digital Marketing{" "}
                      </NavigationMenuLink>
                      <NavigationMenuLink className="my-1 hover:tracking-wider hover:ease-in duration-200">
                        Digital Studio
                      </NavigationMenuLink>
                      <NavigationMenuLink className="my-1 hover:tracking-wider hover:ease-in duration-200">
                        Digital Agency
                      </NavigationMenuLink>
                      <NavigationMenuLink className="my-1 hover:tracking-wider hover:ease-in duration-200">
                        Creative Agenty
                      </NavigationMenuLink>
                      <NavigationMenuLink className="my-1 hover:tracking-wider hover:ease-in duration-200">
                        Startup Agenty
                      </NavigationMenuLink>
                      <NavigationMenuLink className="my-1 hover:tracking-wider hover:ease-in duration-200">
                        Modern Agenty
                      </NavigationMenuLink>
                      <NavigationMenuLink className="my-1 hover:tracking-wider hover:ease-in duration-200">
                        Personal Portfolio
                      </NavigationMenuLink>
                    </div>
                  </div>
                </div>
              </NavigationMenuContent>
            )}
            {name === "Services" && (
              <NavigationMenuContent>
                <div className="flex">
                  <div className="bg-black text-white p-5 w-72">
                    <div className="flex flex-col ml-3 text-md font-medium">
                      <NavigationMenuLink className="my-2 hover:tracking-wider hover:ease-in duration-200">
                        Service
                      </NavigationMenuLink>
                      <NavigationMenuLink className="my-2 hover:tracking-wider hover:ease-in duration-200">
                        Service V2
                      </NavigationMenuLink>
                      <NavigationMenuLink className="my-2 hover:tracking-wider hover:ease-in duration-200">
                        Service V3
                      </NavigationMenuLink>
                      <NavigationMenuLink className="my-2 hover:tracking-wider hover:ease-in duration-200">
                        Service V4
                      </NavigationMenuLink>
                      <NavigationMenuLink className="my-2 hover:tracking-wider hover:ease-in duration-200">
                        Service V5
                      </NavigationMenuLink>
                      <NavigationMenuLink className="my-2 hover:tracking-wider hover:ease-in duration-200">
                        Service V6
                      </NavigationMenuLink>
                      <NavigationMenuLink className="my-2 hover:tracking-wider hover:ease-in duration-200">
                        Service Details
                      </NavigationMenuLink>
                    </div>
                  </div>
                </div>
              </NavigationMenuContent>
            )}
            {name === "Team" && (
              <NavigationMenuContent>
                <div className="flex">
                  <div className="bg-black text-white p-5 w-72">
                    <div className="flex flex-col ml-3 text-md font-medium">
                      <NavigationMenuLink className="my-2 hover:tracking-wider hover:ease-in duration-200">
                        Team
                      </NavigationMenuLink>
                      <NavigationMenuLink className="my-2 hover:tracking-wider hover:ease-in duration-200">
                        Team Details
                      </NavigationMenuLink>
                    </div>
                  </div>
                </div>
              </NavigationMenuContent>
            )}
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

export default Menus;
