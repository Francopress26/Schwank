import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";
import ball from '../../assets/MdiTennisBallOutline.svg'
export default function Chip({title,quote,description}) {
  return (
    <Card className="max-w-[300px] m-2 text-center md:max-w-[350px] md:h-min ">
      <CardHeader className="flex gap-3 flex-col items-center justify-center">
        <Image
          alt="nextui logo"
          height={40}
          radius="sm"
          src={ball.src}
          width={40}
        />
        <div className="flex flex-col">
          <p className="text-md">{title}</p>
          {/* <p className="text-small text-default-500">{quote}</p> */}
        </div>
      </CardHeader>
      <Divider/>
      <CardBody>
        <p className="text-gray-500 font-light">{description}</p>
      </CardBody>
      <Divider/>
      {/* <CardFooter>
        <Link
          isExternal
          showAnchorIcon
          href="https://github.com/nextui-org/nextui"
        >
          Visit source code on GitHub.
        </Link>
      </CardFooter> */}
    </Card>
  );
}
