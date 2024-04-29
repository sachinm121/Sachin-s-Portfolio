import React from "react";
import styles from "./Projects.module.css";
import Card from "./Card";
import expense from "../../assets/projects/expense.png";

// const Projects = () => {
//   return (
//     <div
//       className={`${styles.Projects} lg:px-32 lg:flex lg:flex-col justify-center`}
//     >
//       <div className="flex flex-row text-blue-200 mt-4 items-center gap-2">
//         <h1 className="text-[30px] font-bold md:text-[40px] lg:text-[35px]">
//           Projects
//         </h1>
//         <div className="border-b-4 border-solid border-blue-100 p-1 w-16"></div>
//       </div>
//       <div className="coding mt-8 flex flex-col gap-7">
//         <Card
//           name={"NIT JSR Complaint App (CampusVoice)"}
//           desc={`A React-based web application that allows users can manage thier expenses. The app integrates Mongodb  Database.The user can add expenses and income and can sort the expenses accoring to the time.`}
//           github={"https://leetcode.com/u/sachin121/"}
//           image={expense}
//           demo={""}
//           tech={["React", "Nodejs", "MongoDB", "Express", "AntDesign"]}
//         />
//         <Card
//           name={"NIT JSR Complaint App (CampusVoice)"}
//           desc={`A React-based web application that allows users can manage thier expenses. The app integrates Mongodb  Database.The user can add expenses and income and can sort the expenses accoring to the time.`}
//           github={"https://leetcode.com/u/sachin121/"}
//           image={expense}
//           demo={""}
//           tech={["React", "Nodejs", "MongoDB", "Express", "AntDesign"]}
//         />

//       </div>
//     </div>
//   );
// };

// export default Projects;

const Projects = () => {
  return (
    <div>
      <div
        className={`${styles.Projects} lg:px-32 lg:flex lg:flex-col justify-center`}
      >
        <div className="flex flex-row text-blue-200 mt-4 items-center gap-2">
          <h1 className="text-[30px] font-bold md:text-[40px] lg:text-[35px]">
            Projects
          </h1>
          <div className="border-b-4 border-solid border-blue-100 p-1 w-16"></div>
        </div>

        <div className="cards mt-8 flex flex-col gap-10">
          <Card
            name={"NIT JSR Complaint App (CampusVoice)"}
            desc={`A React-based web application that allows users can manage thier expenses. The app integrates Mongodb  Database.The user can add expenses and income and can sort the expenses accoring to the time.`}
            github={"https://leetcode.com/u/sachin121/"}
            image={expense}
            // demo={""}
            tech={["React", "Nodejs", "MongoDB", "Express", "AntDesign"]}
          />
          <Card
            name={"NIT JSR Complaint App (CampusVoice)"}
            desc={`A React-based web application that allows users can manage thier expenses. The app integrates Mongodb  Database.The user can add expenses and income and can sort the expenses accoring to the time.`}
            github={"https://leetcode.com/u/sachin121/"}
            image={expense}
            // demo={""}
            tech={["React", "Nodejs", "MongoDB", "Express", "AntDesign"]}
            flag={true}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
