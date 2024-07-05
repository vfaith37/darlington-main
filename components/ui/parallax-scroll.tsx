import { useScroll, useTransform } from "framer-motion";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/utils/cn";
import React, { useRef } from "react";

export const ParallaxScroll = ({
  images,
  className,
}: {
  images: string[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  // Define parallax effects for each column
  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const translateThird = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const third = Math.ceil(images.length / 3);

  const firstPart = images.slice(0, third);
  const secondPart = images.slice(third, 2 * third);
  const thirdPart = images.slice(2 * third);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start max-w-5xl mx-auto gap-10 md:pt-20 lg:py-20 px-10",
        className
      )}
    >
      <div className="grid gap-10">
        {firstPart.map((el, idx) => (
          <motion.div style={{ y: translateFirst }} key={"grid-1" + idx}>
            <Image
              src={el}
              className="h-80 w-full object-cover object-left-top rounded-lg"
              height="400"
              width="400"
              alt="thumbnail"
            />
          </motion.div>
        ))}
      </div>
      <div className="grid gap-10">
        {secondPart.map((el, idx) => (
          <motion.div style={{ y: translateSecond }} key={"grid-2" + idx}>
            <Image
              src={el}
              className="h-80 w-full object-cover object-left-top rounded-lg"
              height="400"
              width="400"
              alt="thumbnail"
            />
          </motion.div>
        ))}
      </div>
      <div className="grid gap-10">
        {thirdPart.map((el, idx) => (
          <motion.div style={{ y: translateThird }} key={"grid-3" + idx}>
            <Image
              src={el}
              className="h-80 w-full object-cover object-left-top rounded-lg"
              height="400"
              width="400"
              alt="thumbnail"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};
