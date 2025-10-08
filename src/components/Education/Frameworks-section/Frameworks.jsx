import React from 'react'
import './Frameworks.css'
import react from '../../../assets/React-icon.svg.png';
import python from '../../../assets/Python.png';
import postgres from '../../../assets/Postgresql.png';
import git from '../../../assets/git.png';
import kinesis from '../../../assets/amazon-kinesis-1.svg';
import airflow from '../../../assets/apache_airflow.png';
import spark from '../../../assets/Apache_Spark_logo.svg.png';
import aurora from '../../../assets/aurora.webp';
import docker from '../../../assets/docker.png';
import dynamoDB from '../../../assets/DynamoDB.png';
import ec2 from '../../../assets/ec2.png';
import eks from '../../../assets/eks.png';
import excel from '../../../assets/excel.png';
import glue from '../../../assets/glue.png';
import java from '../../../assets/java.png';
import kub from '../../../assets/Kubernetes.png';
import csharp from '../../../assets/Logo_C_Sharp.svg';
import pandas from '../../../assets/pandas.png';
import powerbi from '../../../assets/Power_BI_Logo.svg';
import powerapps from '../../../assets/power-apps.png';
import sql from '../../../assets/sql.png';
import tableau from '../../../assets/Tableau-Symbol.png';

function Frameworks() {
  return (
    <div className='Frameworks'>
        <div className="pro-title">
            <p className="pro-title-text">Frameworks & Skills</p>
        </div>
        <div className="Framework-rows-container">
          <div className="framework-row one">
            <div className="f-row-title-con">
              <p className="f-row-title"><span>Programming</span> Languages/Libriares</p>
            </div>
            <div className="f-row-desc-con">
              <div className="bit">
                  <img src={react} alt="" className='bit-logo'/>
                  <h6 className='bit-text'>React JS</h6>
              </div>
              <div className="bit">
                  <img src={python} alt="" className='bit-logo'/>
                  <h6 className='bit-text'>Python</h6>
              </div>
              <div className="bit">
                  <img src={git} alt="" className='bit-logo'/>
                  <h6 className='bit-text'>Git</h6>
              </div>
              <div className="bit">
                  <img src={postgres} alt="" className='bit-logo'/>
                  <h6 className='bit-text'>SQL</h6>
              </div>
              <div className="bit">
                  <img src={spark} alt="" className='bit-logo'/>
                  <h6 className='bit-text'>Apache Spark</h6>
              </div>
              <div className="bit">
                  <img src={java} alt="" className='bit-logo'/>
                  <h6 className='bit-text'>Java</h6>
              </div>
              <div className="bit">
                  <img src={csharp} alt="" className='bit-logo'/>
                  <h6 className='bit-text'>C#</h6>
              </div>
              <div className="bit">
                  <img src={pandas} alt="" className='bit-logo'/>
                  <h6 className='bit-text'>Pandas</h6>
              </div>
              <div className="bit">
                  <span><img src={sql} alt="" className='bit-logo'/></span>
                  <h6 className='bit-text'>SQL</h6>
              </div>
            </div>
          </div>
          <div className="framework-row two">
            <div className="f-row-desc-con">
              <div className="bit">
                  <img src={excel} alt="" className='bit-logo'/>
                  <h6 className='bit-text'>Excel</h6>
              </div>
              <div className="bit">
                  <span><img src={kub} alt="" className='bit-logo'/></span>
                  <h6 className='bit-text'>Kubernetes</h6>
              </div>
              <div className="bit">
                  <img src={kinesis} alt="" className='bit-logo'/>
                  <h6 className='bit-text'>AWS Kinesis</h6>
              </div>
              <div className="bit">
                  <img src={airflow} alt="" className='bit-logo'/>
                  <h6 className='bit-text'>Apache Airflow</h6>
              </div>
              <div className="bit">
                  <img src={aurora} alt="" className='bit-logo'/>
                  <h6 className='bit-text'>AWS Aurora</h6>
              </div>
              <div className="bit">
                  <img src={glue} alt="" className='bit-logo'/>
                  <h6 className='bit-text'>AWS Glue</h6>
              </div>
              <div className="bit">
                  <img src={docker} alt="" className='bit-logo'/>
                  <h6 className='bit-text'>Docker</h6>
              </div>
              <div className="bit">
                  <img src={dynamoDB} alt="" className='bit-logo'/>
                  <h6 className='bit-text'>AWS DyanmoDB</h6>
              </div>
              <div className="bit">
                  <span><img src={ec2} alt="" className='bit-logo'/></span>
                  <h6 className='bit-text'>AWS EC2</h6>
              </div>
              <div className="bit">
                  <img src={eks} alt="" className='bit-logo'/>
                  <h6 className='bit-text'>EKS</h6>
              </div>
              <div className="bit">
                  <img src={powerbi} alt="" className='bit-logo'/>
                  <h6 className='bit-text'>PowerBI</h6>
              </div>
              <div className="bit">
                  <img src={powerapps} alt="" className='bit-logo'/>
                  <h6 className='bit-text'>PowerApps</h6>
              </div>
              <div className="bit">
                  <img src={tableau} alt="" className='bit-logo'/>
                  <h6 className='bit-text'>Tableau</h6>
              </div>
            </div>
            <div className="f-row-title-con"><p className="f-row-title"><span>Applications</span></p></div>
          </div>
          <div className="framework-row three">
            <div className="f-row-title-con"><p className="f-row-title"><span>Non-Techincal</span> Skills</p></div>
            <div className="f-row-desc-con"></div>
          </div>
        </div>
    </div>
  )
}

export default Frameworks