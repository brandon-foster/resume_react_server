import { employers } from '../data/employers.js';

const ListItem = ({ text, i, listStyleType = null }) => {
  return (
    listStyleType === null ?
      <li dangerouslySetInnerHTML={{ __html: text }} key={`detail${i}`}></li>
      :
      <li style={{ listStyleType: listStyleType }} dangerouslySetInnerHTML={{ __html: text }} key={`detail${i}`}></li>
  );
};

const Project = ({ name, timeSpan, detailList, listStyleType }) => {
  return (
    <>
      <div className="mt-2 row">
        {timeSpan !== null ?
          <>
            <div className='col-12 col-md-3'>
              <p className="text-center text-md-end text-opacity-50">{name}</p>
              <p className='text-center text-md-end text-opacity-50 text-muted'>{timeSpan}</p>
            </div>
          </>
          :
          <p className="col-12 col-md-3 text-center text-md-end text-opacity-50">{name}</p>
        }
        {detailList !== undefined ?
          <div className="col-12 col-md-9 fw-light">
            <ul>
              {detailList.map((detail, i) =>
                <ListItem text={detail} i={i} listStyleType={listStyleType} />
              )}
            </ul>
          </div>
          : null}
      </div>
    </>
  );
};
const Role = ({ title, titleDateRange, projects, listStyleType }) => {
  return (
    <>
      <div className='mt-4'>
        <p dangerouslySetInnerHTML={{ __html: title }} className='text-center mb-0'></p>
        <p className='text-center text-muted'>{titleDateRange}</p>
        <div className='mt-4'>
          {projects.map((project, i) => {
            return (
              <Project key={`project${i}`} name={project.projectName} timeSpan={project.timeSpan} detailList={project.detailList} listStyleType={listStyleType}></Project>
            );
          })}
        </div>
      </div>
    </>
  );
};
const Roles = ({ roles, listStyleType }) => {
  return (
    <>
      {roles.map((role, i) =>
        <Role
          key={`role${i}`}
          title={role.title}
          titleDateRange={role.titleDateRange}
          projects={role.projects}
          listStyleType={listStyleType} />
      )}
    </>
  );
};
const WorkExperience = ({ info, listStyleType }) => {
  return (
    <div className='employer text-start'>
      <HeadingB text={info.employerName} />
      <Roles roles={info.roles} listStyleType={listStyleType}></Roles>
    </div>
  );
};

const HeadingB = ({ text }) => {
  return (
    <h2 className='mt-5 text-center display-6'>{text}</h2>
  );
};

const HeadingC = ({ text }) => {
  return (
    <>
      <p dangerouslySetInnerHTML={{ __html: text }} className='text-center mb-0'></p>
    </>
  );
};

const HeadingD = ({ text }) => {
  return (
    <p className='text-center text-muted'>{text}</p>
  );
};

export const ResumePage = () => {
  return (
    <>
      <WorkExperience info={employers.cgi} />
      <hr />
      <WorkExperience info={employers.boeing} />
      <hr />
      <HeadingB text={'Certifications'} />
      <WorkExperience info={employers.certificationsAndAwards} listStyleType={'none'} />
      <hr />
      <HeadingB text={'Education'} />
      <HeadingC text={'BS, Computer Science'}></HeadingC>
      <HeadingC text={'Virginia Tech'}></HeadingC>
      <HeadingD text={'May 2016'}></HeadingD>
    </>
  );
};