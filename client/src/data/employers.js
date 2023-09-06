function createProject(projectName, timeSpan, detailList) {
    const projectBase = {
        toString: function toString() {
            return `
                projectName: ${this.projectName},
                timeSpan: ${this.timeSpan}
            `;
        },
    };
    const project = Object.create(projectBase);
    project.projectName = projectName;
    project.timeSpan = timeSpan;
    project.detailList = detailList;
    return project;
}
const employers = {
    cgi: {
        employerName: 'CGI Federal',
        roles: [
            {
                title: 'Java Developer',
                titleDateRange: 'Dec 2021 - Jul 2023',
                projects: [
                    createProject('SPEED, US Citizenship and Immigration Services', null, [
                        'Java developer on a <span class="fw-bold">microservices</span> team to provide features and bugfixes for <span class="fw-bold">web services</span> used by client applications for case management of applicants and beneficiaries of USCIS.',
                        'Chosen to join the <span class="fw-bold">production support</span> team to resolve high priority issues as determined by the client.',
                        'Provided enhancements and defect resolution of microservices using <span class="fw-bold">Spring Boot</span> within the Agile Scrum methodology.',
                        'Rewrote inherited microservices by capturing existing behavior in <span class="fw-bold">automated controller layer tests</span> to be used for verification before writing new, cohesive, and decoupled code.',
                        'Authored <span class="fw-bold">JUnit 5</span> automated unit tests at the <span class="fw-bold">service layer</span> and <span class="fw-bold">controller layer</span>.',
                        'Used <span class="fw-bold">Mockito</span> for isolating the system under test by mocking collaborator classes.',
                        'Used <span class="fw-bold">Spring testing features</span> (SpringBootTest, WebMvcTest, MockMvc, MockBean) for insantiating beans and optionally loading an application context during the test itself.',
                        'Used <span class="fw-bold">JaCoCo</span> to report test coverage including instruction coverage, branch coverage, and <span class="fw-bold">cyclomatic complexity</span>.',
                        'Used <span class="fw-bold">Spring Data JPA</span> with Hibernate as the JPA provider.',
                        '<span class="fw-bold">Volunteered a text manipulation utility</span> for frequently used operations by the team.',
                        'Helped to migrate microservices from Red Hat OpenShift to Amazon Elastic Kubernetes Service (EKS).',
                        'Performed requirements gathering, analysis, design, implementation, automated testing, UAT testing, documentation, and support after deployment to the production environment.',
                        'Participated in Agile Scrum daily stand ups, backlog grooming, and other Agile ceremonies.',
                        'Performed code reviews.',
                    ]),
                    createProject('Code Challenge', null, [
                        'Selected to assist another team on a code challenge to secure a contract.',
                        'Wrote <span class="fw-bold">Docker</span> multi stage builds.',
                        'Set up <span class="fw-bold">Spring Boot integration tests</span>.',
                        'Mocked authentication and authorization for tests in concert with Amazon AWS Cognito.',
                    ]),
                    createProject('Open Payments, Department of Health and Human Services', null, [
                        'Wrote features and provided defect resolution to support users submitting payments in the Open Payments System.',
                        'J2EE on WebSphere. JavaServerFaces. PrimeFaces.',
                    ]),
                ],
            },
        ],
    },
    boeing: {
        employerName: 'Boeing',
        roles: [
            {
                title: 'Software Engineer I',
                titleDateRange: 'Jul 2016 - Feb 2021',
                projects: [
                    createProject('Summary', null, [
                        'Full stack developer writing software enhancements and providing defect resolutions for multiple applications.',
                        'Participated in planning implementation details of features and bugfixes.',
                        'Performed builds and deployments using tools including Maven, Gradle, Nexus, and Jenkins.',
                        'Wrote and tested Java code with JUnit and Mockito.',
                    ]),
                    createProject('Satellite Imagery', null, [
                        'Convert a legacy build cycle to a <span class="fw-bold">Maven Multi-Module build</span> from Ant & Ivy.',
                        'Provided defect resolutions using Java.',
                        'Automated unit tests using Mockito.',
                    ]),
                    createProject('Map Target Prototyping Using Angular', null, [
                        'Prototyped a front end 2D map UI prototype using <span class="fw-bold">Angular</span>.',
                        'Demonstrated the feasibility of visualizing and interacting with spatial target data.',
                    ]),
                    createProject('Alert System Features and Defect Resolution', null, [
                        'Provided features and defects resolution for an alarm management system that provides operational users with connectivity status.',
                    ]),
                ],
            },
        ],
    },
    certificationsAndAwards: {
        employerName: '',
        roles: [
            {
                title: '',
                titleDateRange: '',
                projects: [
                    createProject('CompTIA Security+', 'May 2023, QSVGK07M9DR11L9C', [
                        `Earners of the CompTIA Security+ certification have the knowledge and skills necessary to perform core security functions required of any cybersecurity role. CompTIA Security+ professionals know how to identify and address potential threats, attacks and vulnerabilities and they have established techniques in risk management, risk mitigation, threat management and intrusion detection.
                        Earners of the CompTIA Security+ certification have the knowledge and skills necessary to perform core security functions required of any cybersecurity role. CompTIA Security+ professionals know how to identify and address potential threats, attacks and vulnerabilities and they have established techniques in risk management, risk mitigation, threat management and intrusion detection.
                        `,
                        `
                        <figure>
                          <blockquote class="blockquote">
                          </blockquote>
                          <figcaption class="blockquote-footer">
                            verify cert at <cite title="CompTIA Security+ ce Certification"><a href="https://www.credly.com/badges/2686afb1-e3cb-4208-9c26-12afa3c57e9e" target="_blank" rel="noreferrer">credly.com</a></cite>
                          </figcaption>
                        </figure>
                        `.trim(),
                    ]),
                    createProject('AWS Certified Cloud Practitioner', 'August 2022, 0JTCWC22YM4Q1RKQ', [
                        'The AWS Certified Cloud Practitioner validates foundational, high-level understanding of AWS Cloud, services, and terminology.  This is a good starting point on the AWS Certification journey for individuals with no prior IT or cloud experience switching to a cloud career or for line-of-business employees looking for foundational cloud literacy.',
                        `
                        <figure>
                          <blockquote class="blockquote">
                          </blockquote>
                          <figcaption class="blockquote-footer">
                            <cite title="AWS Certified Cloud Practitioner"><a href="https://aws.amazon.com/certification/certified-cloud-practitioner/" target="_blank" rel="noreferrer">aws.amazon.com</a></cite>
                          </figcaption>
                        </figure>
                        `.trim(),
                    ]),
                    createProject('CIW Certified Internet Webmaster Associate', 'June 2010', [
                        `<p>Web Foundations<p>
                        <p>Internet Business</p>
                        <p>Network Technology</p>`.trim(),
                    ]),
                ],
            },
        ],
    },
};
export { employers };