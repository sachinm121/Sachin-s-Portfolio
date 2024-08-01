import expense from '../../assets/projects/expense.png';
import HMS from '../../assets/projects/HMS.png';
import CV from "../../assets/projects/CV.png"
import EMS from "../../assets/projects/EMS.png"
export const projectsFile1 = [
    {
        name: "NIT JSR Complaint App(CampusVoice)",
        desc: "This is MERN based app focusing on student complaint for NIT Jamshedpur, Here student can sign and login and can admit thier complaints. email: dummy@gmail.com, password: 123456",
        github: "https://github.com/sachinm121/CampusVoice",
        image: CV,
        demo: "https://campusvoice.vercel.app/",
        tech: ["MERN", "JWT", "AntDesign", "Tailwind", "Nodemailer", "Cloudinary"],
        flag: false
    },
    {
        name: "Employee Management App",
        desc: "This is Java based App for managing employee's details. Admin can manages employee's details of the company",
        github: "https://github.com/sachinm121/Employee-Management-App",
        image: EMS,
        demo: "https://github.com/sachinm121/Employee-Management-App",
        tech: ["React", "Spring-Boot", "JPA", "MySQL", "Material UI"],
        flag: true
    },
    {
        name: "Expenses Management App",
        desc: "This is an Expense Management App. User can sign and login and then user can manage thier expenses",
        github: "https://github.com/sachinm121/expense-management-system",
        image: expense,
        demo: "https://github.com/sachinm121/expense-management-system",
        tech: ["React", "Node", "Expressjs", "MongoDB", "AntDesign"],
        flag: false
    },
    {
        name: "Hospital Management System",
        desc: "The software developed is Hospital Management System Software that is designed by Sheetal Jain and Sachin Mahor.It has been designed keeping in mind today’s complex healthcare system’s requirements and the importance of TIME.",
        github: "https://github.com/sachinm121/Hospital-Managment-System",
        image: HMS,
        demo: "https://github.com/sachinm121/Hospital-Managment-System",
        tech: ["CoreJava", "Swing", "AWT", "MySQL"],
        flag: true
    },  
]

// name, desc, github, image, demo, tech, flag 