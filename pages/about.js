import styles from '../scss/About.module.scss';
import Link from 'next/link';
import Face from '../components/Face';
import Socials from '../components/Socials';

const About = () => {
  return (
    <>
      <div className={styles.container}>
        <ul className={styles.list}>
          <li>
            <h3>Education</h3>
            <p>
              Even before high school I had two major interests:{' '}
              <span className='accent-bold'>science and music</span>. In school
              I studied science, mathematics and modern languages. Outside of
              school, I played in bands and took piano lessons from the age of
              8. After finishing high school, I went to Group T in Leuven to
              study <span className='accent'>engineering</span>. However, after
              a year I quit and went to LUCA School of Arts to become a
              classical pianist. After five years I graduated magna cum laude as{' '}
              <span className='accent-bold'>
                Master in Arts, Piano Performance
              </span>
              .
            </p>
            <br></br>
            <p>
              After teaching for a couple of years and working for five years
              now as Branch Manager for Piano's Maene (see "Work" below), I
              decided to get myself a future proof, more technical skill:
              programming. So I signed up for a two year course of{' '}
              <span className='accent'>C# development</span> at PCVO in 2017.
            </p>
            <br></br>
            <p>
              When exploring different programming languages on my own, I got
              hooked to Javascript. The syntax, the community, the amount of
              packages, libraries and frameworks and the use of Javascript
              outside of the web with Node.js as a platform (programming
              Arduino's for example) got me into web development.
            </p>
            <br></br>
            <p>
              So I changed from C# development to a two year course to become a{' '}
              <span className='accent-bold'>Front End Developer</span> at Syntra
              Limburg. After graduating in 2020, continuous self learning and a{' '}
              <u>LOT</u> of debugging, I am now further developing as a
              Javascript developer by getting into backend development to become
              a full stack Javascript developer.
            </p>
          </li>
          <li>
            <h3>Work</h3>
            <p>
              As mentioned before, I have been{' '}
              <span className='accent-bold'>teaching</span> for a couple of
              years and working as a{' '}
              <span className='accent-bold'>Branch Manager</span> for Piano's
              Maene which is my current job. After having fulfilled an intensive
              training program of six months to become a{' '}
              <span className='accent'>piano technician</span>, I was hired in
              2016 by Piano's Maene.
            </p>
            <br></br>
            <p>
              At the time I was hired, the company was looking to open a "piano
              centre" in Limburg, Belgium. Since I spoke slowest and had an
              interest in and feeling for{' '}
              <span className='accent-italic'>
                Sales, Marketing and Business Development
              </span>
              , the company gave me the opportunity to build{' '}
              <a
                href='https://www.maene.be/nl/over-maene/onze-winkels/limburg'
                target='_blank'
              >
                <u>the most beautiful piano shop</u>
              </a>{' '}
              in Europe from the ground up. So we bought a church. Yes, we
              bought a church and transfered it to a awesome showroom with a
              stunning concert hall.
            </p>
            <br></br>
            <p>
              Now, five years later, I'm{' '}
              <span className='accent'>organizing concerts</span>,{' '}
              <span className='accent'>consulting</span> people, music schools
              and cultural houses when buying the right instrument,{' '}
              <span className='accent'>maintaining the webshop</span> and the{' '}
              <span className='accent'>marketing calender</span> for Limburg.
              Very interesting indeed. However, where is the programming part?
            </p>
          </li>
          <li>
            <h3>Web Development</h3>
            <p>
              Since I'm a very curious guy, I will probably be{' '}
              <span className='accent-bold'>learning forever</span>. This
              natural mind-set comes in handy when attempting to tackle
              something as huge and flourishing as the environment and community
              of web development. Since the learning curve is still steeper than
              the sheer speed by which the web progresses, it feels like you'll
              be learning forever (more). I could get used to this.
            </p>
            <br></br>
            <p>
              <figure>
                <q>
                  What separates design from art is that design is meant to
                  be... functional.
                </q>
                <figcaption>- C. Moll</figcaption>
              </figure>
              True fact. I'm not the most graphical skilled person myself
              though. My favorite art form is music because it's abstract. A
              design is concrete and thus way more difficult for me to develop.
              However, seeing structures and relations between components became
              my forte because I've put a lot of designs (Figma or AdobeXD) into
              beautiful, re-usable HTML and CSS.
            </p>
          </li>
        </ul>
        <div></div>
      </div>
    </>
  );
};

export default About;
