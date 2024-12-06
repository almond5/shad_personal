import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import styles from '@/styles/Project.module.css';

export default function Projects() {
  return (
    <>
      <div
        id="projects"
        style={{
          marginLeft: '20vw',
          marginTop: '20vh',
          height: '5vh',
        }}
      ></div>
      <div className={styles.cards}>
        <Card
          style={{
            height: '25.5rem',
          }}
        >
          <CardHeader>
            <CardTitle>SafeLINC</CardTitle>
            <CardDescription>
              Mobile Safety for Suicide Prevention
            </CardDescription>
          </CardHeader>
          <CardContent>
            Contributed to a teen suicide prevention app that provides teens
            with tools to adhere to their safety plans. Implemented a mood
            tracking system, a culturally sensitive resource system, integrated
            a Calendly appointment scheduling & tracking system, translated the
            app in 4 languages, and improved app loading times by 200%.
            Leveraged AWS Lambda to apply styled HTML/CSS templates to the app's
            emails in 4 languages. Leveraged AWS EventBridge & Lambda to create
            4 recurring hydration jobs.
          </CardContent>
          <CardFooter>
            <a>React Native</a> <a>Expo</a> <a>AWS</a> <a>Calendly</a>{' '}
            <a>JavaScript</a>
          </CardFooter>
        </Card>
        <Card
          style={{
            height: '25.5rem',
          }}
        >
          <CardHeader>
            <CardTitle>9 Models on Biomedical Q&A</CardTitle>
            <CardDescription>
              Comparative Analysis of 9 Pre-trained Language Models on
              Biomedical Question Answering
            </CardDescription>
          </CardHeader>
          <CardContent>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </CardContent>
        </Card>
        <Card
          style={{
            height: '25.5rem',
          }}
        >
          <CardHeader>
            <CardTitle>PetPals</CardTitle>
            <CardDescription>"Dating" App for Pets</CardDescription>
          </CardHeader>
          <CardContent>
            Created a pal app for pets in which pet owners can create profiles
            for their pets to connect with others. Pet owners can create
            profiles for their pets, swipe through pets, match with pets, and
            view their matches. Within this project, I facilitated the app's API
            routes, page routing, session management, image rendering, database
            queries, and hosting / deployment. Fulfilled the positions of PM and
            Tech Lead by managing a team of 6 developers and leading
            development.
          </CardContent>
          <CardFooter>
            <a>TypeScript</a> <a>React</a> <a>Next.js</a> <a>Cloudinary</a>
            <a>Prisma</a>
            <a>NodeMailer</a> <a>Vercel</a>
            <a>TailwindCSS</a>
            <a>NoSQL</a>
          </CardFooter>
        </Card>

        <Card
          style={{
            height: '25.5rem',
          }}
        >
          <CardHeader>
            <CardTitle>University Connect</CardTitle>
            <CardDescription>Project Description</CardDescription>
          </CardHeader>
          <CardContent>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </CardContent>
        </Card>
        <Card
          style={{
            height: '25.5rem',
          }}
        >
          <CardHeader>
            <CardTitle>Personal Portfolio</CardTitle>
            <CardDescription>Project Description</CardDescription>
          </CardHeader>
          <CardContent>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </CardContent>
        </Card>
        <Card
          style={{
            height: '25.5rem',
          }}
        >
          <CardHeader>
            <CardTitle>IMBD LSTM</CardTitle>
            <CardDescription>Project Description</CardDescription>
          </CardHeader>
          <CardContent>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </CardContent>
        </Card>
        <Card
          style={{
            height: '25.5rem',
          }}
        >
          <CardHeader>
            <CardTitle>Composition Notes</CardTitle>
            <CardDescription>Project Description</CardDescription>
          </CardHeader>
          <CardContent>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </CardContent>
        </Card>
        <Card
          style={{
            height: '25.5rem',
          }}
        >
          <CardHeader>
            <CardTitle>Contastic</CardTitle>
            <CardDescription>Project Description</CardDescription>
          </CardHeader>
          <CardContent>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </CardContent>
        </Card>
      </div>
    </>
  );
}
