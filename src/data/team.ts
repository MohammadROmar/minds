import Person1Img from "../assets/images/Person1.png";
import Person2Img from "../assets/images/Person2.png";
import Person3Img from "../assets/images/Person3.png";
import Person4Img from "../assets/images/Person4.png";
import Person5Img from "../assets/images/Person5.png";

type TeamMember = {
  name: string;
  image: string;
  specialization: string;
};

export const teamMembers: TeamMember[] = [
  {
    name: "Majd Ar",
    image: Person1Img,
    specialization: "Back-End developer",
  },
  {
    name: "Majd Lo",
    image: Person2Img,
    specialization: "Back-End developer",
  },
  {
    name: "Yousef A M",
    image: Person3Img,
    specialization: "Back-End developer",
  },
  {
    name: "Yazan Nh",
    image: Person4Img,
    specialization: "UI UX designer",
  },
  {
    name: "Mohammed Om",
    image: Person5Img,
    specialization: "Front-End developer",
  },
];
