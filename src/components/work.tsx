export default function Work() {
  return (
    <>
      <div
        id="work"
        style={{
          alignSelf: 'start',
          marginLeft: '20vw',
          marginTop: '10vh',
          height: '5vh',
        }}
      ></div>
      <div
        className="mx-auto"
        style={{
          display: 'flex',
          maxWidth: '44Rem',
          flexDirection: 'column',
          alignContent: 'center',
          justifyContent: 'center',
          justifyItems: 'center',
          alignSelf: 'center',
          marginTop: '5vh',
          textAlign: 'left',
        }}
      >
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
          <li>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-start mb-10 md:text-end">
              <time className="font-mono italic">Microsoft | Current</time>
              <div className="text-lg font-black">Software Engineer</div>
              Working with the Microsoft AI Team.
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end mb-10">
              <time className="font-mono italic">Microsoft | Summer 2024</time>
              <div className="text-lg font-black">Software Engineer Intern</div>
              Created an email template validator tool enabling for quick
              validation, development, and testing of templates. Implemented
              test email sending orchestration using the Durable Task Framework
              to simulate production send outs. Created a dynamic email code
              editor and renderer enabling for the development and testing of
              dynamic emails.
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>

            <div className="timeline-start mb-10 md:text-end">
              <time className="font-mono italic">UCF | Fall 2023</time>
              <div className="text-lg font-black">
                Undergrad Teaching Assistant
              </div>
              Assisted a professor with their Introduction to Programming in C
              course. Held office hours to provide assistance to the students of
              the course. Collaborated with fellow teaching assistants to grade
              programming assignments and exams.
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end mb-10">
              <div className="timeline-start mb-10">
                <time className="font-mono italic">
                  Microsoft | Summer 2023
                </time>
                <div className="text-lg font-black">
                  Software Engineer Intern
                </div>
                Created a schedule of experiments that collected analytical data
                for Bing Feeds machine learning model. Developed a dynamic
                debugging dashboard that displayed Bing Feeds research metrics
                as time series data. Devised a mechanism that up-sampled
                underrepresented features within Bing Feeds offline training
                data. Executed test flights to determine whether the mechanism
                improved the performance of the model.
              </div>
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-start mb-10 md:text-end">
              <time className="font-mono italic">Microsoft | Summer 2022</time>
              <div className="text-lg font-black">Explore Intern</div>
              Collaborated with two interns to create a product proposal that
              detailed the impact/changes to Bing. Collected user feedback and
              metrics to determine the scenarios and features for the sports
              experience. Created a dynamic sports experience that provided
              schedule-based and outcome-based content.
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}
