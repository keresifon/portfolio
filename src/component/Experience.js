import React from 'react'
import Tree from 'react-animated-tree'
//import './styles.css'

const treeStyles = {
  //position: 'relative',
  //top: 40,
  //left: 40,
  color: 'white',
  fill: 'white',
  width: '100%'
}

const typeStyles = {
  fontSize: '2em',
  verticalAlign: 'middle'
}

const Experience = () => (
    <div>
  <Tree content="IBM "   open style={treeStyles}>
    <Tree content="Application Developer 2023 - Present" type={<span style={typeStyles}></span>}  >
        <Tree content="Managed Amazon EKS clusters, ensuring stability and minimizing downtime." style={{ color: 'white', align : 'justify'}} />
        <Tree content="Automated deployments using Ansible, reducing errors and operational costs." style={{ color: 'white' }} />
        <Tree content="Resolved Kubernetes and Docker issues, maintaining high service availability." style={{ color: 'white' }} />
        </Tree>
   
    </Tree>
  <Tree content="Sentaca, an IBM Company "   open style={treeStyles}>
    <Tree content="Senior DevOps Engineer 2022 - 2023" type={<span style={typeStyles}></span>}  >
        <Tree content="Provided expert consultation in Build-Release Engineering to optimize CI/CD pipelines for clients." style={{ color: 'white', align : 'justify'}} />
        <Tree content="Redesigned CI/CD workflows for better scalability and efficiency tailored to client needs" style={{ color: 'white' }} />
        <Tree content="Advised running Jenkins on Kubernetes, detailing implementation steps and expected gains" style={{ color: 'white' }} />
        </Tree>
   
    </Tree>
  <Tree content="Socketworks Limited"   open style={treeStyles}>
    <Tree content="Head of Technology 2011 - 2021" type={<span style={typeStyles}></span>}  >
        <Tree content="Accountable for defining technology vision for the organization" style={{ color: 'white', align : 'justify'}} />
        <Tree content="Liaising with the Business, UX and Marketing teams to drive brand" style={{ color: 'white' }} />
        <Tree content="Prioritising product requirements and implementing agile methodology to speed up delivery" style={{ color: 'white' }} />
        </Tree>
    <Tree content="Senior Technical Product Manager 2008 - 2011" type={<span style={typeStyles}></span>}  >
        <Tree content="Evaluated customer customization requests" style={{ color: 'white' }} />
        <Tree content="Designed and managed a centralized technical support" style={{ color: 'white' }} />
        <Tree content="Implemented company policies, technical procedures and standards" style={{ color: 'white' }} />
        </Tree> 

    <Tree content="Manager, Customization & Deployment 2005 - 2008" type={<span style={typeStyles}></span>}  >
        <Tree content="Coordinated a team of web developers and software engineers " style={{ color: 'white' }} />
        <Tree content="Managed the deployment IT infrastructure and implemented early warning monitors" style={{ color: 'white' }} />
        <Tree content="Ensured efficient Data Management across the deployments" style={{ color: 'white' }} />
        </Tree>
    <Tree content="Head, Graphics & Front-end 2005 " type={<span style={typeStyles}></span>}  >
        <Tree content="Developed branding and identity standards for company" style={{ color: 'white' }} />
        <Tree content="Managed the web developers and graphic designers " style={{ color: 'white' }} />
        <Tree content="Worked as a bridge between engineering and design teams" style={{ color: 'white' }} />
        </Tree>
    <Tree content="Lead Web Developer 2002 - 2004 " type={<span style={typeStyles}></span>}  >
        <Tree content="Responsible for the development, maintenance and update of CSS  " style={{ color: 'white' }} />
        <Tree content="Develop user-friendly interfaces for web products" style={{ color: 'white' }} />
        <Tree content="Designed WordPress themed sites for the company’s client" style={{ color: 'white' }} />
        </Tree>
    </Tree>
  </div>
)

export default Experience;