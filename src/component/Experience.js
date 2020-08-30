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
  <Tree content="Socketworks Limited"   open style={treeStyles}>
    <Tree content="Head of Technology 2011 - Present" type={<span style={typeStyles}></span>}  >
        <Tree content="Accountable for defining technology and enterprise </br>architecture vision for the organization" style={{ color: 'red', align : 'justify'}} />
        <Tree content="Liaising with the Business, UX and Marketing teams to drive brand development and messaging" style={{ color: 'red' }} />
        <Tree content="Responsible for prioritising product requirements based on customer needs and implementing agile methodology to speed up development and delivery" style={{ color: 'red' }} />
        </Tree>
    <Tree content="Senior Technical Product Manager 2008 - 2011" type={<span style={typeStyles}></span>}  >
        <Tree content="Accountable for defining technology and enterprise </br>architecture vision for the organization" style={{ color: '#63b1de' }} />
        <Tree content="Liaising with the Business, UX and Marketing teams to drive brand development and messaging" style={{ color: '#63b1de' }} />
        <Tree content="Responsible for prioritising product requirements based on customer needs and implementing agile methodology to speed up development and delivery" style={{ color: '#63b1de' }} />
        </Tree>
    <Tree content="Manager, Customization & Deployment 2005 - 2008" type={<span style={typeStyles}></span>}  >
        <Tree content="Accountable for defining technology and enterprise </br>architecture vision for the organization" style={{ color: '#63b1de' }} />
        <Tree content="Liaising with the Business, UX and Marketing teams to drive brand development and messaging" style={{ color: '#63b1de' }} />
        <Tree content="Responsible for prioritising product requirements based on customer needs and implementing agile methodology to speed up development and delivery" style={{ color: '#63b1de' }} />
        </Tree>
    <Tree content="Head, Graphics & Front-end 2005 " type={<span style={typeStyles}></span>}  >
        <Tree content="Accountable for defining technology and enterprise </br>architecture vision for the organization" style={{ color: '#63b1de' }} />
        <Tree content="Liaising with the Business, UX and Marketing teams to drive brand development and messaging" style={{ color: '#63b1de' }} />
        <Tree content="Responsible for prioritising product requirements based on customer needs and implementing agile methodology to speed up development and delivery" style={{ color: '#63b1de' }} />
        </Tree>
    <Tree content="Lead Web Developer 2002 - 2004 " type={<span style={typeStyles}></span>}  >
        <Tree content="Accountable for defining technology and enterprise </br>architecture vision for the organization" style={{ color: '#63b1de' }} />
        <Tree content="Liaising with the Business, UX and Marketing teams to drive brand development and messaging" style={{ color: '#63b1de' }} />
        <Tree content="Responsible for prioritising product requirements based on customer needs and implementing agile methodology to speed up development and delivery" style={{ color: '#63b1de' }} />
        </Tree>
    </Tree>
  </div>
)

export default Experience;