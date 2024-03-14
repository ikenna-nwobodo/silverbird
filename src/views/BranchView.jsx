import React from "react";
import { useParams } from "react-router-dom";
import branches from "../data/branches";
import NowShowing from "../components/NowShowing";
import { motion } from "framer-motion";

function BranchView() {
  const branchTitle = useParams();
  const currentBranch = branches.filter((obj) => {
    return obj.title === branchTitle.title;
  });

  return currentBranch.map((branch) => {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="w-10/12 pb-20"
      >
        <div
          style={{ "--image-url": `url('${branch.image}')` }}
          className="bg-[image:var(--image-url)] bg-cover bg-top h-[300px] absolute top-0 w-full left-0"
        ></div>
        <div className="bg-gradient-to-t from-black to-transparent z-10 h-[300px] absolute top-0 w-full left-0"></div>
        <p className="text-3xl font-bold text-center my-16 relative z-20">
          <p>{branch.name}</p>
        </p>
        <NowShowing />
      </motion.div>
    );
  });
}

export default BranchView;
