const resume = {
  firstName: 'Sherif',
  lastName: 'Abouelmagd',
  jobTitle: 'Full Stack Developer, Open Source Contributor',
  city: 'Kuala Lumpur',
  postalCode: '050023',
  country: 'Malaysia',
  phone: '+601162016653',
  email: 'sherefabolmagd2010@gmail.com',
  education: [
    {
      school: 'University Technology Malaysia',
      degree: 'Bachelor',
      graduationDate: '2020',
      description: 'Software Engineering'
    }
  ],
  links: [
    {
      label: 'GitHub',
      link: 'https://github.com/SherefAbolmagd'
    },
    {
      label: 'LinkedIn',
      link: 'https://www.linkedin.com/in/sherif-abouelmagd'
    }
  ],
  skills: [
    'JavaScript',
    'TypeScript',
    'NodeJS/NestJS',
    'ReactJS',
    'React Native',
    'Firebase',
    'NativeScript',
    'Flutter',
    'Unity',
    'Python',
    'C',
    'C#',
    'C++',
    'Azure',
    'AWS',
    'GCP',
    'Alibaba Cloud',
    'Serverless Infrastructure',
    'PostgreSQL',
    'MongoDB'
  ],
  languages: ['English', 'Arabic'],
  professionalSummary: `Developer with a background in web, mobile, robotics and IOT, having 3+ years of practice with a passion for open-source projects and a commitment to delivering optimal solutions.
  Great enthusiastic teamwork, considered helpful, creative, assertive, problem solver and cautious.`,
  employmentHistory: [
    {
      jobTitle: 'Full Stack Developer',
      startDate: 'Jul 2021',
      endDate: 'Present',
      employer: 'DoctorOnCall',
      city: 'Kuala Lumpur - Malaysia',
      achievements: [
        'Created a CEM platform for the agents in the company to contact the patients (Customer Engagement Management).',
        'Worked on ERP system for the internal process of the company.',
        'Managed doctoroncall online platforms with millions views monthly and review the code changes and deployment to the cloud.',
        'Build DOCPOD which aims to expand access to patients, particularly those with chronic illnesses, in rural areas through mobile clinics placed in the rural communities under the goverment with RM 0.5 milion grant fund.',
        'Created a digital doctor that reply to patients enquiry on whatsapp using Chatgpt APIs.'
      ]
    },
    {
      jobTitle: 'Software Engineer',
      startDate: 'Jun 2021',
      endDate: 'May 2021',
      employer: 'Techcare Innovation Sdn. Bhd',
      city: 'Johor - Malaysia',
      achievements: [
        'Worked on creating mobile application that can connect to a balancing device through Bluetooth and be able to receive the data of the IMU sensor from the device to the mobile app to do assessment for patients who use the device.',
        'Created a rest API using Django and PostgreSQL hosted on AWS to upload the data from the mobile app to the cloud for monitoring and research.',
      ]
    },
    {
      jobTitle: 'Mobile Application Developer',
      startDate: 'Jun 2020',
      endDate: 'Jul 2020',
      employer: 'Rebartek',
      city: 'Remote / Norway',
      achievements: [
        'Worked Remotely on App development to help the company to keep track of their production line and the process at every station in the factory',
      ]
    },
    {
      jobTitle: 'Full Stack Developer',
      startDate: 'Dec 2019',
      endDate: 'Jan 2020',
      employer: 'Synapse Innovation Sdn. Bhd',
      city: 'Johor - Malaysia',
      achievements: [
        'Worked in a Team of 3 on a platform that teach kids how to program Arduino using blocks and program Arduino wirelessly using bluetooth.',
      ]
    },
    {
      jobTitle: 'Robot Programmer',
      startDate: 'Jun 2016',
      endDate: 'Nov 2018',
      employer: 'UTM Robocon Team',
      city: 'Johor - Malaysia',
      achievements: [
        'I was the programmer and the operator for the passing/kicking robot, used two ARM STM32f4 board to program and communication using CAN, I2C and UART and realtime OS with PID and path planning to be able to navigate using the encoders x,y and rotate using IMU sensor that control z angle, use Omni motors, power window motor, pneumatic system for passing and kicking the ball and other sensors to help positioning the robot every time at the same place.',
      ]
    },
  ],
  achievements: [
    {
      title: '2nd Runner-up IEEE Innovation Nation Malaysia Track',
      date: 'Dec 2020',
      achievements: []
    },
    {
      title: 'Champion of The Great lab National Smart Cities Track',
      date: 'Jun 2020',
      achievements: []
    },
    {
      title: 'Champion of UROCK National Robotics Competition',
      date: 'Sep 2019',
      achievements: []
    },
    {
      title: '1st Runner Up ABU Robocon Malaysia 2019',
      date: 'Apr 2019',
      achievements: []
    }
  ],
  photo: 'https://media.licdn.com/dms/image/D5603AQH5APoJTSgC4A/profile-displayphoto-shrink_800_800/0/1678081172430?e=1685577600&v=beta&t=RdFfRbvF9XtYzlFFA2Pn-wCpzLaoWfBB9io2reEd8Rw',
}

const formatResume = (r) => ({
  ...r,
  address: [
    r.country,
    r.city,
    r.postalCode
  ].filter(Boolean).join(', ')
})

new Vue({
  el: "#app",
  data: formatResume(resume)
});

/**
 * Wait for animatable-component to be loaded (Only for VanillaJS)
 **/
function animatableLoaded() {
  document.querySelector('body').classList.remove('d-none');
}
if (customElements) {
  customElements.whenDefined('animatable-component').then(animatableLoaded);
} else animatableLoaded()