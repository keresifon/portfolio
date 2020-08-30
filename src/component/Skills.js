import React from 'react'
import ReactDOM from 'react-dom'
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

const Skills = () => (
    <div>
  <Tree content="Tech Skills"   open style={treeStyles}>
    <Tree content="Frontend" type={<span style={typeStyles}></span>}  >
        <Tree content="HTML" style={{ color: 'red', align : 'justify'}} />
        <Tree content="CSS" style={{ color: 'red' }} />
        <Tree content="Javascript" style={{ color: 'red' }} />
        <Tree content="React" style={{ color: 'red' }} />
        <Tree content="Bootstrap" style={{ color: 'red' }} />
        </Tree>
    <Tree content="Backend" type={<span style={typeStyles}></span>}  >
        <Tree content="NodeJs" style={{ color: 'red', align : 'justify'}} />
        <Tree content="MongoDB" style={{ color: 'red' }} />
        <Tree content="MySQL" style={{ color: 'red' }} />
        <Tree content="MSSQL" style={{ color: 'red' }} />
        <Tree content="REST API" style={{ color: 'red' }} />
        </Tree>
    <Tree content="DevOps" type={<span style={typeStyles}></span>}  >
        <Tree content="Version Control /GITt" style={{ color: 'red', align : 'justify'}} />
        <Tree content="Docker" style={{ color: 'red' }} />
        <Tree content="Apache" style={{ color: 'red' }} />
        <Tree content="Nginx" style={{ color: 'red' }} />
        <Tree content="DNS, SSL" style={{ color: 'red' }} />
        </Tree>
     <Tree content="Others" type={<span style={typeStyles}></span>}  >
        <Tree content="Data Analysis - Tableau , Metabase " style={{ color: 'red', align : 'justify'}} />
        <Tree content="Helpdesk - Zoho Desk, JIRA, " style={{ color: 'red' }} />
        </Tree>

    </Tree>
  </div>
)

export default Skills;