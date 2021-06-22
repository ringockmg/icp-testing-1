import React from "react";

import { getWall } from "@/store/actions/wall";
import { createAnonymousActors } from "@/ic/actor";

import Linkify from "linkifyjs/react";

import ICPrincipal from "@/components/header/ICPrincipal";
import EthAccount from "@/components/header/EthAccount";
import Userinfo from "@/components/wall/Userinfo";

export default function Component() {
  const actors = createAnonymousActors();
  const [finished, result] = getWall.useBeckon({ actors });
  const wall = result?.payload;

  if (!finished) return <div>Loading…</div>;
  if (!wall) return <div>Error</div>;

  return (
    <div className="p-5 mb-4 text-center bg-green-800 rounded-lg">
      <div className="pb-4">
        Your ETH address is: <EthAccount />
      </div>
      <div className="pb-4">
        Your IC princiapl is: <ICPrincipal />
      </div>
      <div className="pb-4">
        Your BSC address is: <EthAccount />
      </div>
    </div>
  );



  // if (wall.length === 0)
  //   return (
  //     <div className="p-5 mb-4 text-center bg-green-800 rounded-lg">
  //       <div className="pb-4">
  //         ETH address is: <EthAccount />
  //       </div>
  //     </div>
  //   );

  // return (
  //   <div className="pb-4">
  //     {wall
  //       .slice()
  //       .reverse()
  //       .map((post) => (
  //         <div className="mb-5 text-center">
  //           <div className="p-5 mb-2 overflow-hidden text-white bg-green-800 rounded-lg">
  //             <Linkify
  //               options={{
  //                 className: "underline hover:text-yellow-200",
  //                 target: "_blank",
  //               }}
  //             >
  //               {post.text}
  //             </Linkify>
  //           </div>
  //           <Userinfo principal={post.user} />
  //         </div>
  //       ))}
  //   </div>
  // );
}
