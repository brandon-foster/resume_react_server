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
                title: 'Consultant',
                projects: [
                    createProject('Open Payments, Department of Health and Human Services', '12/2022 - 7/2023', [
                        'Write features and provide defect resolutions to support users submitting payments in the Open Payments System.',
                        'J2EE on WebSphere. JavaServerFaces. PrimeFaces. Git.',
                    ]),
                    createProject('SPEED, US Citizenship and Immigration Services', '12/2021 - 12/2022', [
                        'Developer on a microservices team that provided web services to client applications for case management of applicants and beneficiaries.',
                        'Provided enhancements and defect resolution of microservices using Java and Spring Boot in the Agile Scrum methodology.',
                        'Rewrote inherited microservices by capturing the existing behavior in automated controller boundary layer tests to be used for verification of newly written, cohesive, and decoupled code.',
                        'Authored JUnit 5 automated unit tests at the service layer and the controller layer.',
                        'Used Mockito for isolating the system under test by mocking collaborator classes.',
                        'Used Spring test features for insantiating beans and optionally loading an application context.',
                        'Used JaCoCo to report test coverage including: instruction coverage, branch coverage, and cyclomatic complexity.',
                        'Helped to migrate microservices from Red Hat OpenShift to Amazon Elastic Kubernetes Service (EKS).',
                        'Used Spring Data JPA with Hibernate as the JPA provider.',
                        'Performed requirements gathering, analysis, design, implementation, automated testing, UAT testing, documentation, and support after deployment to the production environment.',
                        'Participated in Agile Scrum daily stand ups, backlog grooming, and other Agile ceremonies.',
                        'Volunteered off-hours time to provide a utility to perform text manipulation operations frequently used by the team.',
                        'Performed code reviews for pull requests.',
                        'Chosen to join the production support team to resolve high priority issues as determined by the client.',
                    ]),
                    createProject('Code Challenge', '11/2022 - 12/2022'),
                ],
            },
        ],
    },
    boeing: {
        employerName: 'Boeing',
        roles: [
            {
                title: 'Software Engineer I',
                projects: [
                    createProject('', null, [
                        'Wrote software enhancements and provided defect resolutions for mulitple applications.',
                        'Participated in planning implementation details of features and bugfixes.',
                        'Performed builds and deployments using tools including Maven, Gradle, Nexus, and Jenkins.',
                        'Wrote and tested Java code with JUnit and Mockito.',
                        'Wrote a front end prototype using Angular to demonstrate feasibility of visualizing and interacting with globe data.',
                    ]),
                    createProject('Map Target Prototyping Using Angular', null),
                    createProject('Perl Scripting', null),
                    createProject('Alert System Features and Defect Resolution', null),
                    createProject('Java, JavaScript, Features, Bugfixes', null),
                ],
            },
        ],
    },
};
export { employers };