import React from "react";
import styles from "./Coding.module.css";
import hackerrank from "../../assets/coding/hackerrank.png";
import leetcode from "../../assets/coding/leetcode.png";
import codeforces from "../../assets/coding/code-forces.png";
import codechef from "../../assets/coding/codechef.png";
import gfg from "../../assets/coding/gfg.png";
import Card from "./Card";
import { FaStar } from "react-icons/fa";

const Coding = () => {
  return (
    <div
      className={`${styles.Coding} lg:px-32 lg:flex lg:flex-col justify-center `}
    >
      <div className="flex flex-row text-blue-200 mt-4 items-center gap-2">
        <h1 className="text-[30px] font-bold md:text-[40px] lg:text-[35px]">
          Coding
        </h1>
        <div className="border-b-4 border-solid border-blue-100 p-1 w-16"></div>
      </div>
      <div className="coding mt-8 flex flex-col gap-7 lg:grid lg:grid-cols-2">
        <Card
          logo={leetcode}
          name={"Leetcode"}
          desc={`400+ Questions Solved and Unloack 3 Badges`}
          linkto={"https://leetcode.com/u/sachin121/"}
        />
        <Card
          logo={gfg}
          name={"GeeksforGeeks"}
          desc={`250+ Questions solved and My Institute Rank is 629`}
        />
        <Card
          logo={hackerrank}
          name={"Hackerrank"}
          count={5}
          star={<FaStar />}
          desc={`in Problem Solving and Certificates of Problem Solving and SQL`}
          linkto={"https://www.hackerrank.com/profile/sachin_70"}
        />
        <Card
          logo={codechef}
          name={"CodeChef"}
          count={2}
          star={<FaStar />}
          desc={`in Coding Questions and 200+ Questions Solved and Achieved Global Rank in contest is 1463`}linkto={"https://www.codechef.com/users/sachin_70"}
        />
        <Card logo={codeforces} name={"Codeforces"} desc={`250+ Questions Solved and max rating 766*`} linkto={"https://codeforces.com/profile/sachin121"} />
      </div>
    </div>
  );
};

export default Coding;
