import Lmaya from "../../assets/icons/autodesk.png";
import Laws from "../../assets/icons/aws-2.svg";
import Lc from "../../assets/icons/c.svg"
import Lcss from "../../assets/icons/css-5.svg"
import LUnity from "../../assets/icons/unity.png"
import Ldocker from "../../assets/icons/docker-logo.png"
import Lhtml from "../../assets/icons/html5.svg"
import Ljava from "../../assets/icons/java-4.svg"
import Ljupyter from "../../assets/icons/jupyter.png"
import Lnodejs from "../../assets/icons/nodejs-1.svg"
import Lpython from "../../assets/icons/python-4.svg"
import Lreact from "../../assets/icons/react.svg"
import Ljavascript from "../../assets/icons/js.png"
import Lgoogle from "../../assets/icons/google-cloud-1.svg"
import Lkube from "../../assets/icons/kube.png"
import LMongo from '../../assets/img/projects/mongodb.png'

export const skills = {
  programming_languages: [
    {
      link: "https://www.cplusplus.com/",
      imgAltText: "C++",
      imgSrc: Lc,
      skillName: "C++",
    },
    
    {
      link: "https://www.java.com/en/",
      imgAltText: "Java",
      imgSrc: Ljava,
      skillName: "Java",
    },
    {
      link: "https://www.javascript.com/",
      imgAltText: "Javascript",
      imgSrc: Ljavascript,
      skillName: "JavaScript",
    },
    {
      link: "https://www.python.org/",
      imgAltText: "Python",
      imgSrc: Lpython,
      skillName: "Python",
    },
  ],game_dev: [
    {
      link: "https://unity.com/",
      imgAltText: "Unity",
      imgSrc: LUnity,
      skillName: "Unity Engine",
    },
    
    {
      link: "https://www.autodesk.com/products/maya/overview?mktvar002=3466781|SEM|288487755|23187922995|kwd-298358543755&gclsrc=aw.ds&&ef_id=Cj0KCQjw2or8BRCNARIsAC_ppybTwdWAXMMt3rc1FVXtqmlfiQbdfRtLcnaAzfXCVYh9KQBWD-t593QaAuQZEALw_wcB:G:s&s_kwcid=AL!11172!3!383627497187!e!!g!!autodesk%20maya!288487755!23187922995&mkwid=sPB7Q7b92|pcrid|383627497187|pkw|autodesk%20maya|pmt|e|pdv|c|slid||pgrid|23187922995|ptaid|kwd-298358543755|pid|&utm_medium=cpc&utm_source=google&utm_campaign=GGL_AME_Maya_AMER_US_eComm_SEM_BR_New_EX_ADSK_3466781_&utm_term=autodesk%20maya&utm_content=sPB7Q7b92|pcrid|383627497187|pkw|autodesk%20maya|pmt|e|pdv|c|slid||pgrid|23187922995|ptaid|kwd-298358543755|&gclid=Cj0KCQjw2or8BRCNARIsAC_ppybTwdWAXMMt3rc1FVXtqmlfiQbdfRtLcnaAzfXCVYh9KQBWD-t593QaAuQZEALw_wcB&support=ADVANCED",
      imgAltText: "Maya",
      imgSrc: Lmaya,
      skillName: "Autodesk Maya",
    }  
  ],

  cloud_technologies: [
    {
      link: "https://aws.amazon.com/",
      imgAltText: "AWS",
      imgSrc: Laws,
      skillName: "Amazon Web Services",
    },
    {
      link: "https://cloud.google.com/",
      imgAltText: "GCP",
      imgSrc: Lgoogle,
      skillName: "Google Cloud Platform",
    },
  ],
  web_development: [
    {
      link: "https://nodejs.org/en/",
      imgAltText: "Nodejs",
      imgSrc: Lnodejs,
      skillName: "Node.js",
    },
    {
      link: "https://reactjs.org/",
      imgAltText: "React",
      imgSrc: Lreact,
      skillName: "React.js",
    },
    {
      link: "https://en.wikipedia.org/wiki/HTML",
      imgAltText: "HTML",
      imgSrc: Lhtml,
      skillName: "HTML5",
    },
    {
      link: "https://en.wikipedia.org/wiki/CSS",
      imgAltText: "CSS",
      imgSrc: Lcss,
      skillName: "CSS3",
    },
    {
      link: "https://www.mongodb.com/3",
      imgAltText: "mongo",
      imgSrc: LMongo,
      skillName: "MongoDB",
    },

  ],
  analytics_machine_learning: [
    {
      link: "https://jupyter.org/",
      imgAltText: "Jupyter",
      imgSrc: Ljupyter,
      skillName: "Jupyter Notbooks",
    },
    {
      link: "https://www.java.com/en/",
      imgAltText: "Python",
      imgSrc: Lpython,
      skillName: "Python",
    },
  ],
  dev_ops: [
    {
      link: "https://www.docker.com/",
      imgAltText: "Docker",
      imgSrc: Ldocker,
      skillName: "Docker",
    },
    {
      link: "https://kubernetes.io/",
      imgAltText: "Kuberenetes",
      imgSrc: Lkube,
      skillName: "Kubernetes",
    },
  ],
};