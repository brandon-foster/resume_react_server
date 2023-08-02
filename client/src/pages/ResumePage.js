import { employers } from '../data/employers.js';

const Project = ({ name, timeSpan, detailList }) => {
    return (
        <>
            <div className="row">
                    { timeSpan !== null ? <p className="col-12 col-md-3">{name}, {timeSpan}</p> : <p className="col-12 col-md-3">{name}</p> }
                    { detailList !== undefined ?
                        <div className="col-12 col-md-9">
                            <ul>
                                {detailList.map((detail, i) => 
                                    <li key={`detail${i}`}>{detail}</li>
                                )}
                            </ul>
                        </div>
                    : null }
            </div>
        </>
    );
};
const Role = ({ title, projects }) => {
    return (
        <>
            <p className="text-center">{ title }</p>
            {projects.map((project, i) => {
                return (
                    <Project key={`project${i}`} name={project.projectName} timeSpan={project.timeSpan} detailList={project.detailList}></Project>
                );
            })}
        </>
    );
};
const Roles = ({ roles }) => {
    return (
        <>
            {roles.map((role, i) => 
                <Role
                    key={`role${i}`}
                    title={role.title}
                    projects={role.projects}/>
            )}
        </>
    );
};
const WorkExperience = ({ info }) => {
    return (
        <div className='employer text-start'>
            <h2 className='text-center'>{info.employerName}</h2>
            <Roles roles={info.roles}></Roles>
        </div>
    );
};

export const ResumePage = () => {
    return (
        <>
            <WorkExperience info={employers.cgi}/>
            <WorkExperience info={employers.boeing}/>
            {/* <WorkExperience info={provideInfo('boeing')}/> */}
            {/* <WorkExperience info={provideInfo('boeing-intern-2015')}/> */}
            {/* <WorkExperience info={provideInfo('boeing-intern-2014')}/> */}
            {/* <WorkExperience info={provideInfo('vt')}/> */}
          {/* <h1>Example heading <span class="badge bg-secondary">New</span></h1> */}
          {/* <div class="row"> */}
            {/* <div class="col-4"> */}
            {/* </div> */}
            {/* <div class="col-8"> */}
            {/* </div> */}
          {/* </div> */}

          {/* <h1 class="mt-5">Boeing</h1> */}
          {/* <p class="lead">full stack developer</p> */}
          {/* <p class="lead">java programmer</p> */}
          {/* <p class="lead">front end prototyper</p> */}
          {/* <p class="lead">maven build redesigner</p> */}
          {/* <p class="lead">overhaul web site using Java Server Pages</p> */}
          {/* <p> */}
            {/* <a href="#" class="btn btn-lg btn-secondary fw-bold border-white bg-white">angular</a> */}
            {/* <a href="#" class="btn btn-lg btn-secondary fw-bold border-white bg-white">javascript</a> */}
          {/* </p> */}

          {/* <h1 class="mt-5">Network Infrastructure & Services, Virginia Tech</h1> */}
          {/* <p class="lead">contribute to experimental chat application using WebSocket emulation and Spring</p> */}
          {/* <p class="lead">write front end user interface for displaying and sorting tabular data</p> */}
        </>
    );
};