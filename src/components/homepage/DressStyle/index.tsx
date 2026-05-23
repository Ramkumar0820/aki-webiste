import { cn } from "@/lib/utils";
import { integralCF } from "@/styles/fonts";
import React from "react";
import * as motion from "framer-motion/client";
import DressStyleCard from "./DressStyleCard";

const DressStyle = () => {
  return (
    <div className="px-6 xl:px-0">
      <section className="max-w-frame mx-auto bg-[#F0F0F0] px-6 pb-6 pt-10 md:p-[30px] rounded-[40px] text-center">
        <motion.h2
          initial={{ y: "100px", opacity: 0 }}
          whileInView={{ y: "0", opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={cn([
            integralCF.className,
            "text-[24px] xl:text-[32px] leading-[36px] capitalize text-center mb-8 md:mb-10",
          ])}
        >
          BROWSE BY 
        </motion.h2>
        <motion.div
          initial={{ y: "100px", opacity: 0 }}
          whileInView={{ y: "0", opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex flex-col sm:flex-row md:h-[289px] space-y-4 sm:space-y-0 sm:space-x-5 mb-4 sm:mb-5 justify-center"
        >
          <DressStyleCard
            title="Trophy"
            url= "/shop?type=trophy"
            className="md:max-w-[260px] lg:max-w-[360px] xl:max-w-[407px] h-[190px] bg-[url('/images/trophy-style.jpeg')]"
          />
          <DressStyleCard
            title="Gift"
            url="/shop?type=gift"
            className="md:max-w-[684px] h-[190px] bg-[url('/images/trophy-style-2.jpg')]"
          />
        </motion.div>
        <motion.div
          initial={{ y: "100px", opacity: 0 }}
          whileInView={{ y: "0", opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 0.6 }}
          className="flex flex-col sm:flex-row md:h-[289px] space-y-5 sm:space-y-0 sm:space-x-5 justify-center"
        >
          <DressStyleCard
            title="Frames"
            url="/shop?type=frame"
            className="md:max-w-[684px] h-[190px] bg-[url('/images/trophy-style-3.jpg')]"
          />
          <DressStyleCard
            title="Photography"
            url="/shop?type=photography"
            className="md:max-w-[260px] lg:max-w-[360px] xl:max-w-[407px] h-[190px] bg-[url('/images/trophy-style-4.webp')]"
          />
        </motion.div>
      </section>
    </div>
  );
};

export default DressStyle;
